const Brand = require("../models/Brand.model");

module.exports.createBrandService = async (doc) => {
  return await Brand.create(doc);
};
