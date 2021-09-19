<template>
  <div class="head-main">
    <div class="lf-head">
      <div class="picture">
        <img src="../../../assets/logo.png" alt height="64px" width="158px"/>
      </div>
      <div class="info">
        <router-link :to="{name : 'Mainhomee'}">首页</router-link>
      </div>
      <div class="timebank">
        <router-link :to="{name: 'Introduction'}">时间银行</router-link>
      </div>
      <div class="about">
        <!--   用户头像 以及 用户头像hover后下拉列表   -->
        <router-link :to="{name : 'About'}">关于我</router-link>
      </div>
    </div>
    <div class="login" @click="jump('login')">
      <p>登录/注册</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headernav',
  methods: {
    jump() {
      this.$router.push({
        name: 'Login',
      });
    },
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}

.head-main {
  height: 80px;
  width: 100%;
  background-color: #202324;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .lf-head {
    display: flex;
    justify-content: flex-start;

    .picture {
      margin-top: 10px;
      margin-left: 20px;
      text-align: center;
    }

    .info,
    .timebank,
    .about {
      font-weight: bolder;
      margin: 30px;
    }
  }

  .login {
    margin-right: 30px;

    > p {
      color: white;
      font-weight: bolder;
      cursor: pointer;
    }
  }
}

a {
  text-align: center;
}
</style>
