const Stock = require("../models/Stock.model");

exports.createStockService = async (doc) => {
  const result = await Stock.create(doc);
  return result;
};
