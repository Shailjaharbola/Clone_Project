import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomePage from '../components/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/men',
      name: 'men',
      component: () => import('../components/Men.vue')//Lazy loading
    },
    {
      path: '/women',
      name: 'women',
      component: () => import('../components/Women.vue')
    },
    {
      path: '/kids',
      name: 'kids',
      component: () => import('../components/kids.vue')
    },
    {
      path: '/dashboard/:id?',
      name: 'dashboard',
      component: () => import('../components/Dashboard.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
});
router.beforeEach(async (to) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/dashboard/:id?'];
  const authRequired = !publicPages.includes(to.path);
//    const auth = useAuthStore();
//    console.log( to.fullPath)
    if(authRequired && authService.getAuth()==null){
       return '/login';
    }

});
export default router
