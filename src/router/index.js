import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import leftMenu from './leftMenu';

import Login from '../views/passport/Login.vue';
import Home from '../views/layout/Home.vue';
// import store from '@/store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
    },
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    meta: {
      title: '注册',
    },
    component: () => import(/* webpackChunkName: "index" */ '../views/passport/register.vue'),
  },
  {
    path: '/findBackPwd',
    name: 'FindBackPassword',
    meta: {
      title: '找回密码',
    },
    component: () => import(/* webpackChunkName: "index" */ '../views/passport/findBackPwd.vue'),
  },
  {
    path: '/',
    redirect: '/publicwelfare/nowpublicwelfare',
    name: 'Home',
    meta: {
      title: '主页',
    },
    component: Home,
    children: [
      {
        path: '/changecity',
        name: 'ChangeCity',
        meta: {
          title: '切换城市',
          fatherTitle: '主页',
        },
        component: () => import(/* webpackChunkName: "index" */ '../views/page/Home/changeCity.vue'),
      },
      {
        path: '/personalcenter',
        name: 'PersonalCenter',
        meta: {
          title: '个人中心',
          fatherTitle: '主页',
        },
        component: () => import(/* webpackChunkName: "index" */ '../views/page/Home/personalCenter.vue'),
      },
      {
        path: '/timeshop',
        name: 'TimeShop',
        meta: {
          title: '时间商城',
          fatherTitle: '主页',
        },
        component: () => import(/* webpackChunkName: "index" */ '../views/page/Home/timeShop.vue'),
      },
    ],
  },
  ...leftMenu,
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
      if (store.state.user.userinfo.appkey) {
        store.dispatch('menuRouters/changeMenuRoutes', leftMenu)
          .then(() => {
          });
        return next();
      }
      return next('/login');
    }
    if (from.path === '/login') {
      // 从登录页面进入系统页面，进行数据填写，并进入系统
      store.dispatch('menuRouters/changeMenuRoutes', leftMenu)
        .then(() => {
          next();
        });
    }
  }
  return next();
});

export default router;
