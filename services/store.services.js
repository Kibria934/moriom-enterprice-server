const Store = require("../models/Store.model");

module.exports.createStoreService = async (doc) => {
  const result = await Store.create(doc);
  return result;
};
