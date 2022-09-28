const express = require("express");
const cors = require("cors");
const colors = require("colors");
const Products = require("./models/Products.model");
const { dbConnect } = require("./utils/db.connect");
const { errorHandler } = require("./utils/errorHandler");
require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();

const productsRoute = require("./routes/products.route");
const brandRoute = require("./routes/brand.route");
const categoryRoute = require("./routes/category.route");
const storeRoute = require("./routes/store.route");
const stockRoute = require("./routes/stock.route");

app.use(express.json());
app.use(cors());

// ########## Db connection ##########
dbConnect();

// ########## Routes ##########

app.use("/api/v1/products", productsRoute);
app.use("/api/v1/brand", brandRoute);
app.use("/api/v1/store", storeRoute);
app.use("/api/v1/stock", stockRoute);
app.use("/api/v1/category", categoryRoute);

// ########## Error handler ##########
app.use(errorHandler);

// ########## Home route ##########
app.get("/", (req, res) => {
  res.send(`<h1>Hello from moriom enterprice server </h1>`);
});

//########## Not found page ##########
app.get("/*", (req, res) => {
  res.send("<h1>Not Found</h1");
});

// ######### Application ##########
app.listen(port, () => {
  console.log("moriom enterprice server is running on port".red.bold, port);
});

//https://moriom-enterprice-server.vercel.app/
