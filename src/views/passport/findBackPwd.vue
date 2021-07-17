<template>
  <div class="find-back-pwd-container">
    <div class="left-bg"></div>
    <div class="right">
      <div class="right-header">
        <h1>找回密码</h1>
      </div>
      <a-form-model ref="findBackPwdForm" class="find-back-pwd-form"
                    :model="findBackPwdForm" :rules="rules" v-bind="layout">
        <a-form-model-item has-feedback label="邮箱" prop="email">
          <a-input v-model="findBackPwdForm.email"/>
        </a-form-model-item>
        <a-form-model-item has-feedback label="输入新密码" prop="password">
          <a-input v-model="findBackPwdForm.password" type="password" autocomplete="new-password"/>
        </a-form-model-item>
        <a-form-model-item has-feedback label="重复新密码" prop="password2">
          <a-input v-model="findBackPwdForm.password2" type="password" autocomplete="new-password"/>
        </a-form-model-item>
        <a-form-model-item has-feedback label="验证码" prop="code">
          <a-input v-model="findBackPwdForm.code"/>
        </a-form-model-item>
        <a-form-model-item style="text-align: center; margin-top: -12px"
                           :wrapper-col="{ span: 14, offset: 4 }">
          <a-button @click="getEmailCode">
            获取验证码
          </a-button>
        </a-form-model-item>
        <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }" style="text-align: center">
          <a-button type="primary" @click="submitForm('findBackPwdForm')" class="find-back-pwd-btn">
            找回密码
          </a-button>
          <div>
            <router-link :to="{name : 'Login'}">
              返回登录
            </router-link>
          </div>
        </a-form-model-item>
      </a-form-model>
    </div>
  </div>
</template>

<script>
export default {
  name: 'findBackPwd',
  data() {
    // 邮箱填写校验
    const emailReg = /^[\w-]+@[\w.-]+.com$/;
    const checkEmail = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入邮箱'));
      }
      if (emailReg.test(value)) {
        return callback();
      }
      return callback(new Error('邮箱格式不正确'));
    };
    // 第一次密码填写校验
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    };
    // 第二次密码填写校验
    const checkPassword2 = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('请再次输入密码'));
      }
      if (value !== this.registerForm.password) {
        return callback(new Error('两次输入的密码不一致'));
      }
      return callback();
    };
    // 验证码格式校验
    const codeReg = /^\d{6}$/;
    const checkCode = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('请输入验证码'));
      }
      if (!codeReg.test(value)) {
        return callback(new Error('验证码格式不正确'));
      }
      return callback();
    };
    return {
      findBackPwdForm: {
        email: '',
        password: '',
        password2: '',
        code: '',
      },
      rules: {
        email: {
          validator: checkEmail,
          triggers: 'change',
        },
        password: [{
          validator: validatePass,
          trigger: 'change',
        }],
        password2: [{
          validator: checkPassword2,
          trigger: 'change',
        }],
        code: [{
          validator: checkCode,
          trigger: 'change',
        }],
      },
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      },
    };
  },
  methods: {
    getEmailCode() {
      const emailReg = /^[\w-]+@[\w.-]+.com$/;
      if (emailReg.test(this.findBackPwdForm.email)) {
        // 发送获取验证码的请求
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        // 如果所有的数据校验没有问题，则 valid 为 true
        if (valid) {
          // const data = {
          //   password: this.findBackPwdForm.password,
          //   email: this.findBackPwdForm.email,
          //   code: this.findBackPwdForm.code,
          // };
          // 使用找回密码的接口
          return true;
        }
        window.console.log('error register!!');
        return false;
      });
    },
  },
};
</script>

<style scoped lang="less">
.find-back-pwd-container {
  width: 80vw;
  height: 85vh;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translateY(-50%) translateX(-50%);
  border-radius: 5px;
  box-shadow: 0 2px 30px 0 rgba(0, 0, 0, .11);
  display: flex;

  .left-bg {
    background-image: url("../../assets/login_bg.png");
    object-fit: cover;
    background-repeat: no-repeat;
    background-size: cover;
    width: 40%;
  }

  .right {
    background-color: #d0d0d02e;
    flex: 1 1 auto;

    .right-header {
      margin-top: 35px;
      margin-bottom: -15px;

      h1 {
        transform: translateX(-5%);
        font-size: 20px;
        font-weight: 500;
        color: #333;
        line-height: 28px;
        text-align: center;
      }
    }
  }
}

.find-back-pwd-form {
  background: rgba(89, 234, 76, 0);
  padding: 40px 10px 0 20px;

  .find-back-pwd-btn {
    display: block;
    width: 100%;
    margin-top: -10px;
    font-size: 1.2rem;
    margin-bottom: 8px;
  }
}
</style>
