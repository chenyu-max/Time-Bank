<template>
  <div class="public-welfare-history-container">
    <a-tabs :activeKey="activeKey" @change="changeTab">
      <a-tab-pane key="正在进行中" tab="正在进行中">
        <div class="project-list" v-if="showList.length">
          <div v-for="item in showList" :key="item.id">
            <doing-list :project="item" @checkDetail="checkDetail"/>
          </div>
        </div>
        <a-empty v-else/>
        <pager :total="nowList.length" :current="nowPage" @pageChange="changePage"/>
      </a-tab-pane>
      <a-tab-pane key="待评价的" tab="待评价的">
        <div class="project-list" v-if="showList.length">
          <div v-for="item in showList" :key="item.id">
            <wait-list :project="item" @checkDetail="checkDetail"/>
          </div>
        </div>
        <a-empty v-else/>
        <pager :total="nowList.length" :current="nowPage" @comment="comment"/>
      </a-tab-pane>
      <a-tab-pane key="已完成的" tab="已完成的">
        <div class="project-list" v-if="showList.length">
          <div v-for="item in showList" :key="item.id">
            <finish-list :project="item" @checkDetail="checkDetail"/>
          </div>
        </div>
        <a-empty v-else/>
        <pager :total="nowList.length" :current="nowPage" @pageChange="changePage"/>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import api from '@/api/projects';
import pager from '@/components/pager/index.vue';
import doingList from './components/doingList.vue';
import finishList from './components/finishList.vue';
import waitList from './components/waitList.vue';

export default {
  name: 'index',
  async created() {
    api.getMyProjectHistory({
      appkey: this.$store.state.user.userinfo.appkey,
    })
      .then((res) => {
        this.doingListArr = res.doing;
        this.nowList = this.doingListArr;
        this.showList = this.nowList.slice(0, 10);
        this.waitListArr = res.waitForComment;
        this.finishListArr = res.finish;
      });
  },
  components: {
    doingList,
    finishList,
    waitList,
    pager,
  },
  data() {
    return {
      activeKey: '正在进行中',
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
      if (tabKey === '正在进行中') {
        this.nowList = this.doingListArr;
      } else if (tabKey === '待评价的') {
        this.nowList = this.waitListArr;
      } else {
        this.nowList = this.finishListArr;
      }
      this.nowPage = 1;
      this.showList = this.nowList.slice(0, 10);
    },
    checkDetail(project) {
      this.$router.push({
        name: 'ProjectDetail',
        params: {
          projectId: project.id,
        },
      });
    },
    changePage(newPage) {
      this.nowPage = newPage;
      const max = newPage * 10 >= this.nowList.length ? this.nowList.length : newPage * 10;
      this.showList = this.nowList.slice((newPage - 1) * 10, max);
    },
    comment(project) {
      console.log(project);
    },
  },
};
</script>

<style scoped>

</style>
