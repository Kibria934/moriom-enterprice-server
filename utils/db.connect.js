const mongoose = require("mongoose");
module.exports.dbConnect = () =>
  mongoose
    .connect(
      `mongodb+srv://kibriaHossain:${process.env.PASSWORD}@moriomenterprice.wcbmxua.mongodb.net/?retryWrites=true&w=majority`,
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    )
    .then(console.log("database connected".red.bold));
