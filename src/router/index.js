import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue'
import Login1 from '../views/Login1.vue'

Vue.use(VueRouter);

const routes = [
  { 
    path:'/',
    redirect: '/login1'
  },
  {
    path:'/login',
    name:'Login',
    component:Login
  },
  {
    path:'/login1',
    name:'Login1',
    component:Login1
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
