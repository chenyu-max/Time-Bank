<template>
  <div class="project-detail-container">
    <h1 class="project-title">
      {{ project.name }}
    </h1>
    <div class="project-info-1">
      <div class="owner">
        <span>项目发起人: &nbsp;</span>
        {{ project.ownerName }}
      </div>
      <div>|</div>
      <div class="create-time">
        <span>发布时间: &nbsp;</span>
        {{ project.createTime }}
      </div>
      <div>|</div>
      <div class="project-state">
        <span>项目状态: &nbsp;</span>
        {{ project.state }}
      </div>
    </div>
    <div class="project-info-2">
      <div class="project-need-people">
        <span>项目所需人数: &nbsp;</span>
        {{ project.needPeople }}
        人
      </div>
      <div>|</div>
      <div class="everyone-value">
        <span>每人时间币: &nbsp;</span>
        {{ project.value }}
      </div>
      <div>|</div>
      <div class="time">
        <span>每人工作时间: &nbsp;</span>
        {{ project.time }}
        h
      </div>
      <div>|</div>
      <div class="total-value">
        <span>总支付时间币: &nbsp;</span>
        {{ (project.value * project.needPeople).toFixed(2) }}
      </div>
    </div>
    <div class="project-description">
      {{ project.description }}
    </div>
    <div class="project-info-3">
      <div class="work-address">
        <div class="title">服务地点:</div>
        {{ project.address }}
      </div>
      <div class="work-time">
        <div class="title">服务时间:</div>
        {{ project.workTime }}
      </div>
      <div class="contact-person-name">
        <div class="title">联系人:</div>
        {{ contactPerson.name }}
      </div>
      <div class="contact-person-phone">
        <div class="title">联系电话:</div>
        {{ contactPerson.phone }}
      </div>
      <div class="effective-time">
        <div class="title">有效时间:</div>
        {{ project.startTime }}
        &nbsp;&nbsp; 到 &nbsp;&nbsp;
        {{ project.endTime }}
      </div>
      <div v-if="isShow" style="margin: 10px 0;">
        <a-button type="primary" @click="acceptProject">确认承接该任务</a-button>
      </div>
    </div>
    <div class="user-info-list">
      <a-list
          class="comment-list"
          :header="`${commentsList.length}条 评论`"
          item-layout="horizontal"
          :data-source="commentsList">
        <template #renderItem="item">
          <a-list-item>
            <a-comment :author="item.authorDis" :avatar="item.avatar">
              <template #content>
                <p>{{ item.userComment }}</p>
              </template>
              <template #datetime>
                <a-tooltip :title="item.overTime">
                  <span>评论时间： {{ item.overTime }}</span>
                </a-tooltip>
              </template>
            </a-comment>
            <div class="comment-info">
              <div class="accept-time">
                <div class="title">接受任务时间:</div>
                {{ item.acceptTime }}
              </div>
              <div class="user-state">
                <div class="title">完成状态:</div>
                {{ item.userState }}
              </div>
              <div class="user-star">
                <div class="title">用户评分:</div>
                <a-rate :value="item.star" disabled style="line-height: 16px;"/>
              </div>
            </div>
          </a-list-item>
        </template>
      </a-list>
    </div>
  </div>
</template>

<script>
import api from '@/api/projects';

export default {
  name: 'projectDetail',
  async created() {
    await api.getProjectById({
      appkey: this.$store.state.user.userinfo.appkey,
      projectId: this.$route.params.projectId,
    })
      .then((res) => {
        this.project = res;
        const contactName = res.contactPerson.sex === 'male' ? `${res.contactPerson.name[0]}先生` : `${res.contactPerson.name[0]}女士`;
        this.contactPerson = {
          name: contactName,
          phone: res.contactPerson.phone,
        };
        this.commentsList = res.userList.map((item) => {
          const temp = item;
          const authorDis = `${temp.userName}`;
          return {
            authorDis,
            avatar: temp.userAvatar,
            overTime: temp.overTime,
            userComment: temp.userComment,
            acceptTime: temp.acceptTime,
            userState: temp.userState,
            star: temp.star,
          };
        });
      });
  },
  data() {
    return {
      project: {},
      contactPerson: {},
      commentsList: [],
    };
  },
  computed: {
    isShow: {
      get() {
        return this.$route.params.couldAccept;
      },
    },
  },
  methods: {
    acceptProject() {
      api.acceptProject({
        appkey: this.$store.state.user.userinfo.appkey,
        projectId: this.project.projectId,
      }).then(() => {
        this.$message.success('报名成功，请等待通知');
      }).catch((err) => {
        this.$message.error(err);
      });
    },
  },
};
</script>

<style scoped lang="less">
.project-detail-container {
  .project-title {
    font-size: 30px;
    line-height: 40px;
    height: 40px;
    color: #333;
  }

  .project-info-1,
  .project-info-2 {
    display: flex;
    height: 40px;
    line-height: 40px;

    div:not([class]) {
      padding: 0 15px;
    }

    div[class] {
      span {
        font-weight: 600;
        font-size: 15px;
      }
    }
  }

  .project-description {
    margin-top: 20px;
    line-height: 20px;
    text-indent: 2em;
  }

  .project-info-3 {
    margin-top: 20px;

    > div {
      display: flex;
      line-height: 30px;
      height: 30px;
    }

    .title {
      width: 7%;
      font-weight: 600;
    }
  }
}

.ant-list-item {
  flex-direction: column;
  align-items: flex-start;
}

.comment-info {
  width: 100%;
  height: 20px;
  display: flex;

  > div {
    display: flex;

    > div {
      display: flex;
    }
  }

  .title {
    margin-right: 10px;
  }

  .accept-time {
    flex: 0 0 30%;
  }

  .user-state {
    flex: 0 0 30%;
  }
}
</style>
