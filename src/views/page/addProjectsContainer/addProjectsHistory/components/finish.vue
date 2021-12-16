<template>
  <div class="finish-container">
    <div class="title">
      <div class="name">{{ project.pname }}</div>
      <div class="owner">联系人: {{ project.contactPersonName }}</div>
      <div class="category">分类: {{ project.category }}</div>
      <div class="people-num">
        最终人数: {{ project.nowPeople + '/' + project.needPeople }}
      </div>
    </div>
    <div class="info">
      <div class="time-money">时间币: {{ project.currency }}</div>
      <!--      <div class="serve-time">服务时间: {{ project.workTime }}h</div>-->
      <div class="effective-time">
        有效时间:&nbsp; {{ formatDate(project.startTime, true) }} &nbsp;到&nbsp;
        {{ formatDate(project.endTime, true) }}
      </div>
      <div class="create-time">
        发布日期: {{ formatDate(project.createTime, true) }}
      </div>
      <div class="check-details" @click="checkDetail">查看详情</div>
      <div class="declare" @click="declare">项目申报</div>
    </div>
    <a-modal
      title="项目申报"
      :visible="visible"
      :confirm-loading="confirmLoading"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <a-list
        item-layout="horizontal"
        :data-source="userList"
        class="list-class"
      >
        <a-list-item
          slot="renderItem"
          slot-scope="item"
          class="list-item-class"
        >
          <a-list-item-meta>
            <div slot="title">{{ item.username }}</div>
            <a-avatar slot="avatar" :src="item.userAvatar" />
          </a-list-item-meta>
          <div class="bottom-class">
            <div class="user-comment">{{ item.userComment }}</div>
            <div>用户评分 {{ item.star }}星</div>
            <div>用户完成时间: {{ formatDate(item.overTime) }}</div>
            <div>用户工作时间: {{ project.time }}h</div>
          </div>
        </a-list-item>
      </a-list>
      <div class="remark">
        <span>备注</span>
        <a-input type="textarea" v-model="remarkText" />
      </div>
    </a-modal>
  </div>
</template>

<script>
import api from '@/api/addProject';
import formatDate from '@/utils/formatDate';

export default {
  name: 'doing',
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  created() {
    this.userList = this.project.userList;
  },
  data() {
    return {
      visible: false,
      confirmLoading: false,
      userList: [],
      remarkText: '',
    };
  },
  methods: {
    formatDate,
    checkDetail() {
      this.$emit('checkDetail', this.project);
    },
    declare() {
      if (
        this.$store.state.myAddProject.declareList.indexOf(
          this.project.projectId,
        ) === -1
      ) {
        this.visible = true;
      } else {
        this.$message.warn('该项目已申报，无需重复申报');
      }
    },
    handleOk() {
      this.confirmLoading = true;
      api
        .declareProject({
          appkey: this.$store.state.user.userinfo.appkey,
          projectId: this.project.projectId,
          userList: this.userList,
          remarkText: this.remarkText,
        })
        .then(() => {
          setTimeout(() => {
            this.visible = false;
            this.confirmLoading = false;
          }, 1000);
          this.$message.success('项目已申报成功');
          this.$store.dispatch(
            'myAddProject/changeDeclareList',
            this.project.projectId,
          );
        })
        .catch((err) => {
          this.$message.error(err);
        });
    },
    handleCancel() {
      this.visible = false;
    },
  },
};
</script>

<style scoped lang="less">
.finish-container {
  border-bottom: 1px solid #eeeeee;
  cursor: default;

  > div {
    display: flex;
    padding: 10px 0;
  }
}

.title {
  .name {
    flex: 0 0 18%;
    font-size: 18px;
    font-weight: bold;
  }

  .owner {
    flex: 1 1 auto;
    font-size: 16px;
    font-weight: bold;
  }

  .category {
    flex: 0 0 25%;
    font-size: 16px;
    font-weight: bold;
  }

  .people-num {
    flex: 0 0 20%;
    font-size: 16px;
    font-weight: bold;
  }
}

.info {
  .time-money {
    flex: 0 0 18%;
    font-size: 14px;
  }

  .serve-time {
    flex: 0 0 15%;
    font-size: 14px;
  }

  .effective-time {
    flex: 1 1 auto;
    font-size: 14px;
  }

  .create-time {
    flex: 0 0 25%;
    font-size: 14px;
  }

  .check-details {
    flex: 0 0 10%;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    color: #30a679;
  }

  .declare {
    flex: 0 0 10%;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    color: #30a679;
  }
}

.list-item-class {
  flex-direction: column;
  align-items: flex-start;

  .bottom-class {
    width: 100%;

    > div:first-child {
      margin: 10px 0;
      color: #424242;
      text-indent: 2em;
    }

    > div {
      margin: 5px 0;
    }
  }
}

.remark {
  span {
    font-size: 18px;
    font-weight: bolder;
  }

  textarea {
    margin-top: 10px;
    resize: none;
    height: 6em !important;
  }
}
</style>
