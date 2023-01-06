<template>
  <div class="register-container">
    <div class="left-bg"></div>
    <div class="right">
      <div class="right-header">
        <h1>时间银行账号注册</h1>
      </div>
      <a-form-model
        ref="registerForm"
        class="register-form"
        :model="registerForm"
        :rules="rules"
        v-bind="layout"
      >
        <a-form-model-item has-feedback label="用户名" prop="username">
          <a-input v-model="registerForm.username" />
        </a-form-model-item>
        <a-form-model-item has-feedback label="手机号" prop="phoneNumber">
          <a-input v-model="registerForm.phoneNumber" />
        </a-form-model-item>
        <a-form-model-item has-feedback label="密码" prop="password">
          <a-input
            v-model="registerForm.password"
            type="password"
            autocomplete="new-password"
          />
        </a-form-model-item>
        <a-form-model-item has-feedback label="确认密码" prop="password2">
          <a-input
            v-model="registerForm.password2"
            type="password"
            autocomplete="off"
          />
        </a-form-model-item>
        <a-form-model-item has-feedback label="验证码" prop="code">
          <a-input v-model="registerForm.code" />
        </a-form-model-item>
        <a-form-model-item
          style="text-align: center; margin-top: -12px"
          :wrapper-col="{ span: 14, offset: 4 }"
        >
          <a-button @click="getCode"> 获取验证码 </a-button>
        </a-form-model-item>
        <a-form-model-item
          :wrapper-col="{ span: 14, offset: 4 }"
          style="text-align: center"
        >
          <a-button
            type="primary"
            @click="submitForm('registerForm')"
            class="register-btn"
          >
            注册
          </a-button>
          <div>
            <router-link :to="{ name: 'Login' }"> 返回登录 </router-link>
          </div>
        </a-form-model-item>
      </a-form-model>
    </div>
  </div>
</template>

<script>
export default {
  name: 'register',
  data() {
    // 用户名校验
    const validateUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'));
      } else {
        callback();
      }
    };
    // 手机号填写校验
    const phoneReg = /^1[3456789]{1}\d{9}$/;
    const checkPhoneNumber = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入手机号'));
      }
      if (phoneReg.test(value)) {
        return callback();
      }
      return callback(new Error('手机号格式不正确'));
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
      registerForm: {
        username: '',
        phoneNumber: '',
        password: '',
        password2: '',
        code: '',
      },
      rules: {
        username: {
          validator: validateUsername,
          triggers: 'change',
        },
        phoneNumber: {
          validator: checkPhoneNumber,
          triggers: 'change',
        },
        password: [
          {
            validator: validatePass,
            trigger: 'change',
          },
        ],
        password2: [
          {
            validator: checkPassword2,
            trigger: 'change',
          },
        ],
        code: [
          {
            validator: checkCode,
            trigger: 'change',
          },
        ],
      },
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      },
    };
  },
  methods: {
    getCode() {
      const phoneReg = /^1[3456789]{1}\d{9}$/;
      // 这里的验证是因为获取验证码的时候，是无法进行rule的验证的，所以这里需要再一次的进行验证
      if (phoneReg.test(this.registerForm.phoneNumber)) {
        // 发送获取验证码的请求
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        // 如果所有的数据校验没有问题，则 valid 为 true
        if (valid) {
          // const data = {
          //   username: this.registerForm.username
          //   password: this.registerForm.password,
          //   phoneNumber: this.registerForm.phoneNumber,
          //   code: this.registerForm.code,
          // };
          // 使用注册接口
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
.register-container {
  width: 80vw;
  height: 85vh;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translateY(-50%) translateX(-50%);
  border-radius: 5px;
  box-shadow: 0 2px 30px 0 rgba(0, 0, 0, 0.11);
  display: flex;

  .left-bg {
    background-image: url('../../assets/login_bg.png');
    object-fit: cover;
    background-repeat: no-repeat;
    background-size: cover;
    width: 40%;
  }

  .right {
    background-color: #d0d0d02e;
    flex: 1 1 auto;

    .right-header {
      margin-top: 20px;

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

.register-form {
  background: rgba(89, 234, 76, 0);
  padding: 40px 10px 0 20px;
  margin-top: -20px;

  .register-btn {
    display: block;
    width: 100%;
    margin-top: -10px;
    font-size: 1.2rem;
  }
}
</style>
