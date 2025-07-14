import { useCartStore } from "../store/Cart/cart";
import { BaseUrl } from "../lib/axios";
//import Button from "../components/Button/Button.component";
//import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import html2canvas from "html2canvas-pro";
import { jsPDF } from "jspdf";

const Cart = () => {
  const { cart } = useCartStore((state) => state);
  const contentRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      HandleDownload();
    }
  }, [cart]);

  const HandleDownload = async () => {
    setTimeout(() => {}, 1000);
    const element = contentRef.current;
    if (!element) {
      return;
    }
    const canvas = await html2canvas(element, { scale: 2 });
    const data = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
    });
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = Number(pdf.internal.pageSize.getWidth());
    const pdfHeight = Number(
      (imgProperties.height * pdfWidth) / imgProperties.width,
    );
    //window.open(data);
    console.log(data);
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: [pdfWidth, pdfHeight],
    });

    doc.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight).save("catalog.pdf");
  };
  return (
    <main className="min-w-full gap-y-5 pt-6 text-center">
      <div className="min-w-full mt-12 flex flex-wrap justify-center gap-4 pb-12">
        {/*<div className="min-w-full felx flex-col justify-between space-x-5 ">
          <Link to="/">
            <Button buttonStyle="base">back</Button>
          </Link>
          <Button buttonStyle="base" onButtonClick={HandleDownload}>
            Download
          </Button>
        </div>*/}
        <div className="min-w-full max-h-full flex overflow-scroll justify-center">
          <table
            ref={contentRef}
            className=" relative  text-lg text-left rtl:text-right text-gray-500 dark:text-gray-400 md:right-5  border-black border-2"
          >
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-6 py-3">Image</th>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">description</th>
              </tr>
            </thead>
            <tbody>
              {cart &&
                cart.map((cartItem) => (
                  <tr key={cartItem.id} className="bg-white dark:bg-gray-800 ">
                    <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white  border-black border-2">
                      <img
                        className="max-w-100"
                        src={BaseUrl + cartItem.image}
                      />
                    </th>
                    <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white  border-black border-2">
                      {cartItem.title}
                    </th>
                    <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white  border-black border-2">
                      {cartItem.description}
                    </th>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default Cart;
