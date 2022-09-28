const { createStockService } = require("../services/stock.services");

module.exports.createStock = async (req, res, next) => {
  try {
    const result = await createStockService(req.body);
    res.status(200).send({
      status: "success",
      message: "successfully created a store.",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
