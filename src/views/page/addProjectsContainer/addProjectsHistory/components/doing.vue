<template>
  <div class="doing-container">
    <div class="title">
      <div class="name">{{ project.pname }}</div>
      <div class="owner">联系人: {{ project.contactPersonName }}</div>
      <div class="category">分类: {{ project.category }}</div>
      <div class="people-num">
        人数: {{ project.nowPeople + '/' + project.needPeople }}
      </div>
    </div>
    <div class="info">
      <div class="time-money">时间币: {{ project.currency }}</div>
      <div class="serve-time">服务时间: {{ project.time }}h</div>
      <div class="effective-time">
        有效时间:&nbsp; {{ formatDate(project.startTime, true) }} &nbsp;到&nbsp;
        {{ formatDate(project.endTime, true) }}
      </div>
      <div class="create-time">
        发布日期: {{ formatDate(project.createTime, true) }}
      </div>
      <div class="check-details" @click="checkDetail">查看详情</div>
    </div>
  </div>
</template>

<script>
import formatDate from '@/utils/formatDate';

export default {
  name: 'doing',
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatDate,
    checkDetail() {
      this.$emit('checkDetail', this.project);
    },
  },
};
</script>

<style scoped lang="less">
.doing-container {
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
    flex: 0 0 20%;
    font-size: 16px;
    font-weight: bold;
  }

  .people-num {
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
    flex: 0 0 20%;
    font-size: 14px;
  }

  .check-details {
    flex: 0 0 10%;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    color: #30a679;
  }
}
</style>
