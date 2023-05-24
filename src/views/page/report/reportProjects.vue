<template>
  <div class="report-projects-container">
    <div class="title">举报项目</div>
    <a-steps :current="current" class="steps-header">
      <a-step v-for="item in steps" :key="item.title" :title="item.title" />
    </a-steps>
    <div class="steps-content">
      <template v-if="current === 0">
        <a-form-model ref="form" class="form" :model="form" :rules="rules" v-bind="layout">

          <a-form-model-item has-feedback label="项目名称" prop="projectId">
            <a-select default-value=""  @change="handleChange">
              <a-select-option :value="item.id" v-for="item in allArr" :key="item.id">
                {{ item.name }}
              </a-select-option>
            </a-select>
          </a-form-model-item>
          <!-- <a-form-model-item has-feedback label="项目ID" prop="projectId">
            <a-input v-model="form.projectId" />
          </a-form-model-item>
          <a-form-model-item has-feedback label="项目名称" prop="projectName">
            <a-input v-model="form.projectName" />
          </a-form-model-item> -->
          <a-form-model-item has-feedback label="投诉人姓名" prop="name">
            <a-input v-model="form.name" />
          </a-form-model-item>
          <a-form-model-item has-feedback label="投诉人电话" prop="phone">
            <a-input v-model="form.phone" />
          </a-form-model-item>
          <a-form-model-item has-feedback label="投诉详情" prop="desc">
            <a-input v-model="form.desc" type="textarea" style="resize: none; height: 80px" />
          </a-form-model-item>
        </a-form-model>
      </template>
      <template v-else>
        <div style="font-size: 25px">举报信息已上交，请等待回复</div>
      </template>
    </div>
    <div class="steps-action">
      <a-button v-if="current < steps.length - 1" type="primary" @click="next">
        提交举报信息
      </a-button>
      <a-button v-if="current === steps.length - 1" type="primary" @click="done">
        完成举报
      </a-button>
    </div>
  </div>
</template>

<script>
import api from '@/api/report';
import projectApi from '@/api/projects';

export default {
  name: 'reportProjects',
  async created() {
    await projectApi.getMyProjectHistory({
      appkey: this.$store.state.user.userinfo.appkey,
    })
      .then((res) => {
        let nowList = [];
        let waitListArr = [];
        let finishListArr = [];
        nowList = res.doing;
        waitListArr = res.waitForComment;
        finishListArr = res.finish;
        this.allArr = [...nowList, ...finishListArr, ...waitListArr];
      });
    console.log(this.allArr);
  },
  data() {
    // const validateProjecId = (rule, value, callback) => {
    //   if (value === '') {
    //     callback(new Error('请输入项目ID'));
    //   } else {
    //     callback();
    //   }
    // };
    // const validateProjectName = (rule, value, callback) => {
    //   if (value === '') {
    //     callback(new Error('请输入项目名称'));
    //   } else {
    //     callback();
    //   }
    // };
    const validateName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请您的姓名'));
      } else {
        callback();
      }
    };
    const validateDesc = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入项目描述'));
      } else {
        callback();
      }
    };
    const validatePhone = (rule, value, callback) => {
      const phoneReg = /^1[3456789]{1}\d{9}$/;
      if (value === '') {
        callback(new Error('请填写联系人电话'));
      } else if (!phoneReg.test(value)) {
        callback(new Error('请填写正确的电话号码'));
      } else {
        callback();
      }
    };
    return {
      allArr: [],
      form: {
        projectId: '',
        projectName: '',
        name: '',
        phone: '',
        desc: '',
      },
      rules: {
        // projectId: [
        //   {
        //     validator: validateProjecId,
        //     trigger: 'change',
        //   },
        // ],
        // projectName: [
        //   {
        //     validator: validateProjectName,
        //     trigger: 'change',
        //   },
        // ],
        name: [
          {
            validator: validateName,
            trigger: 'change',
          },
        ],
        phone: [
          {
            validator: validatePhone,
            trigger: 'change',
          },
        ],
        desc: [
          {
            validator: validateDesc,
            trigger: 'change',
          },
        ],
      },
      layout: {
        labelCol: { span: 7 },
        wrapperCol: { span: 11 },
      },
      current: 0,
      steps: [
        {
          title: '填写举报信息',
        },
        {
          title: '完成举报',
        },
      ],
    };
  },
  methods: {
    handleChange(e) {
      for (let i = 0; i < this.allArr.length; i += 1) {
        if (this.allArr[i].id === e) {
          this.form.projectId = this.allArr[i].id;
          this.form.projectName = this.allArr[i].name;
          break;
        }
      }
    },
    done() {
      this.$message.success('举报完成');
      setTimeout(() => {
        this.$router.replace({
          name: 'NowPublicWelfare',
        });
      }, 1000);
    },
    next() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          api
            .reportProject({
              appkey: this.$store.state.user.userinfo.appkey,
              ...this.form,
            })
            .then(() => {
              this.current = 1;
            })
            .catch((err) => {
              this.$message.error(err);
            });
        } else {
          this.$message.error('请正确填写信息');
        }
        return false;
      });
    },
  },
};
</script>

<style scoped lang="less">
.title {
  margin-top: 15px;
  text-align: center;
  height: 12px;
  font-size: 20px;
  font-weight: bold;
}

.steps-header {
  width: 50%;
  margin: 20px auto;
}

.steps-content {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 200px;
  text-align: center;
  padding-top: 40px;
}

.steps-action {
  margin-top: 24px;
  text-align: center;
}
</style>
