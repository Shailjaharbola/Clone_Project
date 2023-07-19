const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  Email: String,
  Password: String,
  Number: Number,
  Name:String,
  Address:String,
});

module.exports = mongoose.model("Customer", customerSchema);
