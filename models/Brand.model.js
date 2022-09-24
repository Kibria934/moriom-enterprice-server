const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const brandScheme = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Please provide a brand name."],
      lowercase: true,
      maxLength: 200,
      unique: true,
    },
    description: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      validate: [validator.isEmail, "Please provide a valid Email"],
      lowercase: true,
    },
    website: {
      type: String,
      validate: [validator.isURL, "Please provide a valid URL"],
    },
    location: {
      type: String,
      lowercase: true,
    },
    products: [
      {
        type: ObjectId,
        ref: "Product",
      },
    ],
    suppliers: [
      {
        name: String,
        contact: String,
        id: {
          type: ObjectId,
          ref: "Supplier",
        },
      },
    ],
    status: {
      type: String,
      enum: {
        values: ["active", "inactive"],
        default: "active",
      },
    },
  },
  { timestamps: true }
);

const Brand = mongoose.model("Brand", brandScheme);

module.exports = Brand;
