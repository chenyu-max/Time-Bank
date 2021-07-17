<template>
  <div class="login">
    <div class="left-bg"></div>
    <div class="right">
      <h1>欢迎登录xxx时间银行</h1>
      <a-form-model ref="loginForm" class="login-form"
                    :model="loginForm" :rules="rules" v-bind="layout">
        <a-form-model-item has-feedback label="邮箱" prop="email">
          <a-input v-model="loginForm.email"/>
        </a-form-model-item>
        <a-form-model-item has-feedback label="密码" prop="password">
          <a-input v-model="loginForm.password" type="password" autocomplete="off"/>
        </a-form-model-item>
        <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }" style="text-align: center">
          <a-button type="primary" @click="submitForm('loginForm')" class="login-btn">
            登录
          </a-button>
          <div class="find-back-btn">
            <router-link :to="{name : 'FindBackPassword'}">找回密码</router-link>
          </div>
          <div class="register-btn">
            <router-link :to="{name : 'Register'}">注册</router-link>
          </div>
        </a-form-model-item>
      </a-form-model>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
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
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        password: '',
        email: '',
      },
      rules: {
        password: [{
          validator: validatePass,
          trigger: 'change',
        }],
        email: {
          validator: checkEmail,
          triggers: 'change',
        },
      },
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      },
    };
  },
};
</script>

<style scoped lang="less">
.login {
  width: 80vw;
  height: 80vh;
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

    h1 {
      font-size: 20px;
      font-weight: 500;
      color: #333;
      line-height: 28px;
      text-align: center;
      margin-bottom: 65px;
      margin-top: 63px;
    }
  }
}

.login-form {
  background: rgba(89, 234, 76, 0);
  padding: 40px 10px 0 20px;

  .login-btn {
    display: block;
    width: 100%;
    margin-bottom: 5px;
    font-size: 1.2rem;
  }

  .find-back-btn {
    float: left;
  }

  .register-btn {
    float: right;
  }

}
</style>
