<template>
  <div class="voting-reviewer-container">
    <div class="top">
      <img class="img1" src="../../../assets/reviewer_poster.png" alt/>
      <img class="img2" src="../../../assets/logo.png" alt/>
    </div>
    <div>
      <div class="voting-content-header">
        <div class="voting-header-left">
          <h1>请给你心目中的审核员投票吧</h1>
          <h3>每人仅限一票</h3>
        </div>
        <div class="voting-header-right">
          <div>
            <a-icon type="home"/>
            <p>投票截止时间：00:00:00</p>
          </div>
          <div>
            <a-icon type="question"/>
            <p>剩余票数：{{ lastVotes }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api/reviewer';

export default {
  name: 'votingReviewer',
  async created() {
    await api.getReviewerInfo({
      appkey: this.$store.state.user.userinfo.appkey,
    })
      .then((res) => {
        console.log(res);
        this.lastVotes = res.likeName ? 0 : 1;
      });
  },
  data() {
    return {
      lastVotes: 1,
    };
  },
};
</script>

<style scoped lang="less">
.top {
  background-color: #a8c0eb;
  height: 25vh;

  .img1 {
    margin-top: 20px;
    margin-left: 20px;
  }

  .img2 {
    margin-top: 20px;
    margin-left: 200px;
  }
}

.voting-content-header {
  padding: 10px 0;
  width: 100%;
  height: 20vh;
  border-bottom: 1px solid #eee;
  display: flex;

  .voting-header-left {
    flex: 1 1 auto;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .voting-header-right {
    flex: 0 0 auto;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    > div {
      display: flex;
      height: 30px;
      line-height: 30px;

      > i {
        line-height: 30px;
        margin-right: 5px;
      }
    }
  }
}
</style>
