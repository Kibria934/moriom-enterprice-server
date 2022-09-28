module.exports.removeComma = (data, next) => {
  console.log("got data", typeof data);
  if (typeof data === "string") {
    return data.split(",").join(" ");
  }
  next((error = "Your query is not valid!"));
};
