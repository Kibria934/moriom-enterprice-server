const { reverseMultiplyAndSum } = require("validator/lib/util/algorithms");
const { createStoreService } = require("../services/store.services");

module.exports.createStore = async (req, res, next) => {
  try {
    const result = await createStoreService(req.body);
    if (result.data == {}) {
      next((error = "Can't create a store!"));
    }
    res.status(200).send({
      status: "success",
      message: "successfully created a store.",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
