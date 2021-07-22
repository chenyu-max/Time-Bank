<template>
  <div class="public-welfare-container">
    <select-nav title="状态:" :propList="stateList" @changeSelector="changeStateSelect"/>
    <select-nav title="分类:" :propList="categoryList" @changeSelector="changeCategorySelect"/>
    <select-nav title="时间币:" :propList="valueRange" @changeSelector="changeValueSelect"/>
    <select-nav title="发布时间:" :propList="createTimeList" @changeSelector="changeTimeSelect"/>
    <div class="project-list" v-if="showProjectList.length">
      <div v-for="item in showProjectList" :key="item.id">
        <project-nav :project="item" @checkDetail="checkDetail"/>
      </div>
    </div>
    <div v-else>
      <a-empty/>
    </div>
    <pager :current="currentPage" :total="nowTotal" @pageChange="handlePageChange"/>
  </div>
</template>

<script>
import api from '@/api/projects';
import selectNav from '@/components/selectNav/index.vue';
import projectNav from '@/components/projectNav/index.vue';
import pager from '@/components/pager/index.vue';

export default {
  name: 'publicWelfare',
  components: {
    selectNav,
    projectNav,
    pager,
  },
  async created() {
    await api.getProjectsList({
      appkey: this.$store.state.user.userinfo.appkey,
      city: this.$store.state.nowCityList.nowCityList[1],
    })
      .then((res) => {
        this.total = res.list.length;
        this.nowTotal = res.list.length;
        this.projectList = res.list;
        this.selectedProjectList = res.list;
        this.showProjectList = res.list.slice(0, 10);
      });
  },
  data() {
    return {
      categoryList: [
        {
          name: '全部',
          isSelected: true,
        }, {
          name: '照顾老人',
          isSelected: false,
        }, {
          name: '照顾小孩',
          isSelected: false,
        }, {
          name: '帮忙做事',
          isSelected: false,
        },
      ],
      currentPage: 1,
      total: 0,
      nowTotal: 0,
      projectList: [],
      selectedProjectList: [],
      showProjectList: [],
      selectJudgment: {
        state: '全部',
        category: '全部',
        value: '全部',
        time: '全部',
      },
      stateList: [
        {
          name: '全部',
          isSelected: true,
        }, {
          name: '可承接',
          isSelected: false,
        }, {
          name: '已满员',
          isSelected: false,
        }, {
          name: '已完成',
          isSelected: false,
        },
      ],
      valueRange: [
        {
          name: '全部',
          isSelected: true,
        },
        {
          name: '0-5',
          isSelected: false,
        }, {
          name: '5-10',
          isSelected: false,
        }, {
          name: '10以上',
          isSelected: false,
        }],
      createTimeList: [
        {
          name: '全部',
          isSelected: true,
        }, {
          name: '一天内发布',
          isSelected: false,
        }, {
          name: '近三天发布',
          isSelected: false,
        }, {
          name: '三天以上',
          isSelected: false,
        },
      ],
    };
  },
  watch: {
    selectJudgment: {
      handler(val) {
        this.selectedProjectList = this.projectList.filter((item) => {
          if (!this.computeValue(item.value, val.value)) {
            return false;
          }
          if (!this.computeCategory(item.category, val.category)) {
            return false;
          }
          if (!this.computeState(item.state, val.state)) {
            return false;
          }
          if (!this.computeTime(item.createTime, val.time)) {
            return false;
          }
          return true;
        });
        this.nowTotal = this.selectedProjectList.length;
        this.showProjectList = this.selectedProjectList.slice(0, 10);
      },
      deep: true, // 深度监听
    },
  },
  methods: {
    changeStateSelect(name) {
      this.stateList[3].name = 'abc';
      this.selectJudgment.state = name;
    },
    changeCategorySelect(name) {
      this.selectJudgment.category = name;
    },
    changeValueSelect(name) {
      this.selectJudgment.value = name;
    },
    changeTimeSelect(name) {
      this.selectJudgment.time = name;
    },
    computeTime(createTimeString, need) {
      // 86400 为 一天之间的时间戳之差  这个时间戳是 除以过1000的
      const timesTamp = Date.parse(new Date(createTimeString)) / 1000;
      const nowTimeTamp = Date.parse(new Date()) / 1000;
      const dif = (nowTimeTamp - timesTamp) / 86400;
      if (need === '全部') {
        return true;
      }
      if (need === '一天内发布') {
        return dif <= 1;
      }
      if (need === '近三天发布') {
        return dif <= 3;
      }
      return dif > 3;
    },
    computeValue(originValue, targetValue) {
      if (targetValue === '全部') {
        return true;
      }
      if (targetValue === '0-5') {
        return originValue <= 5;
      }
      if (targetValue === '5-10') {
        return originValue <= 10 && originValue > 5;
      }
      return originValue > 10;
    },
    computeCategory(originCategory, targetCategory) {
      if (targetCategory === '全部') {
        return true;
      }
      return originCategory === targetCategory;
    },
    computeState(originState, targetState) {
      if (targetState === '全部') {
        return true;
      }
      return targetState === originState;
    },
    checkDetail(project) {
      this.$router.push({
        name: 'ProjectDetail',
        params: {
          projectId: project.id,
        },
      });
    },
    handlePageChange(newPage) {
      const maxPage = newPage * 10 > this.total ? this.total : newPage * 10;
      this.showProjectList = this.selectedProjectList.slice((newPage - 1) * 10, maxPage);
      this.currentPage = newPage;
    },
  },
};
</script>

<style scoped lang='less'>
.public-welfare-container {
  padding-left: 30px !important;
}

.project-list {
  margin-top: 20px;

  .project-nav-container {
    &:hover {
      transition: all .4s;
      background-color: #0101011c;
      color: inherit;
    }
  }
}
</style>
