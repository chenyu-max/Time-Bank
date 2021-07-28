import Home from '../views/layout/Home.vue';

// 左侧菜单相关路由配置

export default [
  {
    path: '/publicwelfare',
    name: 'PublicWelfare',
    meta: {
      title: '公益项目',
      icon: 'heart',
      isMenu: true,
    },
    component: Home,
    children: [
      {
        path: 'nowpublicwelfare',
        name: 'NowPublicWelfare',
        meta: {
          title: '公益项目',
          fatherTitle: '',
          icon: 'heart',
        },
        component: () => import(/* webpackChunkName: "index" */ '../views/page/publicWelfareContainer/publicWelfare.vue'),
      },
      {
        path: 'history',
        name: 'PublicWelfareHistory',
        meta: {
          title: '我的公益项目',
          fatherTitle: '公益项目',
          icon: 'container',
        },
        component: () => import(/* webpackChunkName: "index" */ '../views/page/publicWelfareContainer/publicWelfareHistory/index.vue'),
      },
      {
        name: 'ProjectDetail',
        path: 'projectdetail/:projectId',
        component: () => import(/* webpackChunkName: "index" */ '../views/page/publicWelfareContainer/projectDetail.vue'),
        meta: {
          title: '项目详情',
          hidden: true,
          fatherTitle: '公益项目',
        },
      },
    ],
  },
  {
    path: '/addprojects',
    name: 'AddProjects',
    meta: {
      title: '发起项目',
      icon: 'form',
      isMenu: true,
    },
    component: Home,
    children: [
      {
        path: 'addprojects',
        name: 'AddProjects',
        meta: {
          title: '发起项目',
          fatherTitle: '',
          icon: 'form',
        },
        component: () => import(/* webpackChunkName: "index" */ '../views/page/addProjectsContainer/addProjects.vue'),
      },
      {
        path: 'history',
        name: 'AddProjectsHistory',
        meta: {
          title: '我发起的',
          fatherTitle: '发起项目',
          icon: 'hdd',
        },
        component: () => import(/* webpackChunkName: "index" */ '../views/page/addProjectsContainer/addProjectsHistory.vue'),
      },
    ],
  },
  {
    path: '/reviewer',
    name: 'Reviewer',
    meta: {
      title: '审核人',
      icon: 'user',
      isMenu: true,
    },
    component: Home,
    children: [
      {
        path: 'applyreviewer',
        name: 'ApplyReviewer',
        meta: {
          title: '申请成为审核人',
          fatherTitle: '审核人',
          icon: 'solution',
        },
        component: () => import(/* webpackChunkName: "index" */ '../views/page/Reviewer/applyReviewer.vue'),
      },
      {
        path: 'votingreviewer',
        name: 'VotingReviewer',
        meta: {
          title: '投票选举审核人',
          fatherTitle: '审核人',
          icon: 'carry-out',
        },
        component: () => import(/* webpackChunkName: "index" */ '../views/page/Reviewer/votingReviewer.vue'),
      },
      {
        path: 'publicityreviewer',
        name: 'PublicityReviewer',
        meta: {
          title: '审核人公示',
          fatherTitle: '审核人',
          icon: 'team',
        },
        component: () => import(/* webpackChunkName: "index" */ '../views/page/Reviewer/publicityReviewer.vue'),
      },
    ],
  },
  {
    path: '/report',
    name: 'Report',
    meta: {
      title: '举报',
      icon: 'exclamation',
      isMenu: true,
    },
    component: Home,
    children: [
      {
        path: 'reportprojects',
        name: 'ReportProjects',
        meta: {
          title: '举报项目',
          fatherTitle: '举报',
          icon: 'file-exclamation',
        },
        component: () => import(/* webpackChunkName: "index" */ '../views/page/report/reportProjects.vue'),
      },
      {
        path: 'reportoriginator',
        name: 'ReportOriginator',
        meta: {
          title: '举报发起者',
          fatherTitle: '举报',
          icon: 'dislike',
        },
        component: () => import(/* webpackChunkName: "index" */ '../views/page/report/reportOriginator.vue'),
      },
      {
        path: 'reportreviewer',
        name: 'ReportReviewer',
        meta: {
          title: '举报审核人',
          fatherTitle: '举报',
          icon: 'bulb',
        },
        component: () => import(/* webpackChunkName: "index" */ '../views/page/report/reportReviewer.vue'),
      },
    ],
  },
  {
    path: '/customerservice',
    name: 'CustomerService',
    meta: {
      title: '客服咨询',
      icon: 'message',
      isMenu: true,
    },
    component: Home,
    children: [
      {
        path: 'customerservicemen',
        name: 'CustomerServiceMen',
        meta: {
          title: '人工客服',
          fatherTitle: '客服咨询',
          icon: 'desktop',
        },
        component: () => import(/* webpackChunkName: "index" */ '../views/page/customerService/customerServiceMen.vue'),
      },
      {
        path: 'customerserviceai',
        name: 'CustomerServiceAI',
        meta: {
          title: '智能AI客服',
          fatherTitle: '客服咨询',
          icon: 'robot',
        },
        component: () => import(/* webpackChunkName: "index" */ '../views/page/customerService/customerServiceAI.vue'),
      },
    ],
  },
];
