<template>
  <div class="project-detail-container">
    <h1 class="project-title">
      {{ project.name }}
    </h1>
    <div class="project-info-1">
      <div class="owner">
        <span>项目发起人: &nbsp;</span>
        {{ project.ownerName }}
      </div>
      <div>|</div>
      <div class="create-time">
        <span>发布时间: &nbsp;</span>
        {{ project.createTime }}
      </div>
      <div>|</div>
      <div class="project-state">
        <span>项目状态: &nbsp;</span>
        {{ project.state }}
      </div>
    </div>
    <div class="project-info-2">
      <div class="project-need-people">
        <span>项目所需人数: &nbsp;</span>
        {{ project.needPeople }}
        人
      </div>
      <div>|</div>
      <div class="everyone-value">
        <span>每人时间币: &nbsp;</span>
        {{ project.value }}
      </div>
      <div>|</div>
      <div class="time">
        <span>每人工作时间: &nbsp;</span>
        {{ project.time }}
        h
      </div>
      <div>|</div>
      <div class="total-value">
        <span>总支付时间币: &nbsp;</span>
        {{ (project.value * project.needPeople).toFixed(2) }}
      </div>
    </div>
    <div class="project-description">
      {{ project.description }}
    </div>
    <div class="project-info-3">
      <div class="work-address">
        <div class="title">服务地点:</div>
        {{ project.address }}
      </div>
      <div class="work-time">
        <div class="title">服务时间:</div>
        {{ project.workTime }}
      </div>
      <div class="contact-person-name">
        <div class="title">联系人:</div>
        {{ project.contactPerson.name }}
      </div>
      <div class="contact-person-phone">
        <div class="title">联系电话:</div>
        {{ project.contactPerson.phone }}
      </div>
      <div class="effective-time">
        <div class="title">有效时间:</div>
        {{ project.startTime }}
        &nbsp;&nbsp; 到 &nbsp;&nbsp;
        {{ project.endTime }}
      </div>
    </div>
    <div class="user-info-list">
<!--      <a-rate :value="2" disabled />-->
    </div>
  </div>
</template>

<script>
import api from '@/api/projects';

export default {
  name: 'projectDetail',
  async created() {
    await api.getProjectById({
      appkey: this.$store.state.user.userinfo.appkey,
      projectId: this.$route.params.projectId,
    })
      .then((res) => {
        this.project = res;
      });
  },
  data() {
    return {
      project: {},
    };
  },
};
</script>

<style scoped lang="less">
.project-detail-container {
  .project-title {
    font-size: 30px;
    line-height: 40px;
    height: 40px;
    color: #333;
  }

  .project-info-1,
  .project-info-2 {
    display: flex;
    height: 40px;
    line-height: 40px;

    div:not([class]) {
      padding: 0 15px;
    }

    div[class] {
      span {
        font-weight: 600;
        font-size: 15px;
      }
    }
  }

  .project-description {
    margin-top: 20px;
    line-height: 20px;
    text-indent: 2em;
  }

  .project-info-3 {
    margin-top: 20px;
    >div{
      display: flex;
      line-height: 30px;
      height: 30px;
    }
    .title {
      width: 7%;
      font-weight: 600;
    }
  }
}
</style>
