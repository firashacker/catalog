const { PrismaClient } = require("./generated/prisma");
const prisma = new PrismaClient();

async function seedDatabase() {
  // Create Categories
  const Categories = [
    {
      name: "juice",
    },
    {
      name: "coffee",
    },
    {
      name: "tea",
    },
    {
      name: "milk",
    },
    {
      name: "sugar",
    },
  ];

  for (const Category of Categories) {
    await prisma.categories.create({
      data: { ...Category },
    });
  }

  // Create Products
  const Products = [
    {
      id: 1,
      title: "lemon juice",
      description: "random text",
      price: 6,
      image: `https://picsum.photos/600/600?image=1`,
      categoriesId: 1,
    },
    {
      id: 2,
      title: "arabica coffee beans",
      description: "high-quality coffee beans",
      price: 10,
      image: `https://picsum.photos/600/600?image=2`,
      categoriesId: 2,
    },
    {
      id: 3,
      title: "English Breakfast tea",
      description: "strong and full-bodied tea",
      price: 5,
      image: `https://picsum.photos/600/600?image=3`,
      categoriesId: 3,
    },
    {
      id: 4,
      title: "2% milk powder",
      description: "perfect for coffee and cereal lovers",
      price: 3,
      image: `https://picsum.photos/600/600?image=4`,
      categoriesId: 4,
    },
    {
      id: 5,
      title: "white sugar crystals",
      description: "high-quality sugar for baking and cooking",
      price: 2,
      image: `https://picsum.photos/600/600?image=5`,
      categoriesId: 5,
    },
    {
      id: 6,
      title: "lemon juice",
      description: "random text",
      price: 6,
      image: `https://picsum.photos/600/600?image=6`,
      categoriesId: 1,
    },
    {
      id: 7,
      title: "arabica coffee beans",
      description: "high-quality coffee beans",
      price: 10,
      image: `https://picsum.photos/600/600?image=7`,
      categoriesId: 2,
    },
    {
      id: 8,
      title: "English Breakfast tea",
      description: "strong and full-bodied tea",
      price: 5,
      image: `https://picsum.photos/600/600?image=8`,
      categoriesId: 3,
    },
    {
      id: 9,
      title: "2% milk powder",
      description: "perfect for coffee and cereal lovers",
      price: 3,
      image: `https://picsum.photos/600/600?image=9`,
      categoriesId: 4,
    },
    {
      id: 10,
      title: "white sugar crystals",
      description: "high-quality sugar for baking and cooking",
      price: 2,
      image: `https://picsum.photos/600/600?image=10`,
      categoriesId: 5,
    },
  ];

  for (const Product of Products) {
    await prisma.products.create({
      data: { ...Product },
    });
  }

  // Create ProductsOrders
  const POrders = [
    {
      id: 1,
      totalPrice: 13.5,
    },
    {
      id: 2,
      totalPrice: 19.5,
    },
    {
      id: 3,
      totalPrice: 10,
    },
    {
      id: 4,
      totalPrice: 120,
    },
    {
      id: 5,
      totalPrice: 13,
    },
  ];

  for (const POrder of POrders) {
    await prisma.productsOrders.create({
      data: { ...POrder },
    });
  }

  // Create Orders
  const Orders = [
    {
      orderId: 1, // reference to Product ID and POrder ID
      productId: 1,
      quantity: 2,
    },
    {
      orderId: 2,
      productId: 2,
      quantity: 3,
    },
    {
      orderId: 3,
      productId: 3,
      quantity: 1,
    },
    {
      orderId: 4,
      productId: 4,
      quantity: 2,
    },
    {
      orderId: 5,
      productId: 5,
      quantity: 1,
    },
  ];

  for (const Order of Orders) {
    await prisma.orders.create({
      data: { ...Order },
    });
  }

  console.log("Database seeded successfully!");
}

const test = async () => {
  const totalMonthlySalesBills = await prisma.workingDays.aggregate({
    _sum: {
      totalSales: true,
      totalBills: true,
    },
    where: {
      workingMonthId: null,
    },
  });

  console.log(totalMonthlySales._sum);
};
//test();
seedDatabase();
