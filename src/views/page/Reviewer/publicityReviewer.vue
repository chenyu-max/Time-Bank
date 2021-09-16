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
        <a slot="actions" @click="checkDetail(item.id)">详情</a>
        <a-list-item-meta
            :description="`任职保证：${item.declaration}`">
          <a-avatar
              slot="avatar"
              :src="item.avatar"
          />
          <a slot="title">{{ item.name }}</a>
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
  </div>
</template>

<script>
import api from '@/api/reviewer';

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
  data() {
    return {
      reviewerList: [],
    };
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
