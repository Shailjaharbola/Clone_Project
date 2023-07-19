const CustomerModel = require("../models/customer");

exports.getAllCustomers = async () => {
  return await CustomerModel.find();
};

exports.createCustomer = async (customer) => {
  return await CustomerModel.create(customer);
};
exports.getCustomerById = async (id) => {
  return await CustomerModel.findOne({Email:id});
};
exports.Emailcheck = async (id) => {
  console.log("ID",id)
  return await CustomerModel.findOne({Email:id});
};
exports.checkUserAuth = async (email,pass) => {
  return await CustomerModel.findOne({Email:id});
};

exports.updateCustomer = async (id, customer) => {
  return await CustomerModel.findByIdAndUpdate(id, customer);
};

exports.deleteCustomer = async (id) => {
  return await CustomerModel.findByIdAndDelete(id);
};
