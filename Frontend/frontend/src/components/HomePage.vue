<template>
     <!-- <div class="bacImage">
        <div class="container">
            <div class="box">
     
            </div>
        </div>
      
        <h1>hello there</h1>
     </div> -->
     <div id="carouselExampleDark" class="carousel carousel-dark slide bacImage" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner ">
    <div class="carousel-item active " data-bs-interval="10000">
      <!-- <img src="Image/img1.jpg" class="d-block w-100" alt="..."> -->
      <!-- <div class="carousel-caption d-none d-md-block"> -->
        <div class="section1-co d-flex  flex-column ">
       <h1>Get Started
        <br>
        Your Favorite Shopping
       </h1>
       <button  role="link" @click="openInNewTab('https://www.myntra.com/shop/women')" type="button" class="btn btn-dark mt-7  shopbtn">Shop Now</button>

        </div>
      <!-- </div> -->
    </div>
    <div class="carousel-item " data-bs-interval="2000">
      <!-- <img src="Image/img1.jpg" class="d-block w-100" alt="..."> -->
      <!-- <div class="carousel-caption d-none d-md-block"> -->
        <div class="section1-co d-flex  flex-column ">
        <h1>Get Started
        <br>
        Your Favorite Shopping
       </h1>
             <button  role="link" @click="openInNewTab('https://www.myntra.com/shop/women')" type="button" class="btn btn-dark mt-7 shopbtn  ">Shop Now</button>


        </div>
      <!-- </div> -->
    </div>
    <div class="carousel-item">
      <!-- <img src="Image/img1.jpg" class="d-block w-100" alt="..."> -->
      <!-- <div class="carousel-caption d-none d-md-block"> -->
         <div class="section1-co d-flex  flex-column">
         <h1>Get Started
        <br>
        Your Favorite Shopping
       </h1>
             <button  role="link" @click="openInNewTab('https://www.myntra.com/shop/women')" type="button" class="shopbtn btn btn-dark mt-7">Shop Now</button>

        </div>
      <!-- </div> -->
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
     <div>
        <h1>Hello Mid Page</h1>
     </div>
</template>

<script>
export default {
  methods: {
    openInNewTab(url) {
      window.open(url, '_blank', 'noreferrer');
    },
  },
};
</script>

<style scoped>
.bacImage{
    /* background-image: url("Image/img1.jpg"); */
     /* background-image: linear-gradient(transparent, white 90%), url("Image/img1.jpg"); */
      /* background-image: linear-gradient(180deg, transparent 0 30%, #FFF 70% 100%), url("Image/img1.jpg"); */
      background-image: linear-gradient(180deg, transparent 0 80%, #FFF 95% 100%), url("Image/img1.jpg");
    height: 450px;
    background-repeat: no-repeat;
   background-size: cover;
    }

    .section1-co{
        margin-top: 200px;
         display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    color: white;
    }

    .shopbtn {
        margin-right: 310px;
    }
</style>