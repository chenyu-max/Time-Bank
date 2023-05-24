<template>
  <div class="apply-reviewer-container">
    <div class="apply-prj-on">
      <div class="apply-prj-header">
        <a-icon type="home" class="home-icon"></a-icon>
        <h1>申请须知</h1>
      </div>
      <div class="apply-prj-tips">
        <h1>审核员申请成功后，可以享受审核员权益</h1>
        <div class="care-tips">
          <div class="care-tips-head">
            <a-icon type="home" class="care-tips-ic"></a-icon>
            <h3>注意事项</h3>
          </div>
          <p>
            1.每人每天只可以申请一次，申请结果一周后在<a>审核人公示</a>模块公布。
          </p>
          <p>
            2.审核人必须遵守<a>《时间银行审核规章制度》</a>，有违规者，将永久失去申请审核员权益
          </p>
          <p>3.审核员等级必须在<a>LV5</a>以上，并拥有良好的口碑。</p>
          <p>4.审核人每次审核都用有相对应时间货币作为报酬</p>
        </div>
        <div class="care-tips">
          <div class="care-tips-head">
            <a-icon type="home" class="care-tips-ic"></a-icon>
            <h3>证件要求</h3>
          </div>
          <p>
            1.需要上传本人露脸照手持二代身份证背面照+身份证正反照片（不需要手持）
          </p>
          <p>2.证件必须在有效期内，有效期需在<a>1个月以上</a></p>
          <p>3.若是公司直属/官方认证的机构，需要上传机构同意书</p>
        </div>
      </div>
    </div>
    <h3 class="title">填写信息</h3>
    <div class="apply-content">
      <a-form-model
        ref="ruleForm"
        :model="form"
        :rules="rules"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-form-model-item ref="name" label="真实姓名" prop="name">
          <a-input v-model="form.name" />
        </a-form-model-item>
        <a-form-model-item
          ref="identity_number"
          label="身份证"
          prop="identity_number"
        >
          <a-input v-model="form.identity_number" />
        </a-form-model-item>
        <a-form-model-item label="读取您的信用口碑" prop="resource">
          <a-radio-group v-model="form.resource">
            <a-radio value="1">是</a-radio>
            <a-radio value="2">否</a-radio>
          </a-radio-group>
        </a-form-model-item>
        <a-form-model-item label="您申请的理由" prop="desc">
          <a-input v-model="form.desc" type="textarea" style="resize: none" />
        </a-form-model-item>
        <a-form-model-item ref="xuanyan" label="您的竞争宣言" prop="xunayan">
          <a-input v-model="form.xuanyan" />
        </a-form-model-item>
        <a-form-model-item
          ref="declaration"
          label="您的任职保证"
          prop="declaration"
        >
          <a-input
            v-model="form.declaration"
            placeholder="若成功任职，你的任职保证"
          />
        </a-form-model-item>
        <!-- <a-form-model-item ref="declaration" label="质押金额" prop="deposit">
          <a-input v-model="form.deposit" disabled />
        </a-form-model-item> -->
        <a-form-model-item :wrapper-col="{ span: 13, offset: 10 }">
          <a-button type="primary" @click="onSubmit">提交申请</a-button>
          <a-button style="margin-left: 60px" @click="resetForm">重置</a-button>
        </a-form-model-item>
        <a-form-model-item :wrapper-col="{ span: 13, offset: 9 }">
          <a-checkbox @change="onChange">
            我已同意《时间银行官方认证服务协议》
          </a-checkbox>
        </a-form-model-item>
      </a-form-model>
    </div>
  </div>
</template>

<script>
import api from '@/api/reviewer';

export default {
  name: 'applyReviewer',
  data() {
    return {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
      form: {
        name: '',
        identity_number: '',
        resource: '',
        desc: '',
        xuanyan: '',
        declaration: '',
        deposit: '50时间币',
      },
      rules: {
        name: [
          {
            required: true,
            message: '请输入您的真实姓名',
            trigger: 'blur',
          },
        ],
        xuanyan: [
          {
            required: true,
            message: '请输入您的宣言',
            trigger: 'blur',
          },
        ],
        identity_number: [
          {
            required: true,
            message: '请输入您的证件号码',
            trigger: 'blur',
          },
        ],
        resource: [
          {
            required: true,
            trigger: 'change',
          },
        ],
        declaration: [
          {
            required: true,
            message: '请输入你的任职保证',
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
      },
    };
  },
  methods: {
    onSubmit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          const tempObj = {
            appkey: this.$store.state.user.userinfo.appkey,
            ...this.form,
          };
          api
            .applyToBeReviewer(tempObj)
            .then(() => {
              this.$message.success('申请成功');
            })
            .catch((err) => {
              this.$message.error(err);
            });
        } else {
          return false;
        }
        return true;
      });
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    },
    onChange() {},
  },
};
</script>

<style scoped lang="less">
a {
  color: #31a5fc;
}

.apply-prj-on {
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  background-color: #f3f3f3;

  .apply-prj-header {
    height: 80px;
    width: 100%;
    border-bottom: 3px double grey;
    display: flex;

    .home-icon {
      font-size: 20px;
      line-height: 80px;
      margin-left: 7px;
    }

    > h1 {
      font-size: 20px;
      font-weight: bold;
      line-height: 80px;
      margin-left: 8px;
    }
  }

  .apply-prj-tips {
    display: flex;
    flex-direction: column;
    align-items: center;

    > h1 {
      color: #31a5fc;
    }

    .care-tips {
      color: #000000;
      width: 55%;

      .care-tips-head {
        width: 100%;
        display: flex;

        > h3 {
          color: #000;
        }

        .care-tips-ic {
          font-size: 20px;
          margin-right: 8px;
          color: #cf1414;
        }
      }
    }
  }
}

.title {
  margin-left: 10px;
  font-size: 20px;
  font-weight: bold;
  height: 60px;
  line-height: 60px;
}

.apply-content {
  border: 1px solid #eee;
  padding: 20px 0;
}
</style>
