const mongoose = require("mongoose");

const porductSchema = mongoose.Schema({
  name: String,
  description: String,
});

const Products = mongoose.model("Products", porductSchema);
module.exports = Products;
