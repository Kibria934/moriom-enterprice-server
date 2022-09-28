const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a product name!"],
      trim: true,
      lowercase: true,
      // unique: [true, "Product name must be unique!"],
      maxLength: [100, "Product name must be less than 100 character!"],
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
    category: {
      type: String,
      // required: [true, "Please provide category name!"],
    },
    // brand: {
    //   brandName: {
    //     type: String,
    //     // required: true,
    //     trim: true,
    //   },
    //   id: {
    //     type: ObjectId,
    //     ref: "Brand",
    //     // required: true,
    //   },
    // },
  },
  { timeStamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
