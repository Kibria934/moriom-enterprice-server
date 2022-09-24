const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const stockSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a Stock name!"],
      trim: true,
      lowercase: true,
      unique: [true, "Stock name must be unique!"],
      maxLength: [100, "Stock name must be less than 100 character!"],
    },
    description: String,
    unite: {
      type: String,
      enum: {
        values: ["kg", "litre", "pcs", "bag"],
        message: " {VALUE} is not valid, Please enter kg/litre/pcs/bag!",
      },
    },
    imageURLs: [
      {
        type: String,
        required: true,
        validate: {
          validator: (value) => {
            if (!Array.isArray(value)) {
              return false;
            }
            let isValid = true;
            value.forEach((url) => {
              if (!validator.isURL(url)) {
                isValid = false;
              }
            });
            return isValid;
          },
          message: "Please provide valid imageURLs!",
        },
      },
    ],
    price: {
      type: Number,
      required: true,
      min: [0, "Product can't negative!"],
    },

    quantity: {
      type: Number,
      required: true,
      min: [0, "Product quantity can't negative!"],
    },

    category: {
      type: String,
      required: [true, "Please provide category name!"],
    },
    brand: {
      name: {
        type: String,
        required: true,
        trim: true,
      },
      id: {
        type: ObjectId,
        ref: "Brand",
        required: true,
      },
    },
    status: {
      type: String,
      required: true,
      enum: {
        values: ["in-stock", "out-of-stock", "discontinued"],
        message: "{VALUE} can't be acceptable",
      },
    },
    store: {
      name: {
        type: String,
        trim: true,
        enum: {
          vales: [
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
        required: [true, "Please provide a store name."],
      },
      id: {
        type: ObjectId,
        required: true,
        ref: "Store",
      },
    },
    suppliedBy: {
      name: {
        type: String,
        required: [true, "Please provide a Supplier name!"],
        trim: true,
        lowercase: true,
      },
      id: {
        type: ObjectId,
        ref: "Supplier",
      },
    },
  },
  { timeStamps: true }
);

const Stock = mongoose.model("Stock", stockSchema);

module.exports = Stock;
