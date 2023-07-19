<script>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import Navbar from '../src/components/Navbar.vue'
import Footer from '../src/components/Footer.vue'
import Dashboard from '../src/components/Dashboard.vue'
import router from "./router";

export default {
  
  data(){
    return{
      isLogin:false,
    }
  },
   components: {
     Navbar,
     Dashboard
  
     
    },
 methods: {
 statusValue(Data){
    this.isLogin=Data.loginStatus;
    console.log('Output',Data);
    if(this.isLogin===true){
      router.push('/dashboard/'+Data.user);
    }
 }

 },
   mounted() {
    
    }

};
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">
    <nav>
      <Navbar @status="statusValue($event)" />
      <!-- <Dashboard v-if="this.isLogin==true"/> -->
    </nav>
    <!-- <Dashboard v-if="this.isLogin==true"/> -->
    </div>
<!-- <Footer/> -->
  </header>
  <RouterView />
</template>

<style scoped>

</style>
