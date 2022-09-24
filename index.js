const express = require("express");
const cors = require("cors");
const colors = require("colors");
const Products = require("./models/Product.model");
const { dbConnect } = require("./utils/db.connect");
require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());

dbConnect();

app.post("/post", async (req, res) => {
  const result = await Products.create(req.body);
  res.send({
    message: "successfullt created app",
    data: result,
  });
});

app.get("/all", async (req, res) => {
  const result = await Products.find({});
  res.send(result);
});

app.get("/", (req, res) => {
  res.send(`<h1>Hello from moriom enterprice server </h1>`);
});

app.listen(port, () => {
  console.log("moriom enterprice server is running on port", port);
});

//https://moriom-enterprice-server-001.vercel.app/
