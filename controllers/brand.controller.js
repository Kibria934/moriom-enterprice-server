const { createBrandService } = require("../services/brand.services");

module.exports.creteBrand = async (req, res, next) => {
  try {
    const result = await createBrandService();
    res.send(result);
  } catch (error) {
    next(error);
  }
};
