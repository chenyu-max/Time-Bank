<template>
  <div class="add-projects-history-container">
    <a-tabs :activeKey="activeKey" @change="changeTab">
      <a-tab-pane key="进行中" tab="进行中">
        <div v-if="showList.length">
          <div v-for="item in showList" :key="item.id">
            <doing :project="item" @checkDetail="handleCheckDetail" />
          </div>
        </div>
        <a-empty v-else />
        <pager
          :total="nowList.length"
          :current="nowPage"
          @pageChange="changePage"
        />
      </a-tab-pane>
      <a-tab-pane key="审核中" tab="审核中">
        <div v-if="showList.length">
          <div v-for="item in showList" :key="item.id">
            <wait-check :project="item" @change="handleChange" />
          </div>
        </div>
        <a-empty v-else />
        <pager
          :total="nowList.length"
          :current="nowPage"
          @pageChange="changePage"
        />
      </a-tab-pane>
      <a-tab-pane key="已结束" tab="已结束">
        <div v-if="showList.length">
          <div v-for="item in showList" :key="item.id">
            <finish :project="item" @checkDetail="handleCheckDetail" />
          </div>
        </div>
        <a-empty v-else />
        <pager
          :total="nowList.length"
          :current="nowPage"
          @pageChange="changePage"
        />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import api from '@/api/addProject';
import pager from '@/components/pager/index.vue';
import deepCopy from '../../../../utils/deepCopy';
import waitCheck from './components/waitCheck.vue';
import doing from './components/doing.vue';
import finish from './components/finish.vue';

export default {
  name: 'addProjectsHistory',
  components: {
    waitCheck,
    pager,
    doing,
    finish,
  },
  async created() {
    const storeDoingList = deepCopy(this.$store.state.myAddProject.doingList);
    const storeWaitList = deepCopy(this.$store.state.myAddProject.waitList);
    const storeFinishList = deepCopy(this.$store.state.myAddProject.finishList);
    if (
      storeDoingList.length || storeWaitList.length || storeFinishList.length
    ) {
      this.doingListArr = storeDoingList;
      this.nowList = this.doingListArr;
      this.showList = this.nowList.slice(0, 10);
      this.waitListArr = storeWaitList;
      this.finishListArr = storeFinishList;
    } else {
      api
        .getMyAddProject({
          appkey: this.$store.state.user.userinfo.appkey,
        })
        .then((res) => {
          this.doingListArr = res.doing;
          this.nowList = this.doingListArr;
          this.showList = this.nowList.slice(0, 10);
          this.waitListArr = res.waitCheck;
          this.finishListArr = res.finish;
          this.$store.dispatch(
            'myAddProject/changeDoingList',
            deepCopy(this.doingListArr),
          );
          this.$store.dispatch(
            'myAddProject/changeWaitList',
            deepCopy(this.waitListArr),
          );
          this.$store.dispatch(
            'myAddProject/changeFinishList',
            deepCopy(this.finishListArr),
          );
        });
    }
  },
  data() {
    return {
      activeKey: '进行中',
      doingListArr: [],
      waitListArr: [],
      finishListArr: [],
      nowList: [],
      showList: [],
      nowPage: 1,
    };
  },
  methods: {
    changeTab(tabKey) {
      this.activeKey = tabKey;
      if (tabKey === '进行中') {
        this.nowList = this.doingListArr;
      } else if (tabKey === '审核中') {
        this.nowList = this.waitListArr;
      } else {
        this.nowList = this.finishListArr;
      }
      this.nowPage = 1;
      this.showList = this.nowList.slice(0, 10);
    },
    changePage(newPage) {
      this.nowPage = newPage;
      const max = newPage * 10 >= this.nowList.length ? this.nowList.length : newPage * 10;
      this.showList = this.nowList.slice((newPage - 1) * 10, max);
    },
    handleCheckDetail(project) {
      this.$router.push({
        name: 'ProjectDetail',
        params: {
          projectId: project.projectId,
        },
      });
    },
    handleChange(projectInfo) {
      let index = -1;
      this.waitListArr.forEach((item, i) => {
        if (item.projectId === projectInfo.projectId) {
          index = i;
        }
      });
      this.waitListArr[index] = projectInfo;
      this.$store.dispatch(
        'myAddProject/changeWaitList',
        deepCopy(this.waitListArr),
      );
    },
  },
};
</script>

<style scoped>
</style>
