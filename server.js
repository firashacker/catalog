const express = require("express");
const app = express();
const port = process.env.SERVER_PORT || 3000; // Use environment variable or default to 3000
const publicDirs = ["uploaded"];
const mainIndex = `${publicDirs[1]}/index.html`;
const bodyParser = require("body-parser");
const multer = require("multer");
const fs = require("fs");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");



var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = path.join(__dirname, `${publicDirs[0]}/images`);
    // Check if the directory exists, and create it if it doesn't.
    fs.mkdir(uploadDir, { recursive: true }, (err) => {
      if (err) {
        return cb(err); // Pass the error to Multer
      }
      cb(null, uploadDir); // Callback with the directory path
    });
    //cb(null, `${publicDir}/images`);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + `.${file.mimetype.split("/")[1]}`); //Appending .jpg
  },
});

const upload = multer({ storage: storage }).single("image");
const { PrismaClient } = require("./generated/prisma");
const prisma = new PrismaClient();

// Configure Express app
app.use(bodyParser.json(), cookieParser());

// Enable CORS (Cross-Origin Resource Sharing) - Allowing requests from the frontend
const cors = require('cors');

// CORS setup to accept all routes from specific origin
const corsOptions = {
  origin: 'http://37.60.227.221:3000', // Change to the origin you want to accept, e.g., your frontend URL or IP
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],  // Allow specific methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow headers
  credentials: true  // If you're using cookies or authentication tokens
};

// Apply CORS to all routes
app.use(cors(corsOptions));
/*app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://37.60.227.221:3000"); // Replace with your frontend URL");
  res.header("Access-Control-Allow-Headers", " Content-Type, Authorization");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Credentials", "true");

  next();
});
*/

//generate tokens
// Generate JWT payload - Data to be encoded in the JWT
const GeneratePayload = (user) => {
  return {
    id: user.id,
    username: user.username,
    isAdmin: user.isAdmin,
  };
};
// Generate Access Token - JWT for short-term access
const GenerateAccessToken = (user) => {
  return jwt.sign(user, process.env.SECRET_KEY, {
    expiresIn: "1h",
  });
};
// Generate Refresh Token -  Longer-lived token for obtaining new access tokens
const GenerateRefreshToken = (user) => {
  return jwt.sign(user, process.env.SECRET_REFRESH_KEY);
};

// Verify token middleware
const verify = (req, res, next) => {
  const token = req.cookies["token"];

  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) {
        return res.status(403).json("Token is not valid!");
      }
      req.user = user;
      next();
    });
  } else {
    res.status(401).json("You are not authenticated!");
  }
};

// Sign in
app.post("/api/login", async (req, res) => {
  if (!req.body?.username || !req.body?.password)
    return res.status(401).json({ error: "Invalid Username or Password" });
  const { username, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { username: username },
    });

    if (username === "admin" && !user) {
      // Register Admin User if its not registered
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await prisma.user.create({
        data: {
          username: username,
          isAdmin: true,
          password: hashedPassword,
        },
      });
      console.log("newUser: " + newUser);
      const payload = GeneratePayload(newUser);
      console.log("payload: " + payload);
      const accessToken = GenerateAccessToken(payload);
      const refreshToken = GenerateRefreshToken(payload);

      await prisma.user.update({
        where: {
          id: newUser.id,
        },
        data: {
          refreshtoken: refreshToken,
        },
      });

      res.cookie("token", accessToken, {
        httpOnly: true,
      });
      return res.send({ refreshToken, ...payload });
    }

    if (!user) {
      return res
        .status(401)
        .json({ error: "Invalid phone number or password" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res
        .status(401)
        .json({ error: "Invalid phone number or password" });
    }

    const payload = GeneratePayload(user);
    const accessToken = GenerateAccessToken(payload);
    const refreshToken = GenerateRefreshToken(payload);
    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        refreshtoken: refreshToken,
      },
    });

    res.cookie("token", accessToken, {
      httpOnly: true,
    });
    res.send({ refreshToken, ...payload });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to login" });
  }
});

