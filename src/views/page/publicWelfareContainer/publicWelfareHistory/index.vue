<template>
  <div class="public-welfare-history-container">
    <a-tabs :activeKey="activeKey" @change="changeTab">
      <a-tab-pane key="正在进行中" tab="正在进行中">正在进行中</a-tab-pane>
      <a-tab-pane key="待评价的" tab="待评价的">待评价的</a-tab-pane>
      <a-tab-pane key="已完成的" tab="已完成的">已完成的</a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      activeKey: '正在进行中',
    };
  },
  methods: {
    changeTab(tabKey) {
      this.activeKey = tabKey;
    },
  },
};
</script>

<style scoped>

</style>
