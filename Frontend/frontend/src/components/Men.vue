<template>
<div class="container">
 <div class="card">
    <img src="Image/Men'ssection/cl1.webp" alt="">
    <span class="discount">-25%</span>
    <div class="panel">
        <a class="fa-solid fa-heart"></a>
        <a href="#" class="fa-solid fa-share"></a>
    </div>
          <a href="#"> <button>Add to Card</button></a>
    <div class="info">
        <h3>Men's Fashion</h3>
        <div class="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
        </div>
        <strong class="price">2000/-</strong>
    </div>
 </div>
  <div class="card">
    <img src="Image/Men'ssection/cl2.webp" alt="">
    <span class="discount">-25%</span>
    <div class="panel">
        <a class="fa-solid fa-heart"></a>
        <a href="#" class="fa-solid fa-share"></a>
    </div>
          <a href="#"> <button>Add to Card</button></a>
    <div class="info">
        <h3>Men's Fashion</h3>
        <div class="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
        </div>
        <strong class="price">1400/-</strong>
    </div>
 </div>
  <div class="card">
    <img src="Image/Men'ssection/cl3.webp" alt="">
    <span class="discount">-25%</span>
    <div class="panel">
        <a class="fa-solid fa-heart"></a>
        <a href="#" class="fa-solid fa-share"></a>
    </div>
       <a href="#"> <button>Add to Card</button></a>
    <div class="info">
        <h3>Men's Fashion</h3>
        <div class="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
        </div>
        <strong class="price">2000/-</strong>
    </div>
 </div>
  <div class="card">
    <img src="Image/Men'ssection/cl4.webp" alt="">
    <span class="discount">-25%</span>
    <div class="panel">
        <a class="fa-solid fa-heart"></a>
        <a href="#" class="fa-solid fa-share"></a>
    </div>
          <a href="#"> <button>Add to Card</button></a>
    <div class="info">
        <h3>Men's Fashion</h3>
        <div class="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>

        </div>
        <strong class="price">2000/-</strong>
    </div>
 </div>
  <div class="card">
    <img src="Image/Men'ssection/cl5.webp" alt="">
    <span class="discount">-25%</span>
    <div class="panel">
        <a class="fa-solid fa-heart"></a>
        <a href="#" class="fa-solid fa-share"></a>
    </div> 
   <a href="#"> <button>Add to Card</button></a>
    <div class="info">
        <h3>Men's Fashion</h3>
        <div class="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>

        </div>
        <strong class="price">2000/-</strong>
    </div>
 </div>
  <div class="card">
    <img src="Image/Men'ssection/cl6.webp" alt="">
    <span class="discount">-25%</span>
    <div class="panel">
        <a class="fa-solid fa-heart"></a>
        <a href="#" class="fa-solid fa-share"></a>
    </div>
       <a href="#"> <button>Add to Card</button></a>
    <div class="info">
        <h3>Men's Fashion</h3>
        <div class="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
        </div>
        <strong class="price">2000/-</strong>
    </div>
 </div>
</div>
</template>

<script>

</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}

.container{
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 40px 0;
}

.card{
    height: 500px;
    width: 280px;
    position: hidden;
    position: relative;
    margin: 20px;
}

.card img{
    widows: 100%;
    height: 80%;
    object-fit: cover;
}

.card .info{
    text-align: center;
    line-height: 25px;
}
.card .info h3{
    color: #333;
    padding-top: 3px;
}
.card .discount{
    position: absolute;
    top: 15px; left: 15px;
    height: 50px;
    width: 50px;
    display: block;
    background-color: #f00333;
    font-weight: bold;
    border-radius: 50%;
    text-align: center;
    line-height: 50px;
}

.card .panel{
position: absolute;
top: 15px;  right: -50%;
width: 45px;
background: rgba(255,255,255, .8);
display: flex;
align-items: center;
flex-flow: column;
opacity: 0;
}

.card:hover .panel{
    right: 15px;
    opacity: 1;
}

.card .panel a{
    font-size: 20px;
    color: white;
    margin: 15px 0;
}

.card .panel a:hover{
    color: blue;
}

.card button{
    position: absolute;
    left: 50%; bottom: 0;
    transform: translateX(-50%);
    height: 40px;
    width: 140px;
    border: none;
    outline: none;
    background: rgba(0,0,0,.6);
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    opacity: 0;
    transition-delay: .2s;
}
.card:hover button{
    opacity: 1;
    bottom: 25%;
}

.card button:hover{
    background: rgba(255,0 , 0, .5);
}

.card .info .stars i{
color: gold;
padding: 10px 0px;
}

.card .info .price{
    font-size: 20px;
    color: #f00333;
    letter-spacing: 1px;
}
</style>