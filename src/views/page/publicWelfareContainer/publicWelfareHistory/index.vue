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
            <wait-list :project="item" @comment="toComment"/>
          </div>
        </div>
        <a-empty v-else/>
        <pager :total="nowList.length" :current="nowPage" @checkDetail="checkDetail"/>
        <a-modal
            title="评论"
            :visible="visible"
            :confirm-loading="confirmLoading"
            cancelText="取消"
            okText="提交评论"
            @ok="handleOk"
            @cancel="handleCancel"
        >
          <div class="comment-title">请填写您的评论</div>
          <a-textarea class="input-area" v-model="nowComment"/>
          <div class="star-title">请对本次公益项目打分</div>
          <a-rate v-model="starNum"/>
        </a-modal>
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
import deepCopy from '../../../../utils/deepCopy';
import doingList from './components/doingList.vue';
import finishList from './components/finishList.vue';
import waitList from './components/waitList.vue';

export default {
  name: 'index',
  async created() {
    const storeDoingList = deepCopy(this.$store.state.myProjectHistory.doingList);
    const storeCommentsList = deepCopy(this.$store.state.myProjectHistory.commentsList);
    const storeFinishList = deepCopy(this.$store.state.myProjectHistory.finishList);
    if (storeDoingList.length
        || storeCommentsList.length
        || storeFinishList.length) {
      this.doingListArr = storeDoingList;
      this.nowList = this.doingListArr;
      this.showList = this.nowList.slice(0, 10);
      this.waitListArr = storeCommentsList;
      this.finishListArr = storeFinishList;
    } else {
      await api.getMyProjectHistory({
        appkey: this.$store.state.user.userinfo.appkey,
      })
        .then((res) => {
          this.doingListArr = res.doing;
          this.nowList = this.doingListArr;
          this.showList = this.nowList.slice(0, 10);
          this.waitListArr = res.waitForComment;
          this.finishListArr = res.finish;
          this.$store.dispatch('myProjectHistory/changeFinishList', deepCopy(this.finishListArr));
          this.$store.dispatch('myProjectHistory/changeDoingList', deepCopy(this.doingListArr));
          this.$store.dispatch('myProjectHistory/changeCommentsList', deepCopy(this.waitListArr));
        });
    }
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
      nowCommentId: '',
      nowComment: '',
      starNum: 3,
      visible: false,
      confirmLoading: false,
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
    toComment(project) {
      this.nowCommentId = project.id;
      this.visible = !this.visible;
    },
    handleOk() {
      if (this.nowComment === '') {
        this.$message.error('评论不能为空');
        setTimeout(() => {
          this.handleCancel();
        }, 500);
        return;
      }
      this.confirmLoading = true;
      api.commitComment({
        appkey: this.$store.state.user.userinfo.appkey,
        projectId: this.projectId,
      })
        .then(() => {
          let index = 0;
          this.waitListArr.forEach((item, i) => {
            if (item.id === this.nowCommentId) {
              index = i;
            }
          });
          const obj = this.waitListArr.splice(index, 1);
          this.finishListArr.unshift(...obj);
          this.$store.dispatch('myProjectHistory/changeFinishList', deepCopy(this.finishListArr));
          this.$store.dispatch('myProjectHistory/changeCommentsList', deepCopy(this.waitListArr));
          this.$message.success('评论成功');
        })
        .catch((err) => {
          this.$message.error(err);
        });
      setTimeout(() => {
        this.showList = this.waitListArr;
        this.nowCommentId = '';
        this.nowComment = '';
        this.starNum = 3;
        this.visible = false;
        this.confirmLoading = false;
      }, 1000);
    },
    handleCancel() {
      this.nowCommentId = '';
      this.nowComment = '';
      this.starNum = 3;
      this.visible = false;
    },
  },
};
</script>

<style scoped lang="less">
.project-nav-container:hover {
  transition: all .6s ease-in-out;
  background-color: #eee;
}

.comment-title,
.star-title {
  margin: 15px 0;
}

.input-area {
  resize: none;
  height: 100px !important;
}
</style>
