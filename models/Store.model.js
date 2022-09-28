const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

// Store Schema
const storeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      enum: {
        values: [
          "dhaka",
          "khulna",
          "rajshahi",
          "chattogram",
          "sylhet",
          "barishal",
          "mymensingh",
          "rangpur",
        ],
        message: "{VALUE} is not valid!",
      },
      unique: true,
      required: [true, "Please provide a store name."],
    },
    description: String,
    manager: {
      name: {
        type: String,
        trim: true,
      },
      contactNumber: String,
      id: {
        type: ObjectId,
        ref: "User",
      },
    },
  },
  { timestamps: true }
);

const Store = mongoose.model("Store", storeSchema); // Create store model.

module.exports = Store;
