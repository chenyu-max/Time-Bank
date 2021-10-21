<template>
  <div class="add-project-detail-container">
    添加项目审核详情
    <div class="info-table-container">
      <div class="title"></div>
      <div class="info"></div>
    </div>
    <div class="review"></div>
  </div>
</template>

<script>
import api from '@/api/reviewerWork';

export default {
  name: 'addProjectDetail',
  async created() {
    await api.addProjectDetail({
      appkey: this.$store.state.user.userinfo.appkey,
      projectId: this.$route.params.projectId,
    })
      .then((res) => {
        this.projectInfo = res;
      });
  },
  data() {
    return {
      projectInfo: {},
    };
  },
};
</script>

<style scoped>

</style>
