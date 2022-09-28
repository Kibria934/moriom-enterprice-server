const Product = require("../models/Products.model");

module.exports.createProductService = async (doc) => {
  const result = await Product.create(doc);
  return result;
};

module.exports.getAllProductsService = async (filters, queries) => {
  const result = await Product.find(filters)
    .select(queries.field)
    .skip(queries.skip)
    .limit(queries.limit)
    .sort(queries.sort);
  const total = await Product.countDocuments();
  return { total, result };
};
