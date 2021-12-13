<template>
  <div class="report-review-list-container">
    <div class="rp-header">
      <div>
        <a-icon type="filter" style="font-size: 25px;"></a-icon>
        <h2>举报列表</h2>
      </div>
    </div>
    <div class="rp-claper">
      <div class="rp-select">
        <a-select default-value="default" style="width: 20vw;">
          <a-select-option value="default" @click="changeActive('all')">全部内容</a-select-option>
          <a-select-option value="doing" @click="changeActive('ing')">正在审核</a-select-option>
          <a-select-option value="finished" @click="changeActive('over')">已同意</a-select-option>
          <a-select-option value="backed" @click="changeActive('back')">已打回</a-select-option>
        </a-select>
      </div>
      <div class="rp-search">
        <div>搜索</div>
        <a-input-search placeholder="输入项目名称" enter-button style="width: 15vw"></a-input-search>
      </div>
    </div>
    <div class="list">
      <div class="list-header">
        <a>举报简述</a>
        <a>状态</a>
        <a>举报类型</a>
        <a>用户ID</a>
        <a>举报时间</a>
        <div class="h5">
          <h3 style="font-size: 20px;font-weight: bolder;">投票</h3>
          <span style="font-size: 5px; color: red;">（投票数大于50%，自动审核结束）</span>
        </div>
      </div>
      <a-list
          class="rp-check-list"
          item-layout="horizontal"
          :data-source="showList"
          :pagination="pagination">
        <a-list-item slot="renderItem" slot-scope="item">
          <div class="title" overflow="hidden"><a>
            简述:&nbsp;</a>{{ item.desc }}
          </div>
          <div class="tips" :class="{'ing-class': item.tips === 'ing','agree-class':
          item.tips === 'over','back-class': item.tips === 'back'}">
            {{ item.tips === 'over' ? '已同意' : item.tips === 'back' ? '已打回' : '正在审核' }}
          </div>
          <div class="category">{{ item.category }}</div>
          <div class="id">{{ item.ownerId }}</div>
          <div class="time">{{ formatDate(item.time, true) }}</div>
          <div @click="checkDetails(item)"
               :class="{'vote' : true, 'disable': item.tips !== 'ing'}">
            去投票
          </div>
        </a-list-item>

      </a-list>
    </div>
    <a-modal v-model="visible" title="投票详情" class="voteDetail">
      <div class="modal-child">
        <span><a>举报人：&nbsp;</a>{{ votingDetails.ownerName }}</span>
        <br>
        <span><a>举报人ID：&nbsp;</a>{{ votingDetails.ownerId }}</span><br>
        <span>&nbsp;</span>
      </div>
      <div>
        <span><a>被举报{{ reportName }}:&nbsp;</a>{{ votingDetails.reportName }}</span><br>
        <span><a>被举报{{ reportName }}ID:&nbsp;</a>{{ votingDetails.reportId }}</span><br>
        <span>&nbsp;</span>
      </div>
      <div>
        <span><a>举报详细理由:&nbsp;</a>{{ votingDetails.desc }}</span><br>
        <span>&nbsp;</span>
      </div>
      <div>
        <span><h3>当前投票情况</h3></span>
        <span><a>举报通过人数：&nbsp;</a>{{ votingDetails.agree }}</span><br>
        <span><a>举报未通过人数：&nbsp;</a>{{ votingDetails.disagree }}</span><br>
        <span>&nbsp;</span>
      </div>
      <template slot="footer">
        <a-button key="submit" type="primary"
        @click="handleOk(true)" :loading="loading">同意</a-button>
        <a-button key="submit" type="primary"
        @click="handleOk(false)" :loading="loading">拒绝</a-button>
        <a-button key="back" @click="handleCancle">返回</a-button>
      </template>
    </a-modal>
  </div>
</template>

<script>
import api from '@/api/reviewerWork';
import formatDate from '@/utils/formatDate';

export default {
  name: 'reportReviewList',
  async created() {
    api
      .reportReviewList({
        appkey: this.$store.state.user.userinfo.appkey,
      })
      .then((res) => {
        this.list = res.list;
        this.showList = res.list;
      });
  },
  data() {
    return {
      list: [],
      showList: [],
      pagination: {
        pageSize: 10,
      },
      visible: false,
      loading: false,
      votingDetails: [],
      activeName: 'all',
      reportName: '',
    };
  },
  methods: {
    formatDate,
    checkDetails(item) {
      this.visible = true;
      this.votingDetails = item;
      const temp = item.category.split('举报')[1];
      this.reportName = temp;
    },
    handleOk(result) {
      api.sendReportResult({
        appkey: this.$store.state.user.userinfo.appkey,
        userId: this.votingDetails.ownerId,
        category: this.votingDetails.category,
        id: this.votingDetails.reportId,
        result,
      }).then(() => {
        this.$message.success('举报处理成功');
        this.loading = true;
        api
          .reportReviewList({
            appkey: this.$store.state.user.userinfo.appkey,
          })
          .then((res) => {
            this.list = res.list;
            this.showList = res.list;
          });
        setTimeout(() => {
          this.visible = false;
          this.loading = false;
        }, 500);
      });
    },
    handleCancle() {
      this.visible = false;
    },
    async changeActive(activeName) {
      this.activeName = activeName;
      this.showList = this.list.filter((item) => {
        if (activeName === 'all') {
          return true;
        }
        return item.tips === activeName;
      });
      await this.$nextTick();
    },
  },
};
</script>

<style scoped lang="less">

.rp-header {
  margin-left: 10px;
  color: #31A5FC;

  > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 10vh;
    line-height: 10vh;

    > i {
      line-height: 10vh;
    }

    > h2 {
      line-height: 10vh;
      margin-left: 5px;
      margin-bottom: 0.3em;
      color: #31A5FC;
    }
  }
}

.rp-claper {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-left: 30px;
  margin-right: 120px;

  .rp-search {
    display: flex;

    > div {
      margin-top: 5px;
      margin-right: 5px;
      font-weight: bolder;
    }
  }
}

.list {
  .list-header {
    margin-top: 20px;
    display: flex;

    > a {
      font-size: 20px;
      font-weight: bolder;
      flex: 0 0 16%;
      text-align: center;
    }

    .h5 {
      display: flex;
      flex-direction: column;
      flex: 0 0 20%;
      align-items: center;
      > h3 {
        text-align: center;
        color: #30A679;
      }
    }
  }
}

.voteDetail {
  > div {
    margin-top: 10px;
  }
}

.rp-check-list {

  .title {
    flex: 0 0 16%;
    max-width: 16%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .tips {
    flex: 0 0 16%;
    color: blue;
    text-align: center;
  }

  .id, .category, .time {
    flex: 0 0 16%;
    text-align: center;
    font-weight: bolder;
  }

  .vote {
    cursor: pointer;
    transition: color 0.3s;
    flex: 0 0 20%;
    text-align: center;
    color: #30A679;
  }

  .disable {
    cursor: default;
    color: #929292;
    pointer-events: none;
  }

  .agree-class {
    color: #19be6b;
  }

  .ing-class {
    color: #2d8cf0;
  }

  .back-class {
    color: red;
  }
}

.ant-list-item {
  justify-content: unset;
}
</style>
