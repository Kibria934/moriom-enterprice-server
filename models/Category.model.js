const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

// category schema
const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      lowercase: true,
      required: [true, "Please provide a category name."],
      unique: true,
    },
    description: String,
    imageUrl: {
      type: String,
      validator: [validator.isURL, "Please provide a valid URL"],
    },
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", categorySchema); // category model

module.exports = Category;
