<template>
  <div class="add-project-list-container">
    <div class="title">
      添加项目审核列表
    </div>
    <div class="top">
      <div class="left">
        <div>剩余审核个数</div>
        <div>{{ ingProject }}个</div>
      </div>
      <div class="right">
        <div>今日审核个数</div>
        <div>{{ overProject }}个</div>
      </div>
    </div>
    <div class="head">
      <div class="left-tips">项目列表</div>
      <div class="middle">
        <div class="tips">分类：</div>
        <a-button :class="{'active': activeName === 'all'}" @click="changeActive('all')">
          全部
        </a-button>
        <a-button :class="{'active': activeName === 'ing'}" @click="changeActive('ing')">
          待审核
        </a-button>
        <a-button :class="{'active': activeName === 'over'}" @click="changeActive('over')">
          已审核
        </a-button>
      </div>
      <div class="search">
        <div class="tips">查找：</div>
        <a-input-search placeholder="请输入" style="width: 200px"/>
      </div>
    </div>
    <div class="list">
      <a-list
          item-layout="horizontal"
          :data-source="showList"
          :pagination="pagination"
      >
        <a-list-item slot="renderItem" slot-scope="item">
          <a slot="actions"
             @click="checkDetail(item)"
             :class="{'gray': item.state === 'over'}">去审核</a>
          <a-list-item-meta
              :description="'简介：' + item.desc"
          >
            <a slot="title">{{ item.projectName }}</a>
          </a-list-item-meta>
          <div class="info">
            <div class="up">发起人</div>
            <div class="down">{{ item.owner }}</div>
          </div>
          <div class="info">
            <div class="up">项目需要人数</div>
            <div class="down">{{ item.needPeople }} 人</div>
          </div>
          <div class="info">
            <div class="up">审核人投票情况</div>
            <a-tooltip :title="'同意人数：' + item.agree + '否决人数：' + item.reject">
              <a-progress :show-info="false"
                          :percent="100 * ((item.agree + item.reject) / 21)"
                          :success-percent="100 * (item.agree / 21)"
              />
            </a-tooltip>
          </div>
          <div class="info">
            <div class="up">状态</div>
            <div :class="{'ing-class': item.state === 'ing','over-class': item.state === 'over'}">
              {{ item.state === 'over' ? '完成' : '待审核' }}
            </div>
          </div>
        </a-list-item>
      </a-list>
    </div>
  </div>
</template>

<script>
import api from '@/api/reviewerWork';

export default {
  name: 'addProjectList',
  async created() {
    await api.addProjectList({
      appkey: this.$store.state.user.userinfo.appkey,
    })
      .then((res) => {
        this.ingProject = res.ingProject;
        this.overProject = res.overProject;
        this.showList = res.list;
        this.list = res.list;
      });
  },
  data() {
    return {
      ingProject: 0,
      overProject: 0,
      activeName: 'all',
      list: [],
      showList: [],
      pagination: {
        pageSize: 10,
      },
    };
  },
  methods: {
    changeActive(activeName) {
      this.activeName = activeName;
      this.showList = this.list.filter((item) => {
        if (activeName === 'all') {
          return true;
        }
        return item.state === activeName;
      });
    },
    checkDetail(item) {
      this.$router.push({
        name: 'AddProjectReviewDetails',
        params: {
          projectId: item.projectId,
        },
      });
    },
  },
};
</script>

<style scoped lang="less">
.title {
  height: 20px;
  line-height: 20px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  width: 100%;
}

.top {
  margin: 20px 0;
  display: flex;
  justify-content: space-around;

  > div {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid #eee;
    padding: 5px 0;

    > div:first-child {
      font-weight: bold;
    }
  }
}

.head {
  display: flex;
  align-items: center;

  .left-tips {
    flex: 1 1 40%;
    font-size: 18px;
    font-weight: bold;
  }

  .middle {
    flex: 1 1 30%;
    display: flex;
    align-items: center;

    .tips {
      margin: 0 10px;
      font-size: 16px;
    }

    > button {
      margin: 0 5px;

      &.active {
        border-color: rgb(24, 144, 255);
        color: rgb(24, 144, 255);
      }
    }
  }

  .search {
    flex: 0 0 auto;
    margin-right: 2vw;
    display: flex;
    align-items: center;

    .tips {
      margin: 0 10px;
      font-size: 16px;
    }
  }
}

.list {

  .gray {
    color: #929292;
    cursor: default;
    pointer-events: none;
  }

  .ant-list-item {
    height: 12vh;
  }

  .ant-list-item-meta {
    flex: 0 0 30%;
    width: 30%;

    .ant-list-item-meta-content {
      width: inherit;
    }

    .ant-list-item-meta-description {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .info {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex: 0 0 15%;

    .up, .down {
      color: #929292;
    }

    .over-class {
      color: #19be6b;
    }

    .ing-class {
      color: #2d8cf0;
    }
  }
}
</style>
