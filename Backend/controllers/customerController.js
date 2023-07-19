const customerService = require("../Services/customerService");

exports.getAllCustomers = async (req, res) => {
  try {
    const customers = await customerService.getAllCustomers();
    res.json({ data: customers, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



exports.createCustomer = async (req, res) => {
    try {
        const customer = await customerService.createCustomer(req.body);
        res.json({ data: customer, status: "success" });
        console.log("res",res);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getCustomerById = async (req, res) => {
    try {
        const customer = await customerService.getCustomerById(req.params.id);
        res.json({ data: customer, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getIfMailRegistered = async (req, res) => {

  console.log("tesing!!!!")
   try {
let email=req.body.Email;
let pass=req.body.Password;
let result=await customerService.Emailcheck(email)
console.log("Test",result);
if(result!==null){
  

if (result.Password===pass){
  // let ststus=checkUserAuth(email,pass);
  res.send({data: result,msg:'login success'})
}
else{
  res.send({msg:'login failed '})
}
}
else{
  res.send({msg:'invalid email'})

}
    //  const customer = await customerService.getIfMailRegistered(req.params.id);
    //   res.json({ data: customer, status: "success" });
    //   console.log(res);
    //   console.log(req);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
exports.updateCustomer = async (req, res) => {
  try {
    const customer = await customerService.updateCustomer(req.params.id, req.body);
    res.json({ data: customer, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteCustomer = async (req, res) => {
  try {
    const customer = await customerService.deleteCustomer(req.params.id);
    res.json({ data: customer, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
