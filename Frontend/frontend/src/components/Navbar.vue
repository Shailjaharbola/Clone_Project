
<script>
import axios from 'axios'
import Dashboard from '../components/Dashboard.vue'
import router from "../router";


export default {
  name: "Navbar",
  components: { Dashboard },
  data(){
    return{
     username: '',
      password: '',
      Login: false,
      Customer:{
        Name:'',
        Number:'',
        Email:'',
        Password:'',
      },
      Name:'',
      
    }
  },
 methods: {
  goLogin(e){
    // e.preventDefault();
    //   const auth = { username: this.username, password: this.password };
    //     // Correct username is 'foo' and password is 'bar'
    //     const url = 'https://httpbin.org/basic-auth/foo/bar';
    //     this.success = false;
    //     this.error = null;

    //     try {
    //       const res =  axios.get(url, { auth }).then(res => res.data);
    //       this.success = true;
    //  alert("You are Logged In");

    //     } catch (err) {
    //       this.error = err.message;
    //     }
    var a=document.getElementById("inputEmail1");
    var b=document.getElementById("InputPassword1");
    console.log(a);
    console.log(b);
// if((a.value=="Shai@gmail.com")||(b.value=="qwert"))
// {
// document.getElementById('err').innerHTML= 'correct';
// alert("Correct!")
// }
// else
// {
// document.getElementById('err').innerHTML= 'wrong';
// alert("Wrong!")

// }
console.log(this.Customer)
axios
                .post("http://localhost:3001/checkEmail",this.Customer)
                .then((response) => {
                    console.log(response);
                    if(response.data.msg==="login success"){
                      this.Login=true;
                      console.log("Email",response.data.data.Email);
                       this.$emit('status',{loginStatus: this.Login, user:response.data.data.Email})
                       alert("login success")
                       sessionStorage.setItem("user",response.data.data.Email)
                       sessionStorage.setItem("name",response.data.data.Name)
                       console.log(sessionStorage.getItem("user"));
                       this.Name=sessionStorage.getItem("name");
                        authService.setAuth(this.Login.token);
                      //  router.push('dashboard');
                      //  router.push('/dashboard/'+response.data.data.Email);
                       
                    }
                    else{

                      alert("Email is not registered, please SignIn");
                    }
                    // using stringify to beautify the output
                    this.res = JSON.stringify(response.data);
                })
               .catch(error => {
    console.log(error.response) 
});



  },
  SignIn(e){
    axios
                .post("http://localhost:3001/addCustomer",this.Customer)
                .then((response) => {
                    console.log(response);
                    alert("You are Singed In");
                    // using stringify to beautify the output
                    // this.res = JSON.stringify(response.data);
                })
               .catch(error => {
    console.log(error.response)
});
  }
 },
   mounted() {
    if( sessionStorage.getItem("user")==this.Customer.Email){
      this.Login==true;
    }


  },
    }
