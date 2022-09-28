const {
  createProductService,
  getAllProductsService,
} = require("../services/products.services");
const { removeComma } = require("../utils/removeComma");

// ------------ Create a New product ------------ //
module.exports.createProduct = async (req, res, next) => {
  try {
    const result = await createProductService(req.body);
    res.send({
      status: "success",
      message: "successfully created a product",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// ------ Get all Products -------- //
module.exports.getAllProducts = async (req, res, next) => {
  let filters = { ...req.query };
  let excludedField = ["field", "page", "limit", "sort"];
  let queries = {};

  try {
    excludedField.forEach((field) => delete filters[field]);

    const operators = JSON.stringify(filters);
    filterString = operators.replace(
      /\b(gt|lt|gte|lte|eq)\b/g,
      (match) => `$${match}`
    );
    filters = JSON.parse(filterString);

    if (req.query.sort) {
      queries.sort = removeComma(req.query.sort, next);
    }
    if (req.query.field) {
      queries.field = removeComma(req.query.field);
    }
    if (req.query.page || req.query.limit) {
      const { page = 1, limit = 5 } = req.query;
      const skips = (+page - 1) * +limit;
      queries.skip = skips;
      queries.limit = +limit;
    }

    const result = await getAllProductsService(filters, queries);

    res.status(200).send({
      status: "success",
      message: "successfully get all data",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