// Sign Out
app.post("/api/logout", verify, async (req, res) => {
  const token = req.cookies["token"];

  if (token) {
    const userId = jwt.decode(token).id;

    //console.log(typeof userId);
    if (typeof userId != "number") res.status(400).json("Bad Request!");
    const invalidateToken = async () => {
      try {
        await prisma.user.update({
          where: {
            id: userId,
          },
          data: {
            refreshtoken: "",
          },
        });
      } catch (err) {
        //console.log(err);
        res.status(500).json({ error: "Failed to authorize!" });
      }
      //console.log("invalidated UserID: " + userId);
    };
    res.cookie("token", "");
    invalidateToken();
  }

  res.status(200).json("Signed Out!");
});

// Refresh accessToken
app.post("/api/refresh", async (req, res) => {
  console.log("attempting Refresh");
  // get refreshToken
  const refreshToken = req.body.token;
  //console.log(refreshToken);

  //send error if theres no token
  if (!refreshToken) return res.status(401).json("You are not authenticated!");

  // verify token
  jwt.verify(
    refreshToken,
    process.env.SECRET_REFRESH_KEY,
    async (err, user) => {
      err && console.log(err); // log any errors

      // get user refresh token from database
      const userToken = await prisma.user.findUnique({
        where: {
          id: user.id,
        },
        select: {
          refreshtoken: true,
        },
      });
      const validToken = userToken["refreshtoken"];

      // compare the tow tokens to check if the  token valid
      if (refreshToken !== validToken)
        return res.status(403).json("Refresh token is not valid!"); // return error if they didn't match

      // create new tokens if every thing is ok
      const payload = GeneratePayload(user);
      const newAccessToken = GenerateAccessToken(payload);
      const newRefreshToken = GenerateRefreshToken(payload);
      // update the database with the new refreshToken
      await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          refreshtoken: newRefreshToken,
        },
      });
      // send new tokens to client
      try {
        res.cookie("token", newAccessToken, {
          httpOnly: true,
        });
        res.status(200).json({ refreshToken: newRefreshToken, ...user });
      } catch (error) {
        console.error(error); // log any errors
        res.status(500).json({ error: "Failed to authorize" });
      }
    },
  );
});

// get Categories
app.get("/api/categories", async (req, res) => {
  try {
    const categories = await prisma.categories.findMany();
    res.status(200).json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch Products" });
  }
});

// create Categories
app.post("/api/categories", verify, async (req, res) => {
  try {
    const Category = req.body;
    console.log(Category);
    const response = await prisma.categories.create({ data: Category });
    console.log(response);
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//get Products
app.get("/api/products", async (req, res) => {
  try {
    const Products = await prisma.products.findMany({
      where: {
        listed: true,
      },
    });

    res.status(200).json(Products);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//delete Products
app.post("/api/products/:id", verify, async (req, res) => {
  const ProductId = req.params.id;
  try {
    console.log("deleting: " + ProductId);
    await prisma.products.update({
      where: { id: Number(ProductId) },
      data: {
        listed: false,
      },
    });
    res.status(200).json("deleted");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// upload Products
app.post("/api/products", verify, async (req, res) => {
  try {
    const Product = req.body;
    console.log(Product);
    const response = await prisma.products.create({ data: Product });

    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

app.post("/api/image", verify, upload, (req, res) => {
  console.log("uploading");
  res.status(200).json(req.file);
});

const path = require("path");
const { setTimeout } = require("timers");

publicDirs.map((publicDir) => {
  app.use(express.static(path.join(__dirname, publicDir)));
});

app.get("*", (req, res) => {
  console.log(req.url);
 // res.sendFile(path.join(__dirname, mainIndex));
});

app.listen(
  port,
  //"127.0.0.1", //localhost only
  () => {
    console.log(`App listening on port ${port}`);
  },
);
