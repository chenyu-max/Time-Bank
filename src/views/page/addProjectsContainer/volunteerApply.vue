<template>
  <div class="volunteer-apply-container">
    <div class="title">
      志愿者报名管理
    </div>
    <div class="top">
      <div>
        <div class="label">项目名称搜索</div>
        <a-input-search placeholder="输入项目名称" enter-button style="width: 30vw"/>
      </div>
      <div>
        <div class="label">排序方式</div>
        <a-select default-value="default" style="width: 20vw">
          <a-select-option value="default">
            默认
          </a-select-option>
          <a-select-option value="time">
            报名时间排序
          </a-select-option>
          <a-select-option value="projectName">
            项目名称排序
          </a-select-option>
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
        <div
        >
        </div>
        <a-list-item slot="renderItem" slot-scope="item">
          <a slot="actions">详情</a>
          <a slot="actions">同意</a>
          <a slot="actions">拒绝</a>
          <a-list-item-meta
              :description="item.time"
          >
            <a slot="title" style="font-weight: bolder;">{{ item.userName }}</a>
          </a-list-item-meta>
          <div class="level">等级：Lv{{ item.level }}</div>
          <div class="tips">报名参加的项目名称：</div>
          <div class="project-name">{{ item.projectName }}</div>
        </a-list-item>
      </a-list>
    </div>
  </div>
</template>

<script>
import api from '@/api/addProject';

export default {
  name: 'volunteerApply',
  async created() {
    await api.getVolunteerList({
      appkey: this.$store.state.user.userinfo.appkey,
    })
      .then((res) => {
        this.list = res;
      });
  },
  data() {
    return {
      list: [],
      pagination: {
        pageSize: 10,
      },
    };
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

</style>
