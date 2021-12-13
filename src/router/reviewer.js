import Home from '../views/layout/Home.vue';

export default {
  path: '/reviewwork',
  name: 'ReviewWork',
  meta: {
    title: '审核工作',
    icon: 'edit',
    isMenu: true,
  },
  component: Home,
  children: [
    {
      path: 'addprojectreview',
      name: 'AddProjectReview',
      meta: {
        title: '项目发起审核',
        fatherTitle: '审核工作',
        icon: 'calendar',
      },
      component: () => import(/* webpackChunkName: "index" */ '../views/page/reviewWork/addProjectList.vue'),
    },
    {
      path: 'declareprojectreview',
      name: 'DeclareProjectReviewer',
      meta: {
        title: '项目申报审核',
        fatherTitle: '审核工作',
        icon: 'control',
      },
      component: () => import(/* webpackChunkName: "index" */ '../views/page/reviewWork/declareProjectList.vue'),
    },
    {
      path: 'reportreviewlist',
      name: 'ReportReviewList',
      meta: {
        title: '举报审核',
        fatherTitle: '审核工作',
        icon: 'filter',
      },
      component: () => import(/* webpackChunkName: "index" */ '../views/page/reviewWork/reportReviewList.vue'),
    },
    {
      name: 'AddProjectReviewDetails',
      path: 'addprojectdetails/:projectId',
      component: () => import(/* webpackChunkName: "index" */ '../views/page/reviewWork/components/addProjectDetail.vue'),
      meta: {
        title: '项目详情',
        hidden: true,
        fatherTitle: '项目发起审核',
      },
    },
    {
      name: 'DeclareProjectReviewDetails',
      path: 'declareprojectdetails/:projectId',
      component: () => import(/* webpackChunkName: "index" */ '../views/page/reviewWork/components/declareProjectDetail.vue'),
      meta: {
        title: '项目详情',
        hidden: true,
        fatherTitle: '项目申报审核',
      },
    },
  ],
};
