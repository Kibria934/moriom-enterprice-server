module.exports.errorHandler = async (err, req, res, next) => {
  console.log(err);
  res.status(404).send({
    status: "fail",
    message: "Something went wrong!",
    error: err,
  });
};
