<template>
  <div class="project-nav-container">
    <div class="title">
      <div class="name">{{ project.name }}</div>
      <div class="owner"> 发起人: {{ project.ownerName }}</div>
      <div class="category">分类: {{ project.category }}</div>
      <div class="state">状态: 进行中</div>
    </div>
    <div class="info">
      <div class="time-money">时间币: {{ project.value }}</div>
      <div class="serve-time">服务时间: {{ project.time }}h</div>
      <div class="effective-time">
        有效时间:&nbsp; {{ project.startTime }} &nbsp;到&nbsp; {{ project.endTime }}
      </div>
      <div class="accept-time">
        承接任务日期: {{ project.acceptTime }}
      </div>
      <div class="check-details" @click="checkDetail">
        查看详情
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'doingList',
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  methods: {
    checkDetail() {
      this.$emit('checkDetail', this.project);
    },
  },
};
</script>

<style scoped lang="less">
.project-nav-container {
  border-bottom: 1px solid #eeeeee;
  cursor: default;
  padding: 0 10px;

  > div {
    display: flex;
    padding: 10px 0;
  }
}

.title {
  .name {
    flex: 0 0 30%;
    font-size: 18px;
    font-weight: bold;
  }

  .owner {
    flex: 1 1 auto;
    font-size: 16px;
    font-weight: bold;
  }

  .category {
    flex: 0 0 15%;
    font-size: 16px;
    font-weight: bold;
  }

  .state {
    flex: 0 0 10%;
    font-size: 16px;
    font-weight: bold;
  }
}

.info {
  .time-money {
    flex: 0 0 15%;
    font-size: 14px;
  }

  .serve-time {
    flex: 0 0 15%;
    font-size: 14px;
  }

  .effective-time {
    flex: 1 1 auto;
    font-size: 14px;
  }

  .accept-time {
    flex: 1 1 auto;
    font-size: 14px;
  }

  .check-details {
    font-size: 16px;
    font-weight: bold;
    margin-right: 20px;
    cursor: pointer;
    color: #30A679;
  }
}
</style>
