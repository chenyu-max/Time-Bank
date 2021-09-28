<template>
  <div class="report-review-list-container">
    举报审核列表
  </div>
</template>

<script>
import api from '@/api/reviewerWork';

export default {
  name: 'reportReviewList',
  async created() {
    api.reportReviewList({
      appkey: this.$store.state.user.userinfo.appkey,
    })
      .then((res) => {
        console.log(res);
      });
  },
};
</script>

<style scoped lang="less">

</style>
