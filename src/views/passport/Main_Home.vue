<template>
  <div class="home-page">
    <header-nav/>
    <router-view/>
  </div>
</template>

<script>
import headerNav from './components/headerNav.vue';

export default {
  name: 'Main_Home',
  components: {
    headerNav,
  },
};
</script>
<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
</style>
