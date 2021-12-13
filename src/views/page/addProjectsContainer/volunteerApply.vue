<template>
  <div class="volunteer-apply-container">
    <div class="title">志愿者报名管理</div>
    <div class="top">
      <div>
        <div class="label">项目名称搜索</div>
        <a-input-search
          placeholder="输入项目名称"
          enter-button
          style="width: 30vw"
        />
      </div>
      <div>
        <div class="label">排序方式</div>
        <a-select default-value="default" style="width: 20vw">
          <a-select-option value="default"> 默认 </a-select-option>
          <a-select-option value="time"> 报名时间排序 </a-select-option>
          <a-select-option value="projectName"> 项目名称排序 </a-select-option>
        </a-select>
      </div>
    </div>
    <div class="list">
      <a-list
        class="demo-loadmore-list"
        item-layout="horizontal"
        :data-source="list"
        :pagination="pagination"
      >
        <div></div>
        <a-list-item slot="renderItem" slot-scope="item, index">
          <a slot="actions" @click="checkDetail(item)">详情</a>
          <a slot="actions" @click="volunteerApply(index, true)">同意</a>
          <a slot="actions" @click="volunteerApply(index, false)">拒绝</a>
          <a-list-item-meta :description="item.acceptTime">
            <a slot="title" style="font-weight: bolder">{{ item.username }}</a>
          </a-list-item-meta>
          <div class="level">等级：Lv{{ item.level }}</div>
          <div class="tips">报名参加的项目名称：</div>
          <div class="project-name">{{ item.projectName }}</div>
        </a-list-item>
      </a-list>
    </div>
    <a-modal
      v-model="visible"
      title="用户详情"
      :footer="null"
      @cancel="handleCancel"
    >
      <div class="modal-child">
        <span>用户名：</span>
        <span>{{ showDetailInfo.username }}</span>
      </div>
      <div>
        <span>申请的项目名：</span>
        <span>{{ showDetailInfo.projectName }}</span>
      </div>
      <div>
        <span>用户等级：</span>
        <span>{{ showDetailInfo.level }} LV</span>
      </div>
      <div>
        <span>报名时间：</span>
        <span>{{ showDetailInfo.acceptTime }}</span>
      </div>
      <div>
        <span>志愿服务时长：</span>
        <span>{{ showDetailInfo.userWorkTime }} h</span>
      </div>
      <div>
        <span>完成项目次数：</span>
        <span>{{ showDetailInfo.projectNum }} 次</span>
      </div>
    </a-modal>
  </div>
</template>

<script>
import api from '@/api/addProject';
import formatDate from '@/utils/formatDate';
import deepCopy from '../../../utils/deepCopy';

export default {
  name: 'volunteerApply',
  async created() {
    if (this.$store.state.volunteerList.list.length > 0) {
      this.list = deepCopy(this.$store.state.volunteerList.list);
    } else {
      await api
        .getVolunteerList({
          appkey: this.$store.state.user.userinfo.appkey,
        })
        .then((res) => {
          this.list = res.map((item) => {
            const acceptTime = formatDate(item.acceptTime);
            return {
              ...item,
              acceptTime,
            };
          });
          this.$store.dispatch('volunteerList/changeList', this.list);
        });
    }
  },
  data() {
    return {
      list: [],
      pagination: {
        pageSize: 10,
      },
      visible: false,
      showDetailInfo: {},
    };
  },
  methods: {
    checkDetail(item) {
      this.visible = true;
      this.showDetailInfo = item;
    },
    volunteerApply(index, result) {
      api
        .volunteerApply({
          // appkey: this.$store.state.user.userinfo.appkey,
          userId: this.list[index].appkey,
          userProject: this.list[index].projectId,
          result,
        })
        .then(() => {
          this.$message.success('申请处理成功');
          this.list.splice(index, 1);
          this.$store.dispatch('volunteerList/changeList', this.list);
        });
    },
    handleCancel() {
      this.visible = false;
    },
  },
};
</script>

<style scoped lang="less">
.title {
  width: 100%;
  height: 6vh;
  line-height: 6vh;
  font-size: 18px;
  font-weight: bolder;
}

.top {
  padding: 10px 0;
  display: flex;
  justify-content: flex-start;

  > div {
    &:last-child {
      margin-left: 10vw;
    }

    display: flex;
    height: 10vh;
    align-items: center;

    .label {
      margin-right: 10px;
      font-size: 16px;
    }
  }
}

.list {
  .level {
    flex: 0 0 20%;
  }

  .tips {
    flex: 0 0 15%;
  }

  .project-name {
    flex: 0 0 20%;
    color: #0020ff;
  }

  .ant-list-item-action {
    margin-right: 10px;
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
