<template>
  <div class="project-nav-container">
    <div class="title">
      <div class="name">{{ project.pname }}</div>
      <div class="owner"> 发起人: {{ project.ownerName }}</div>
      <div class="category">分类: {{ project.category }}</div>
      <div class="state">状态: {{ project.state }}</div>
    </div>
    <div class="info">
      <div class="time-money">时间币: {{ project.currency }}</div>
      <div class="serve-time">服务时间: {{ project.time }}h</div>
      <div class="effective-time">
        有效时间:&nbsp; {{ startTime }} &nbsp;到&nbsp; {{ endTime }}
      </div>
      <div class="create-time">
        发布日期: {{ createTime }}
      </div>
      <div class="check-details" @click="checkDetail">
        查看详情
      </div>
    </div>
  </div>
</template>

<script>
import formatDate from '../../utils/formatDate';

export default {
  name: 'projectNav',
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      createTime: formatDate(this.project.createTime, true),
      startTime: formatDate(this.project.startTime, true),
      endTime: formatDate(this.project.endTime, true),
    };
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

  .create-time {
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
