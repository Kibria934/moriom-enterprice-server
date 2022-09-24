const express = require("express");
const cors = require("cors");
const colors = require("colors");
const mongoose = require("mongoose");
require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send(`<h1>Hello from moriom enterprice server </h1>`);
});

app.listen(port, () => {
  console.log("moriom enterprice server is running on port", port);
});
