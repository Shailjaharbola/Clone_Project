const express = require("express");
const app = express();
const path = require("path");
const  CustomerRouter = require("./routes/CustomerRoutes");
const mongoose = require("mongoose");
const cors = require('cors');
//middleware
app.use(cors());
app.use(express.json());
app.use("/", CustomerRouter);
// app.listen(3001, () => {
//   console.log("Server is running on port 3001");
// });



//configure mongoose
mongoose.connect("mongodb://127.0.0.1/E-Comm")
.then(()=> console.log("Connection Successfull"))
.catch((err)=> console.log(err));

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

module.exports = app;

