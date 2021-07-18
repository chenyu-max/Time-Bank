<template>
  <div class="home-container">
    <left-menu></left-menu>
    <div :class="{'main-app':true , 'menu-unfold': $store.state.leftMenuCollapsed.collapsed }">
      <headerNav></headerNav>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import leftMenu from './components/leftMenu.vue';
import headerNav from './components/headerNav.vue';

export default {
  name: 'Home',
  components: {
    leftMenu,
    headerNav,
  },
};
</script>

<style scoped lang="less">
.home-container {
  .left-menu-container {
    width: 15%;
    position: fixed;
    height: 100%;
  }

  .main-app {
    margin-left: 15%;
    transition: all .3s;

    &.menu-unfold {
      margin-left: 80px;
    }

    .header-nav-container {
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #eee;
      padding-left: 10px;
      padding-right: 20px;
    }
  }
}

</style>
