<template>
  <div class="add-project-detail-container">
    <div class="con-title">
      <div><a-icon type="home" style="font-size: 25px"></a-icon></div>
      <h2>项目审核详情页</h2>
    </div>

    <div class="con-container">
      <a-descriptions bordered>
        <a-descriptions-item label="项目名称">
          {{ project.pname }}
        </a-descriptions-item>
        <a-descriptions-item label="目前投票数">
          {{ 4 }}/{{ 21 }}
        </a-descriptions-item>
        <a-descriptions-item label="项目ID">
          {{ project.projectId }}
        </a-descriptions-item>
        <a-descriptions-item label="项目分类">
          {{ project.category }}
        </a-descriptions-item>
        <a-descriptions-item label="项目所需人数" :span="2">
          {{ project.needPeople }}
        </a-descriptions-item>
        <a-descriptions-item label="项目开始时间">
          {{ project.startTime }}
        </a-descriptions-item>
        <a-descriptions-item label="项目结束时间">
          {{ project.endTime }}
        </a-descriptions-item>
        <a-descriptions-item label="项目举办地点">
          <a-badge status="processing" :text="project.address" />
        </a-descriptions-item>
        <a-descriptions-item label="项目支付时间币">
          {{ project.currency }}
        </a-descriptions-item>
        <a-descriptions-item label="项目联系人">
          {{ project.contactPersonName }}
        </a-descriptions-item>
        <a-descriptions-item label="项目联系人电话">
          {{ project.contactPersonPhone }}
        </a-descriptions-item>
        <a-descriptions-item label="项目描述">
          {{ project.description }}
        </a-descriptions-item>
      </a-descriptions>
    </div>

    <div class="con-form">
      <a-form-model
        ref="ruleForm"
        class="info-form"
        :model="form"
        :rules="rules"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        style="width: 100%"
      >
        <a-form-model-item label="是否给予审核通过" prop="checkres">
          <a-radio-group v-model="form.checkres" default="yes">
            <a-radio value="yes"> 通过 </a-radio>
            <a-radio value="no"> 不通过 </a-radio>
          </a-radio-group>
        </a-form-model-item>
        <a-form-model-item label="请填写理由" prop="desc">
          <a-input v-model="form.desc" type="textarea" style="resize: none" />
        </a-form-model-item>
        <a-form-model-item style="margin-top: 40px; margin-left: 40%">
          <a-button type="primary" @click="upSubmit">提交审核结果</a-button>
        </a-form-model-item>
      </a-form-model>
    </div>
  </div>
</template>

<script>
import api from '@/api/reviewerWork';

export default {
  name: 'AddProjectDetail',
  async created() {
    console.log(this.$route.params.projectId);
    await api
      .addProjectDetail({
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
      labelCol: { span: 10 },
      wrapperCol: { span: 5 },
      form: {
        desc: '',
        checkres: '',
      },
      rules: {
        checkres: [
          {
            required: true,
            trigger: 'change',
          },
        ],
        desc: [
          {
            required: true,
            message: '请填写您的申请理由',
            trigger: 'blur',
          },
        ],
        agreement: [
          {
            required: true,
            trigger: 'blur',
          },
        ],
      },
    };
  },
  methods: {
    upSubmit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          const tempObj = {
            appkey: this.$store.state.user.userinfo.appkey,
            projectId: this.$route.params.projectId,
            result: this.form.checkres === 'yes',
          };
          api.sendAddProjectResult(tempObj).then(() => {
            this.$message.success('投票成功');
            this.$router.replace({
              name: 'AddProjectReview',
            });
          });
        } else {
          return false;
        }
        return true;
      });
    },
  },
};
</script>

<style scoped lang="less">
.con-title {
  display: flex;
  > h2 {
    color: #1890ff;
    font-weight: bolder;
    padding-left: 8px;
  }
}
.con-container {
  padding: 30px;
  border: 8px #787e82 double;
  border-collapse: collapse;
}
.con-history {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  .con-check-history {
    padding: 30px;
    padding-left: 50px;
    padding-right: 50px;
  }
}
.con-form {
  display: flex;
  justify-items: center;
}
</style>
