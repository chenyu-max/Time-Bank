<template>
  <div class="personal-center-container">
    <div class="title">个人基本资料</div>
    <div class="content">
      <div class="left">
        <div class="info">
          <div>您的基本信息</div>
          <div>
            <div class="left-info">
              <div class="row">
                <div class="label">名称:</div>
                <div class="value">{{ userInfo.username }}</div>
              </div>
              <div class="row">
                <div class="label">用户ID:</div>
                <div class="value">{{ userInfo.appkey }}</div>
              </div>
              <div class="row">
                <div class="label">性别:</div>
                <div class="value">男</div>
              </div>
              <div class="row">
                <div class="label">绑定手机号:</div>
                <div class="value">{{ userInfo.phoneNumber }}</div>
              </div>
              <div class="row">
                <div class="label">政治面貌:</div>
                <div class="value">党员</div>
              </div>
            </div>
            <div class="right-info">
              <div class="row">
                <div class="label">职位:</div>
                <div class="value">学生</div>
              </div>
              <div class="row">
                <div class="label">剩余时间币:</div>
                <div class="value">{{ userInfo.userMoney }}</div>
              </div>
              <div class="row">
                <div class="label">志愿服务时长:</div>
                <div class="value">{{ userInfo.userWorkTime }}</div>
              </div>
              <div class="row">
                <div class="label">绑定邮箱:</div>
                <div class="value">24******08@qq.com</div>
              </div>
              <div class="row">
                <div class="label">所在地:</div>
                <div class="value">杭州市</div>
              </div>
            </div>
          </div>
        </div>
        <div class="save-level">
          <div class="top">您的安全服务</div>
          <div class="level">
            <div>安全等级:</div>
            <div>中</div>
            <div>
              <a-progress
                :stroke-color="{ '0%': '#108ee9', '100%': '#87d068' }"
                :percent="50"
              />
            </div>
          </div>
          <div class="level-info">
            <div class="left-content" style="color: #30a679">
              <a-icon type="check-circle" />
              <span>已完成</span>
            </div>
            <div class="middle-content">邮箱绑定</div>
            <div class="right-content">
              用于提升账号的安全性和信任级别、找回密码
            </div>
            <div class="last">去修改</div>
          </div>
          <div class="level-info">
            <div class="left-content" style="color: #ffc238">
              <a-icon type="exclamation-circle" />
              <span>未完成</span>
            </div>
            <div class="middle-content">身份认证</div>
            <div class="right-content">用于提升账号的安全性和信任级别。</div>
            <div class="last">去完成</div>
          </div>
        </div>
        <div class="serve">
          <div class="serve-title">现在拥有的服务</div>
          <div class="serve-row">
            <div class="serve-left">
              <a-icon type="eye" />
              用户
            </div>
            <div class="serve-right">
              <div>状态：</div>
              <div style="color: #31a5fc">已开通</div>
            </div>
          </div>
          <div class="serve-row">
            <div class="serve-left">
              <a-icon type="eye" />
              发起者
            </div>
            <div class="serve-right">
              <div>状态：</div>
              <div style="color: #31a5fc">已开通</div>
            </div>
          </div>
          <div class="serve-row">
            <div class="serve-left">
              <a-icon
                type="eye-invisible"
                v-if="userInfo.role !== 'Reviewer'"
              />
              <a-icon type="eye" v-else />
              审核人
            </div>
            <div class="serve-right">
              <div>状态：</div>
              <div style="color: #ff5a5a" v-if="userInfo.role !== 'Reviewer'">
                未开通
              </div>
              <div style="color: #31a5fc" v-else>已开通</div>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="right-title">会员中心</div>
        <div class="middle">
          <div class="avatar">
            <a-avatar
              :size="64"
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            />
          </div>
          <div class="middle-right">
            <div class="name">{{ userInfo.username }}</div>
            <div class="money">
              <a-icon type="money-collect" />
              {{ userInfo.userMoney }}
            </div>
          </div>
        </div>
        <div class="right-level">
          <div>等级</div>
          <div>LV:5</div>
          <div>
            <a-progress :percent="30" :showInfo="false" />
          </div>
        </div>
        <div class="authentication">
          <div>
            <a-icon type="idcard" />
          </div>
          <div>官方认证：</div>
          <div>尚未认证</div>
          <div>
            <a-button @click="goToCertificate">去认证</a-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api/user';

