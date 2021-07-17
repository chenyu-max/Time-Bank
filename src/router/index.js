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
    name: 'FindBackPassword',
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

router.beforeEach((to, from, next) => {
  // 如果想要进入其他的路由，会进行判断
  if (to.path !== '/login' && to.path !== '/findbackpwd' && to.path !== '/register') {
    // 从非登录页面进入 系统内部页面 开始进行判断
    // 或者从非登录页面 改变路由的方式进入系统内部页面 进行判断
    if (from.path !== '/login') {
      // 暂时先这么写，之后在 vuex 中 如果用户登录，就会获取一个 appkey 如果有appkey 那么就...
      return next('/login');
    }
    if (from.path === '/login') {
      // 从登录页面进入系统页面，进行数据填写，并进入系统
    }
  }
  return next();
});

export default router;