</script>


    <template>
      <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
  
  <div  class="container-fluid ">
   <div class="ms-5">
    <a class="navbar-brand" href="/">
      <img src="../../Image/logo.jpg" alt="Logo" width="40" height="35">
    </a>
  </div>
    <div class="collapse navbar-collapse container position-relative" id="navbarSupportedContent">
          <!-- <a class="nav-link active dropdown-toggle" aria-current="page" href="/men">MEN</a> -->
      <ul class="navbar-nav me-auto  mb-2 mb-lg-0">
        <li class="nav-item mx-2">
          <a class="nav-link active" aria-current="page" href="/men">MEN</a>
                 <div class="mega-box grid">
                 <div class="megamenuitem">
                  <h6>Top Wear</h6>
                  <ul>
                  <li><a href="">T-Shirt</a></li>
                  <li><a href="">Shirt</a></li>
                  <li><a href="">Formal Shirt</a></li>
                  </ul>
                 </div>
                 <div class="megamenuitem">
                  <h6>Top Wear</h6>
                  <ul>
                  <li><a href="">T-Shirt</a></li>
                  <li><a href="">Shirt</a></li>
                  <li><a href="">Formal Shirt</a></li>
                  </ul>
                 </div>
                 <div class="megamenuitem">
                  <h6>Top Wear</h6>
                  <ul>
                  <li><a href="">T-Shirt</a></li>
                  <li><a href="">Shirt</a></li>
                  <li><a href="">Formal Shirt</a></li>
                  </ul>
                 </div>
                 <div class="megamenuitem">
                  <h6>Top Wear</h6>
                  <ul>
                  <li><a href="">T-Shirt</a></li>
                  <li><a href="">Shirt</a></li>
                  <li><a href="">Formal Shirt</a></li>
                  </ul>
                 </div>
                
          </div>
        
           
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link active womenPage" aria-current="page" href="/women">WOMEN</a>
          <div class="mega-box grid">
                 <div class="megamenuitem">
                  <h6>Top Wear</h6>
                  <ul>
                  <li><a href="">T-Shirt</a></li>
                  <li><a href="">Shirt</a></li>
                  <li><a href="">Formal Shirt</a></li>
                  </ul>
                 </div>
                 <div class="megamenuitem">
                  <h6>Top Wear</h6>
                  <ul>
                  <li><a href="">T-Shirt</a></li>
                  <li><a href="">Shirt</a></li>
                  <li><a href="">Formal Shirt</a></li>
                  </ul>
                 </div>
                 <div class="megamenuitem">
                  <h6>Top Wear</h6>
                  <ul>
                  <li><a href="">T-Shirt</a></li>
                  <li><a href="">Shirt</a></li>
                  <li><a href="">Formal Shirt</a></li>
                  </ul>
                 </div>
                 <div class="megamenuitem">
                  <h6>Top Wear</h6>
                  <ul>
                  <li><a href="">T-Shirt</a></li>
                  <li><a href="">Shirt</a></li>
                  <li><a href="">Formal Shirt</a></li>
                  </ul>
                 </div>
                
          </div>
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link active" aria-current="page" href="/kids">KIDS</a>
               <div class="mega-box grid">
                 <div class="megamenuitem">
                  <h6>Top Wear</h6>
                  <ul>
                  <li><a href="">T-Shirt</a></li>
                  <li><a href="">Shirt</a></li>
                  <li><a href="">Formal Shirt</a></li>
                  </ul>
                 </div>
                 <div class="megamenuitem">
                  <h6>Top Wear</h6>
                  <ul>
                  <li><a href="">T-Shirt</a></li>
                  <li><a href="">Shirt</a></li>
                  <li><a href="">Formal Shirt</a></li>
                  </ul>
                 </div>
                 <div class="megamenuitem">
                  <h6>Top Wear</h6>
                  <ul>
                  <li><a href="">T-Shirt</a></li>
                  <li><a href="">Shirt</a></li>
                  <li><a href="">Formal Shirt</a></li>
                  </ul>
                 </div>
                 <div class="megamenuitem">
                  <h6>Top Wear</h6>
                  <ul>
                  <li><a href="">T-Shirt</a></li>
                  <li><a href="">Shirt</a></li>
                  <li><a href="">Formal Shirt</a></li>
                  </ul>
                 </div>
                
          </div>
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link active" aria-current="page" href="/beauty">BEAUTY</a>
        </li>
       
      </ul>
       <!-- <span class="navbar-text"> -->
     
         <ul class="navbar-nav ms-5 mb-lg-0" >
           <div class="input-group">
          <span class="input-group-text my-3" id="basic-addon1"><img src="Image/searchbutton.svg" alt="Loading" width="15" height="15"></span>
        <input class="form-control me-2 my-3" type="search" placeholder="Search" aria-label="Search" size="40">
        </div>
        <li class="nav-item mx-2 my-2 text-center navclass">
          <img src="Image/user-solid.svg" alt="Loading" width="25" height="20">
        <a class="nav-link active text-sm-center" aria-current="page" href="#">PROFILE</a>
         <ul class="dropdown-menu  position-absolute">
			  <!-- <li><a class="dropdown-item " href="#"> Submenu item 1</a></li>
			  <li><a class="dropdown-item" href="#"> Submenu item 2 </a></li>
			  <li><a class="dropdown-item" href="#"> Submenu item 3 </a></li> -->
        <ul v-if="this.Login!=true" >
          <!-- <h4>Formals</h4>
          <li><a href="#">Top Wear</a> </li>
          <li><a href="#">Shirts</a></li>
          <li><a href="#">T-Shirt</a></li>
        </ul>
        <ul>
          <h4>Formals</h4>
          <li><a href="#">Top Wear</a> </li>
          <li><a href="#">Shirts</a></li>
          <li><a href="#">T-Shirt</a></li>
        </ul>
        <ul>
          <h4>Formals</h4>
          <li><a href="#">Top Wear</a> </li>
          <li><a href="#">Shirts</a></li>
          <li><a href="#">T-Shirt</a></li> -->
          <h5>Welcome</h5>
           <p>To access account and manage orders</p>
           <li><button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">LOGIN/SIGNUP</button></li>
           <!-- <li><button type="button" href="/dashboard/:id?">Dashboard</button></li> -->
           <li><button type="button" onclick="location.href='/dashboard/:id?'">Dashboard</button></li>
        </ul>
        <ul v-if="this.Login===true">
          <h5>Welcome</h5>
          <h4>{{this.Name}}</h4>
          
        </ul>
        
		    </ul>
        </li>
        <li class="nav-item mx-2 my-2 text-center navclass">
          <img src="Image/heart-regular.svg" alt="Loading" width="25" height="20">
          <a class="nav-link active text-sm-center" aria-current="page" href="/wishlist">WISHLIST</a>
        </li>
        <li class="nav-item mx-2 my-2 text-center navclass">
          <img src="Image/bag-shopping-solid.svg" alt="Loading" width="25" height="20">
          <a class="nav-link active text-sm-center" aria-current="page" href="/bag">BAG</a>
        </li>
       
      </ul>
       <!-- </span> -->
    </div>
  </div>
