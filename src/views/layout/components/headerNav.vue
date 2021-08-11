<template>
  <div class="header-nav-container">
    <!--  左侧菜单栏的缩放btn  -->
    <div class="collapsed-btn">
      <a-button type="primary" @click="toggleCollapsed">
        <a-icon :type="$store.state.leftMenuCollapsed.collapsed ? 'menu-unfold' : 'menu-fold'"/>
      </a-button>
    </div>
    <!--  面包屑  -->
    <div class="breadcrumb">
      <a-breadcrumb>
        <a-breadcrumb-item v-for="(title,i) in breadcrumbArr" :key="i">
          {{ title }}
        </a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <!--  切换城市  -->
    <div class="location">
      <div class="current-city">
        <a-icon type="environment"></a-icon>
        <div v-for="(area,i) in nowCityList" :key="i">
          {{ area }}
        </div>
      </div>
      <div class="change-city">
        <router-link :to="{name : 'ChangeCity'}">切换城市</router-link>
      </div>
    </div>
    <!--  用户头像 and 用户名  -->
    <div class="user">
      <!--   用户头像 以及 用户头像hover后下拉列表   -->
      <div class="avatar">
        <a-avatar class="avatar-img"
                  :size="36"
                  :src="avatarUrl"/>
        <div class="user-info">
          <div class="info">
            <router-link :to="{name : 'PersonalCenter'}">个人中心</router-link>
          </div>
          <div class="balance">
            <router-link :to="{name : 'TimeShop'}">时间商城</router-link>
          </div>
          <div class="logout" @click="logout">退出登录</div>
        </div>
      </div>
      <div class="username">欢迎您 {{ username }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headerNav',
  computed: {
    breadcrumbArr: {
      get() {
        // 通过在 meta 中设置的 title 和 fatherTitle 来 设置面包屑的展示数据
        const temp = this.$route.meta;
        const arr = temp.fatherTitle ? temp.fatherTitle.split('/') : [];
        return arr.concat([temp.title]);
      },
    },
    username: {
      get() {
        return this.$store.state.user.userinfo.username;
      },
    },
    avatarUrl: {
      get() {
        return this.$store.state.user.userinfo.avatarUrl;
      },
    },
    nowCityList: {
      get() {
        return this.$store.state.nowCityList.nowCityList;
      },
    },
  },
  methods: {
    toggleCollapsed() {
      this.$store.dispatch('leftMenuCollapsed/changeCollapsed');
    },
    logout() {
      this.$store.dispatch('user/logout');
      this.$store.dispatch('nowCityList/deleteNowCityList');
      this.$store.dispatch('customerService/logout');
      this.$router.replace({
        name: 'login',
      });
    },
  },
};
</script>

<style scoped lang="less">
.header-nav-container {
  display: flex;
  align-items: center;
}

.collapsed-btn {
  flex: 0 0 auto;
}

.breadcrumb {
  flex: 1 1 auto;
  width: 50%;
  margin-left: 10px;
}

.location {
  margin-right: 10px;
  flex: 1 1 auto;
  width: 25%;

  div {
    margin: 0 5px;
    display: inline-block;
  }
}

.user {
  flex: 1 1 auto;
  display: flex;

  .username {
    margin-left: 15px;
  }

  .avatar {
    transition: all 0.6s ease-in-out;
    cursor: pointer;
    z-index: 999;
    .user-info {
      padding-top: 30px;
      display: none;
      width: 100px;
      color: #222226;
      background: #eee;
      position: absolute;
      min-height: 200px;
      top: 30px;
      left: 50%;
      margin-left: -50px;
      z-index: 998;
      border-radius: 4px;
      -webkit-box-shadow: 0 0 10px 2px rgb(0 0 0 / 6%);
      box-shadow: 0 0 10px 2px rgba(0, 0, 0, .2);
      text-align: center;

      div {
        width: 100%;
        //border-bottom: 1px solid black;
        transition: all .3s ease-in-out;

        &:hover {
          transform: scale(1.2, 1.2);
        }
      }
    }

    &:hover {
      transform: scale(1.3, 1.3) translateY(20%);

      .avatar-img {
        transition: all 0.6s ease-in-out;
        transform: rotate(360deg);
        z-index: 999;
      }

      .user-info {
        display: block;
      }
    }
  }
}
</style>