export default {
  name: 'personalCenter',
  created() {
    api
      .getUserInfo({
        appkey: this.$store.state.user.userinfo.appkey,
      })
      .then((res) => {
        this.userInfo = res;
        this.$store.dispatch('user/setUserMoney', res.userMoney);
      });
  },
  data() {
    return {
      userInfo: null,
    };
  },
  methods: {
    goToCertificate() {
      this.$router.push({
        name: 'Certificate',
      });
    },
  },
};
</script>

<style scoped lang="less">
.title {
  width: 100%;
  height: 5vh;
  line-height: 4vh;
  font-size: 20px;
  border-bottom: 1px #eee double;
  margin-bottom: 10px;
}

.content {
  display: flex;

  .left {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    padding: 0 10px;

    .info {
      > div:first-child {
        font-size: 18px;
        font-weight: bolder;
        margin: 10px 0;
      }

      > div:last-child {
        display: flex;
        flex: 1 1 auto;
        justify-content: space-around;
        padding: 5px 0;
        border-bottom: 3px solid #eee;

        > div {
          width: 50%;
          padding: 0 4vw;

          &:first-child {
            border-right: 3px solid #eee;
          }
        }
      }

      .row {
        display: flex;
        height: 25px;
        line-height: 25px;

        .label {
          color: #31a5fc;
          font-weight: bolder;
          flex: 1 1 auto;
        }

        .value {
          color: #4a4a4a;
          flex: 0 0 auto;
        }
      }
    }

    .save-level {
      .top {
        font-size: 18px;
        font-weight: bolder;
        margin: 10px 0;
      }

      .level {
        display: flex;
        margin-top: 25px;

        > div:first-child {
          flex: 0 0 20%;
          color: #4a4a4a;
        }

        > div:nth-child(2) {
          flex: 0 0 20%;
          color: #ffc238;
          font-weight: bolder;
        }

        > div:last-child {
          flex: 1 1 auto;
          margin-right: 10vw;
        }
      }

      .level-info {
        display: flex;
        height: 35px;
        line-height: 35px;
        margin: 15px 0;

        .right-content {
          flex: 1 1 auto;
          color: #bbb;
        }

        .left-content {
          flex: 0 0 20%;
        }

        .middle-content {
          flex: 0 0 20%;
        }

        .last {
          flex: 0 0 10%;
          cursor: pointer;
          color: #30a679;
        }
      }
    }

    .serve {
      .serve-title {
        font-size: 18px;
        font-weight: bolder;
        margin: 10px 0;
      }

      .serve-row {
        height: 30px;
        line-height: 30px;
        display: flex;

        .serve-left {
          flex: 1 1 20%;
          color: #4a4a4a;
        }

        .serve-right {
          flex: 0 0 40%;
          display: flex;
        }
      }
    }
  }

  .right {
    flex: 0 0 25%;

    .right-title {
      color: #30a679;
      font-size: 20px;
      font-weight: bolder;
      margin: 5px 0;
    }

    .middle {
      display: flex;
      align-items: center;

      .avatar {
        flex: 1 1 40%;
      }

      .middle-right {
        flex: 0 0 auto;
        margin-right: 40px;
        font-size: 18px;

        .name {
          margin-bottom: 15px;
        }
      }
    }

    .right-level {
      display: flex;
      margin: 30px 0;

      > div:first-child {
        flex: 0 0 20%;
      }

      > div:nth-child(2) {
        flex: 0 0 20%;
      }

      > div:last-child {
        flex: 1 1 auto;
      }
    }

    .authentication {
      display: flex;
      height: 40px;
      line-height: 40px;

      > div:first-child {
        margin-right: 3px;
        flex: 0 0 10%;
      }

      > div:nth-child(2) {
        flex: 1 1 auto;
      }

      > div:nth-child(3) {
        flex: 0 0 30%;
        color: #ff5a5a;
      }

      > div:last-child {
        flex: 0 0 auto;
      }
    }
  }
}
</style>
