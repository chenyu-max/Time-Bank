<template>
  <div class="voting-reviewer-container">
    <div class="top">
      <img class="img1" src="../../../assets/reviewer_poster.png" alt />
      <img class="img2" src="../../../assets/logo.png" alt />
    </div>
    <div>
      <div class="voting-content-header">
        <div class="voting-header-left">
          <h1>请给你心目中的审核员投票吧</h1>
          <h3>每人仅限一票</h3>
        </div>
        <div class="voting-header-right">
          <div>
            <a-icon type="home" />
            <p>投票截止时间：00:00:00</p>
          </div>
          <div>
            <a-icon type="project" />
            <p>剩余票数：{{ lastVotes }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="list">
      <a-list
        item-layout="horizontal"
        :pagination="pagination"
        :data-source="candidateList"
      >
        <a-list-item slot="renderItem" slot-scope="item">
          <a slot="actions" @click="checkDetail(item.id)">详情</a>
          <a
            slot="actions"
            @click="vote(item.id, 0)"
            v-if="item.id === checkWho"
          >
            撤票
          </a>
          <a
            slot="actions"
            :class="{ 'a-disabled': !lastVotes }"
            @click="vote(item.id, 1)"
            v-if="item.id !== checkWho"
          >
            投票
          </a>
          <a-list-item-meta :description="item.xuanyan">
            <a slot="title">{{ item.name }}</a>
            <a-avatar slot="avatar" :src="item.avatar" />
          </a-list-item-meta>
          <div>{{ item.votes }}票</div>
        </a-list-item>
      </a-list>
    </div>
    <a-modal
      title="候选人详细信息"
      :visible="visible"
      :footer="null"
      @cancel="handleCancel"
    >
      <div class="modal-child">
        <span>用户名：</span>
        <span>{{ candidateInfo.name }}</span>
      </div>
      <div>
        <span>候选人等级：</span>
        <span>{{ candidateInfo.level }} LV</span>
      </div>
      <div>
        <span>候选人志愿服务时长：</span>
        <span>{{ candidateInfo.workTime }} h</span>
      </div>
      <div>
        <span>当选审核人次数：</span>
        <span>{{ candidateInfo.reviewerDays }} 次</span>
      </div>
      <div>
        <span>候选人竞争宣言：</span>
        <span>{{ candidateInfo.xuanyan }}</span>
      </div>
      <div>
        <span>候选人竞选理由：</span>
        <span>{{ candidateInfo.desc }}</span>
      </div>
    </a-modal>
  </div>
</template>

<script>
import api from '@/api/reviewer';

export default {
  name: 'votingReviewer',
  async created() {
    await api
      .getReviewerInfo({
        appkey: this.$store.state.user.userinfo.appkey,
      })
      .then((res) => {
        this.$store.dispatch('candidate/changeCandidateId', res.likeName);
        this.lastVotes = res.likeName ? 0 : 1;
        this.candidateList = res.candidate;
      });
  },
  data() {
    return {
      lastVotes: 1,
      candidateList: [],
      pagination: {
        pageSize: 10,
      },
      visible: false,
      candidateInfo: {},
    };
  },
  computed: {
    checkWho: {
      get() {
        return this.$store.state.candidate.candidateId;
      },
    },
  },
  methods: {
    async vote(id, votes) {
      await api
        .vote({
          appkey: this.$store.state.user.userinfo.appkey,
          id,
          votes,
        })
        .then(() => {
          if (votes === 1) {
            this.$store.dispatch('candidate/changeCandidateId', id);
          } else {
            this.$store.dispatch('candidate/changeCandidateId', '');
          }
          this.lastVotes = votes === 1 ? 0 : 1;
        });
      await api
        .getReviewerInfo({
          appkey: this.$store.state.user.userinfo.appkey,
        })
        .then((res) => {
          this.$store.dispatch('candidate/changeCandidateId', res.likeName);
          this.lastVotes = res.likeName ? 0 : 1;
          this.candidateList = res.candidate;
        });
    },
    checkDetail(id) {
      api
        .getCandidateInfoById({
          appkey: this.$store.state.user.userinfo.appkey,
          id,
        })
        .then((res) => {
          this.candidateInfo = res;
        });
      this.visible = true;
    },
    handleCancel() {
      this.visible = false;
    },
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
  border-bottom: 1px solid #aaa;
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

.list {
  margin-top: 10px;

  .a-disabled {
    pointer-events: none;
    opacity: 0.5;
    color: #808080;
  }
}

.ant-modal-body {
  > div {
    margin: 10px 0;

    span:first-child {
      color: #4a4a4a;
      font-weight: bold;
    }

    span:last-child {
      line-height: 30px;
    }
  }
}
</style>
