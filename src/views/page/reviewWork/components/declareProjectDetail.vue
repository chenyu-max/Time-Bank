<template>
  <div class="declare-project-detail-container">
    <div class="con-title">
      <div><a-icon type="home" style="font-size: 25px"></a-icon></div>
      <h2>项目申报审核详情页</h2>
    </div>
    <div class="con-container">
      <a-descriptions bordered>
        <a-descriptions-item label="项目名称">
          {{ project.projectName }}
        </a-descriptions-item>
        <a-descriptions-item label="目前投票数">
          {{ project.remarkAgree }}/{{ 21 }}
        </a-descriptions-item>
        <a-descriptions-item label="项目ID">
          {{ project.projectId }}
        </a-descriptions-item>
        <a-descriptions-item label="申报项目分类">
          {{ project.category }}
        </a-descriptions-item>
        <a-descriptions-item label="项目所需人数" :span="2">
          {{ project.needPeople }}
        </a-descriptions-item>
        <a-descriptions-item label="项目结束时间">
          {{ project.endTime }}
        </a-descriptions-item>
        <a-descriptions-item label="项目举办地点" :span="3">
          <a-badge status="processing" :text="project.address" />
        </a-descriptions-item>
        <a-descriptions-item label="项目负责人">
          {{ project.ownerName }}
        </a-descriptions-item>
        <a-descriptions-item label="项目联系人">
          {{ project.contactPersonName }}
        </a-descriptions-item>
      </a-descriptions>
    </div>
    <div class="user-info-list">
      <a-list
        class="comment-list"
        :header="`该项目一共 ${userList.length}条 评论`"
        item-layout="horizontal"
        :data-source="userList"
      >
        <template #renderItem="item">
          <a-list-item>
            <a-comment :author="item.username" :avatar="item.userAvatar">
              <template #content>
                <p>{{ item.userComment }}</p>
              </template>
              <template #datetime>
                <a-tooltip :title="item.overTime">
                  <span>评论时间： {{ item.overTime }}</span>
                </a-tooltip>
              </template>
            </a-comment>
            <div class="comment-info">
              <div class="accept-time">
                <div class="title">接受任务时间:</div>
                {{ item.acceptTime }}
              </div>
              <div class="user-state">
                <div class="title">完成状态:</div>
                {{ item.userState }}
              </div>
              <div class="user-star">
                <div class="title">用户评分:</div>
                <a-rate :value="item.star" disabled style="line-height: 16px" />
              </div>
            </div>
          </a-list-item>
        </template>
      </a-list>
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
import formatDate from '@/utils/formatDate';

export default {
  name: 'DeclareProjectDetail',
  async created() {
    await api
      .declareProjectDetail({
        appkey: this.$store.state.user.userinfo.appkey,
        projectId: this.$route.params.projectId,
      })
      .then((res) => {
        this.project = {
          ...res.declareProjectDetailVo,
          endTime: formatDate(res.declareProjectDetailVo.endTime),
        };
        this.userList = res.userList.map((item) => {
          const acceptTime = formatDate(item.acceptTime);
          const overTime = formatDate(item.overTime);
          return {
            ...item,
            acceptTime,
            overTime,
          };
        });
      });
  },
  data() {
    return {
      project: {},
      userList: [],
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
          api
            .sendDeclareProjectResult({
              appkey: this.$store.state.user.userinfo.appkey,
              projectId: this.$route.params.projectId,
              result: this.form.checkres === 'yes',
            })
            .then(() => {
              this.$message.success('项目申报处理成功');
              this.$router.replace({
                name: 'DeclareProjectReviewer',
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

.ant-list-item {
  flex-direction: column;
  align-items: flex-start;
}

.comment-info {
  width: 100%;
  height: 20px;
  display: flex;

  > div {
    display: flex;

    > div {
      display: flex;
    }
  }

  .title {
    margin-right: 10px;
  }

  .accept-time {
    flex: 0 0 30%;
  }

  .user-state {
    flex: 0 0 30%;
  }
}
</style>