</nav>

<!-- Form Start-->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">LOGIN</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form  >
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="inputEmail1" v-model="Customer.Email" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="InputPassword1" v-model="Customer.Password">
  </div>
  <div class="mb-3 form-check">
    <!-- <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label> -->
    <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#exampleModal2">SignIn</a>
  </div>
  <button type="button" @click.prevent="goLogin(e)" data-bs-dismiss="modal"  class="btn btn-primary">LogIn</button>
</form>
      </div>
      
    </div>
  </div>
</div>

<!-- Form End-->

<!--SignUp Form Start-->
<div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">SignUp</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form  @submit.prevent="SignIn">
         <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label" >Name</label>
    <input type="name" class="form-control" id="exampleInputName" v-model="Customer.Name" placeholder="Enter your name">
  </div>
       <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label" >Number</label>
    <input type="number" class="form-control" id="exampleInputNumber" v-model="Customer.Number"  placeholder="Enter your number">
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label" >Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail" v-model="Customer.Email" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword2"  v-model="Customer.Password">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Adress</label>
    <input type="text" class="form-control" id="exampleInputAdress"  v-model="Customer.Adress">
  </div>
   <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
    <input type="password" class="form-control" id="exampleInputConfPassword">
  </div>
  <div class="mb-3 form-check">
    <!-- <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label> -->
  </div>
  <button type="submit"   class="btn btn-primary">SignUp</button>
</form>
      </div>
      
    </div>
  </div>
</div>

<!--Sign Form End-->
    </template>


<style scoped>
.navclass{
font-size: 10px;
}

.mega-box{
  padding-left: 10px;
  position: absolute;
   width: 100%;
   margin-right: 60px;
  top: 100%;
  left: 0;
   opacity: 0;
   visibility: hidden;
   box-shadow: 0px 10px 2px 3px rgb(140, 164, 228);
   transition: 0.5s;
   display: flex;
   flex-wrap: wrap;
   z-index: 1;
   background-color: aliceblue;
}

.container ul li:hover .mega-box{
  opacity: 1;
  visibility: visible;
}
.megamenuitem{
  flex-basis: 33%;
  margin-top: 8px;
}

.megamenuitem ul li{
  list-style: none;
 
  
}


@media all and (min-width: 992px) {
	.navbar .nav-item .dropdown-menu{ display: none; }
	.navbar .nav-item:hover .nav-link{}
	.navbar .nav-item:hover .dropdown-menu{ display: block; }
	.navbar .nav-item .dropdown-menu{ margin-top:0; }
}
</style>