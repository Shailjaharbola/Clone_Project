
<script >
import axios from 'axios'
import {useRoute} from "vue-router";



export default {
  
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
      profileId:null,
      User:[],
    }
  },
 methods: {
 Logout(){
     alert("Logout")
     console.log("you are logged out");
 },
 UserData(){
     axios
                .get("http://localhost:3001/getCustomerById/"+this.profileId)
                .then((response) => {
                    this.User = response.data.data
                    console.log(response.data.data);
                   console.log(this.User);
                   
                    // using stringify to beautify the output
                    // this.res = JSON.stringify(response.data);
                })
                .catch((errors) => {
                    console.log(errors); // Errors
                });
 },
 },
   mounted() {
    const route = useRoute()
    this.profileId = route.params.id;
  console.log("dashboard",route.params.id);
    this.UserData();
  


  },
    }
</script>


    <template>

    <h1>Hello! this is dashboard page</h1>
      <!-- <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
  
  <div  class="container-fluid ">
   <div class="ms-5">
    <a class="navbar-brand" href="/">
      <img src="../../Image/logo.jpg" alt="Logo" width="40" height="35">
    </a>
    
  </div>
    <div class="collapse navbar-collapse container position-relative" id="navbarSupportedContent">
           <a class="nav-link active dropdown-toggle" aria-current="page" href="/men">MEN</a> -->
      <!-- <ul class="navbar-nav me-auto  mb-2 mb-lg-0">
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
      </ul> -->
       <!-- <span class="navbar-text"> -->
     
         <!-- <ul class="navbar-nav ms-5 mb-lg-0 container position-relative" >
           <div class="input-group">
          <span class="input-group-text my-3" id="basic-addon1"><img src="../../Image/searchbutton.svg" alt="Loading" width="15" height="15"></span>
        <input class="form-control me-2 my-3" type="search" placeholder="Search" aria-label="Search" size="40">
        </div>
        <li class="nav-item mx-2 my-2 text-center navclass">
          <img src="../../Image/user-solid.svg" alt="Loading" width="25" height="20">
        <a class="nav-link active text-sm-center" aria-current="page" href="#">PROFILE</a>
          <div class="mega-box grid position-absolute">
                 <div class="megamenuitem">
                  <h6>Welcome</h6>
                  <h5><strong>{{User.Name}}</strong></h5>   
                  <hr>    
                  <a href="">Dashboard</a>
                  <a href="Orders"></a>         
                  <a href="Settings"></a>
                  <button class="btn" @click="Logout()">Logout</button>
                 </div>     
          </div>
          <button></button>
        </li>
        <li class="nav-item mx-2 my-2 text-center navclass">
          <img src="../../Image/heart-regular.svg" alt="Loading" width="25" height="20">
          <a class="nav-link active text-sm-center" aria-current="page" href="/wishlist">WISHLIST</a>
        </li>
        <li class="nav-item mx-2 my-2 text-center navclass">
          <img src="../../Image/bag-shopping-solid.svg" alt="Loading" width="25" height="20">
          <a class="nav-link active text-sm-center" aria-current="page" href="/bag">BAG</a>
        </li>
       
      </ul> -->
       <!-- </span> -->
    
    <!-- </div>
  </div> -->
<!-- </nav> --> -->




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