const express = require("express");
const {
  getAllCustomers,
  getIfMailRegistered,
  createCustomer,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
} = require("../controllers/customerController");

const router = express.Router();

// router.route("/").get(getAllBlogs).post(createBlog);s
// router.route("/:id").get(getBlogById).put(updateBlog).delete(deleteBlog);

router.post("/addCustomer",createCustomer);
router.post("/checkEmail",getIfMailRegistered);
router.get("/getCustomers",getAllCustomers);
router.get("/getCustomerById/:id",getCustomerById);
router.put("/CustomerUpdate",updateCustomer);
router.delete("/deleteCustomer/:id?",deleteCustomer);

module.exports = router;
