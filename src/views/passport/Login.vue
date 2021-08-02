<template>
  <div class="login-container">
    <div class="left-bg"></div>
    <div class="right">
      <div class="right-header">
        <!--        <h1>欢迎登录xxx时间银行</h1>-->
      </div>
      <a-form-model ref="loginForm" class="login-form"
                    :model="loginForm" :rules="rules" v-bind="layout">
        <a-form-model-item has-feedback label="手机号" prop="phoneNumber">
          <a-input v-model="loginForm.phoneNumber">
            <a-icon slot="prefix" type="phone" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-model-item>
        <a-form-model-item has-feedback label="密码" prop="password">
          <a-input v-model="loginForm.password" type="password" autocomplete="new-password">
            <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
          </a-input>
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
import userApi from '@/api/user';

export default {
  name: 'Login',
  data() {
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
    // 密码填写校验
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
        phoneNumber: '',
      },
      rules: {
        password: [{
          validator: validatePass,
          trigger: 'change',
        }],
        phoneNumber: {
          validator: checkPhoneNumber,
          triggers: 'change',
        },
      },
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 使用登录接口
          userApi.login(this.loginForm).then((res) => {
            this.$store.dispatch('user/setUserInfo', res);
            if (!res.nowCity) {
              const defaultNowCity = ['浙江省', '杭州市', '江干区'];
              this.$store.dispatch('nowCityList/setNowCityList', defaultNowCity);
            }
            this.$router.push({
              name: 'Home',
            });
          }).catch((err) => {
            this.$message.error(err);
          });
          return true;
        }
        window.console.log('error submit!!');
        return false;
      });
    },
  },
};
</script>

<style scoped lang="less">
.login-container {
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
    flex-direction: column;
    display: flex;

    .right-header {
      margin-bottom: 35px;
      margin-top: 45px;
      height: 30%;
      background: url("../../assets/login_header.png");
      background-size: cover;
      flex: 0 0 auto;
    }

    .login-form {
      background: rgba(89, 234, 76, 0);
      padding: 40px 10px 0 20px;
      flex: 1 1 auto;
      transform: translateX(5%);

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
  }
}
</style>
