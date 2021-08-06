<template>
  <div class="wait-check-container">
    <div class="title">
      <div class="name">{{ projectInfo.projectName }}</div>
      <div class="connect-name">项目负责人: {{ projectInfo.contactPersonName }}</div>
      <div class="connect-phone">负责人电话: {{ projectInfo.contactPersonPhone }}</div>
      <div class="category">分类: {{ projectInfo.category }}</div>
    </div>
    <div class="info">
      <div class="time-money">时间币: {{ projectInfo.value }}</div>
      <div class="serve-time">服务时间: {{ projectInfo.workTime }}h</div>
      <div class="need-people">需要人数: {{ projectInfo.needPeople }}</div>
      <div class="effective-time">
        有效时间:&nbsp; {{ projectInfo.startTime }} &nbsp;到&nbsp; {{ projectInfo.endTime }}
      </div>
      <div class="change-info" @click="changeInfo">修改详细信息</div>
    </div>
    <a-modal
        :width="1000"
        destroyOnClose
        title="评论"
        :visible="visible"
        :confirm-loading="confirmLoading"
        :footer="null"
        cancelText="取消"
        okText="提交评论"
        @ok="handleOk"
        @cancel="handleCancel"
    >
      <info-form @submit="handleSubmit" @formChange="handleChange" :projectInfo="projectInfo"/>
    </a-modal>
  </div>
</template>

<script>
import api from '@/api/addProject';
import infoForm from './infoForm.vue';
import deepCopy from '../../../../../utils/deepCopy';

export default {
  name: 'waitCheck',
  components: {
    infoForm,
  },
  props: {
    project: {
      type: Object,
    },
  },
  created() {
    this.projectInfo = deepCopy(this.project);
  },
  data() {
    return {
      projectInfo: {},
      visible: false,
      confirmLoading: false,
      isChange: false,
    };
  },
  methods: {
    changeInfo() {
      this.visible = true;
    },
    handleOk() {
      this.confirmLoading = true;
      setTimeout(() => {
        this.visible = false;
        this.confirmLoading = false;
      }, 1000);
    },
    handleCancel() {
      if (this.isChange) {
        this.$message.warn('由于您尚未保存便退出，项目信息没有改变');
      }
      this.visible = false;
    },
    handleSubmit(projectInfo) {
      this.handleOk();
      this.$message.success('项目信息已经修改，项目需要重新审核，请耐心等待');
      api.changeProjectInfo({
        appkey: this.$store.state.user.userinfo.appkey,
        ...projectInfo,
      })
        .then(() => {
          this.projectInfo = deepCopy(projectInfo);
          this.$emit('change', this.projectInfo);
        });
    },
    handleChange() {
      this.isChange = true;
    },
  },
};
</script>

<style scoped lang="less">
.wait-check-container {
  border-bottom: 1px solid #eeeeee;
  cursor: default;
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    padding: 10px 0;
  }

  .title {
    .name {
      flex: 0 0 20%;
      font-size: 18px;
      font-weight: bold;
    }

    .connect-name {
      flex: 0 0 30%;
      font-size: 16px;
      font-weight: bold;
    }

    .connect-phone {
      flex: 1 1 auto;
      font-size: 16px;
      font-weight: bold;
    }

    .category {
      flex: 0 0 10%;
      font-size: 16px;
      font-weight: bold;
    }
  }

  .info {
    .time-money {
      flex: 0 0 20%;
      font-size: 14px;
    }

    .need-people {
      flex: 0 0 20%;
      font-size: 14px;
    }

    .serve-time {
      flex: 0 0 10%;
      font-size: 14px;
    }

    .effective-time {
      flex: 1 1 auto;
      font-size: 14px;
    }

    .change-info {
      flex: 0 0 10%;
      font-size: 16px;
      font-weight: bold;
      //margin-right: 20px;
      cursor: pointer;
      color: #30A679;
    }
  }
}
</style>
