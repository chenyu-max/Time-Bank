import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/passport/Login.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
      hidden: true,
    },
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    meta: {
      title: '注册',
      hidden: true,
    },
    component: () => import(/* webpackChunkName: "index" */ '../views/passport/register.vue'),
  },
  {
    path: '/findbackpwd',
    name: 'findBackPwd',
    meta: {
      title: '找回密码',
      hidden: true,
    },
    component: () => import(/* webpackChunkName: "index" */ '../views/passport/findBackPwd.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
