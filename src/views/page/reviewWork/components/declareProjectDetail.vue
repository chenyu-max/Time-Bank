<template>
  <div class="declare-project-detail-container">
    项目申报审核详情
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
  name: 'declareProjectDetail',
  async created() {
    await api.declareProjectDetail({
      appkey: this.$store.state.user.userinfo.appkey,
      projectId: this.$route.params.projectId,
    })
      .then((res) => {
        console.log(res);
        // this.projectInfo = res;
      });
  },
};
</script>

<style scoped>

</style>
