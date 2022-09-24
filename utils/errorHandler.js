module.exports.errorHandler = async (err, req, res, next) => {
  res.status(404).send({
    status: "fail",
    message: "Something went wrong!",
    error: err,
  });
  next();
};
