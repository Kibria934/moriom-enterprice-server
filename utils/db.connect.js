const mongoose = require("mongoose");
module.exports.dbConnect = () =>
  mongoose
    .connect(
      `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@moriomenterprice.wcbmxua.mongodb.net/?retryWrites=true&w=majority`,
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    )
    .then(console.log("database connected".blue.bold));
