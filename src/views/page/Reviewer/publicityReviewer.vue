<template>
  <div class="publicity-reviewer-container">
    <div class="top">
      <img class="img1" src="../../../assets/reviewer_poster1.png" alt/>
      <img class="img2" src="../../../assets/logo.png" alt/>
    </div>
    <a-list
        item-layout="horizontal"
        :data-source="reviewerList"
    >
      <a-list-item slot="renderItem" slot-scope="item">
        <a slot="actions" @click="checkDetail(item)">详情</a>
        <a-list-item-meta
            :description="`任职保证：${item.declaration}`">
          <a-avatar
              slot="avatar"
              :src="item.avatar"
          />
          <a slot="title">{{ item.name + '——ID:' + item.id }}</a>
        </a-list-item-meta>
        <div class="task">
          <span>举报任务处理数量：</span>
          <span>{{ item.reportTasks }}个</span>
        </div>
        <div class="task">
          <span>审核任务处理数量：</span>
          <span>{{ item.reviewTasks }}个</span>
        </div>
        <div class="task">
          <span>总计处理任务数量：</span>
          <span>{{ item.tasksNumber }}个</span>
        </div>
      </a-list-item>
    </a-list>
    <a-modal
        title="完成任务详情"
        :footer="null"
        :visible="visible"
        @cancel="handleCancel"
        :destroyOnClose="true"
    >
      <div>
        <task-detail :detailInfo="showDetailInfo"/>
      </div>
    </a-modal>
  </div>
</template>

<script>
import api from '@/api/reviewer';
import taskDetail from './components/taskDetail.vue';

export default {
  name: 'publicityReviewer',
  async created() {
    await api.getReviewerList({
      appkey: this.$store.state.user.userinfo.appkey,
    })
      .then((res) => {
        this.reviewerList = res;
      });
  },
  components: {
    taskDetail,
  },
  data() {
    return {
      reviewerList: [],
      visible: false,
      showDetailInfo: {},
    };
  },
  methods: {
    checkDetail(item) {
      this.visible = true;
      this.showDetailInfo = item;
    },
    handleCancel() {
      this.visible = false;
    },
  },
};
</script>

<style scoped lang="less">
.top {
  background-color: #a8c0eb;
  height: 25vh;

  .img1 {
    margin-top: 20px;
    margin-left: 20px;
  }

  .img2 {
    margin-top: 20px;
    margin-left: 200px;
  }
}

.task {
  margin: 0 10px;

  span:first-child {
    font-weight: bold;
  }

  span:last-child {
    font-weight: bold;
  }
}
</style>
