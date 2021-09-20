import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import leftMenu from './leftMenu';

import Login from '../views/passport/Login.vue';
import Home from '../views/layout/Home.vue';
import Index from '../views/passport/Main_Home.vue';

// import store from '@/store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/mainhomee',
    name: 'Index',
    component: Index,
    children: [
      {
        path: 'mainhomee',
        name: 'Mainhomee',
        meta: {
          title: '切换首页',
          fatherTitle: '首页',
        },
        component: () => import(/* webpackChunkName: "index" */ '../views/passport/components/main_homee.vue'),
      },
      {
        path: 'introduction',
        name: 'Introduction',
        meta: {
          title: '时间银行介绍',
          fatherTitle: '首页',
        },
        component: () => import(/* webpackChunkName: "index" */ '../views/passport/components/introduction.vue'),
      },
      {
        path: 'about',
        name: 'About',
        meta: {
          title: '关于我',
          fatherTitle: '首页',
        },
        component: () => import(/* webpackChunkName: "index" */ '../views/passport/components/about.vue'),
      },
    ],
  },
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
    path: '/home',
    redirect: '/publicwelfare/nowpublicwelfare',
    name: 'Home',
    meta: {
      title: '主页',
    },
    component: Home,
    children: [
      {
        path: 'changecity',
        name: 'ChangeCity',
        meta: {
          title: '切换城市',
          fatherTitle: '主页',
        },
        component: () => import(/* webpackChunkName: "index" */ '../views/page/Home/changeCity.vue'),
      },
      {
        path: 'personalcenter',
        name: 'PersonalCenter',
        meta: {
          title: '个人中心',
          fatherTitle: '主页',
        },
        component: () => import(/* webpackChunkName: "index" */ '../views/page/Home/personalCenter.vue'),
      },
      {
        path: 'timeshop',
        name: 'TimeShop',
        meta: {
          title: '时间商城',
          fatherTitle: '主页',
        },
        component: () => import(/* webpackChunkName: "index" */ '../views/page/Home/timeShop/index.vue'),
      },
      {
        path: 'gooddetails/:goodsId',
        name: 'GoodDetails',
        meta: {
          title: '商品详情',
          fatherTitle: '主页/时间商城',
        },
        component: () => import(/* webpackChunkName: "index" */ '../views/page/Home/timeShop/goodsDetails.vue'),
      },
      {
        path: 'certificate',
        name: 'Certificate',
        meta: {
          title: '官方认证',
          fatherTitle: '主页',
        },
        component: () => import(/* webpackChunkName: "index" */ '../views/page/Home/certification.vue'),
      },
    ],
  },
  ...leftMenu,
];

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// 以下代码是为了防止路由重复点击的报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location)
    .catch((err) => err);
};

const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location)
    .catch((err) => err);
};

router.beforeEach((to, from, next) => {
  // 如果想要进入其他的路由，会进行判断
  if (to.path !== '/login' && to.path !== '/findbackpwd' && to.path !== '/register'
    && to.path !== '/mainhomee'
    && to.path !== '/introduction'
    && to.path !== '/about') {
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
