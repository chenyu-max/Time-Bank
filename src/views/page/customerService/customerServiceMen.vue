<template>
  <div class="customer-service-men-container">
    <div class="chat-box">
      <div class="box-header">
        <div>
          <div class="header-title">人工客服</div>
          <div>xxx时间银行</div>
        </div>
      </div>
      <div class="box-main" ref="boxMain">
        <msg-bubble v-for="(msg,i) in showMsgList"
                    :msg="msg"
                    :key="i"/>
      </div>
      <div class="box-input-container">
        <div class="top">
          <a-icon type="smile" class="icon"/>
          <a-icon type="folder-open" class="icon"/>
        </div>
        <div class="input">
          <a-textarea class="input-area"
                      @keydown.native="keyDown"
                      placeholder="请输入您想要询问的问题"
                      v-model="myMsg"/>
          <div class="tips">
            <span>shift + Enter 换行</span>
            <span>Enter 发送</span>
            <a-button class="send-btn" @click="sendMsg">发送</a-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api/customerService';
import deepCopy from '../../../utils/deepCopy';
import formatDate from '../../../utils/formatDate';
import msgBubble from './components/msgBubble.vue';

export default {
  name: 'customerServiceMen',
  components: {
    msgBubble,
  },
  beforeDestroy() {
    const timestamp = new Date().getTime();
    const endTime = formatDate(timestamp, true);
    this.showMsgList.push({
      type: 'end',
      text: `上述对话结束于 ${endTime}`,
    });
    if (this.isChat) {
      this.$store.dispatch('customerService/changeMenHistory', this.showMsgList);
    }
  },
  async created() {
    this.showMsgList = deepCopy(this.$store.state.customerService.menHistory);
    const timestamp = new Date().getTime();
    const startTime = formatDate(timestamp, true);
    this.showMsgList.push({
      type: 'time',
      text: `对话开始于 ${startTime}`,
    });
    let name = '';
    await api.menServiceInit({
      appkey: this.$store.state.user.userinfo.appkey,
    }).then((res) => {
      name = res.name;
    });
    this.showMsgList.push({
      type: 'left',
      text: `您好，我是xxx时间银行的人工客服${name}，请问我有什么可以帮到您的吗？`,
    });
  },
  data() {
    return {
      myMsg: '',
      startTime: '',
      showMsgList: [],
      isChat: false, // 本次对话是否进行
    };
  },
  watch: {
    showMsgList: {
      handler() {
        const ele = this.$refs.boxMain;
        // 设置滚动条到最底部
        setTimeout(() => {
          ele.scrollTop = ele.scrollHeight - ele.clientHeight;
        }, 300);
      },
      deep: true,
    },
  },
  methods: {
    keyDown(e) {
      if (!e.shiftKey && e.key === 'Enter') {
        e.preventDefault(); // 取消事件的默认动作 换行
        if (this.myMsg !== '') {
          this.sendMsg();
        }
      }
    },
    sendMsg() {
      // 调用 api
      this.showMsgList.push({
        type: 'right',
        text: this.myMsg,
      });
      this.isChat = true;
      api.sendMsgToMen({
        appkey: this.$store.state.user.userinfo.appkey,
        text: this.myMsg,
      })
        .then((res) => {
          for (let i = 0; i < res.length; i += 1) {
            this.showMsgList.push({
              type: 'left',
              text: res[i],
            });
          }
        });
      this.myMsg = '';
    },
  },
};
</script>

<style scoped lang="less">
.customer-service-men-container {
  position: relative;

  .chat-box {
    position: absolute;
    margin-top: -5px;
    width: 80%;
    height: 90%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 4px -4px 21px rgba(0, 0, 0, 63%);
    display: flex;
    flex-direction: column;
  }

  .box-header {
    flex: 0 0 10%;
    background-color: #001529;
    color: #fff;
    display: flex;
    justify-content: center;
    text-align: center;
    > div {
      div:last-child {
        margin-bottom: 5px;
      }
    }

    .header-title {
      padding: 3px 0;
      font-size: 16px;
      font-weight: bolder;
    }
  }

  .box-main {
    overflow: auto;
    display: flex;
    flex-direction: column;
    padding: 20px 15px;
    flex: 1 1 auto;
    scroll-behavior: smooth;
  }

  .box-main::-webkit-scrollbar { /*隐藏滚轮*/
    display: none;
  }

  .box-input-container {
    flex: 0 0 125px;
    //background-color: #ff0;

    .top {
      background-color: #eee;
      padding: 0 5px;
      height: 25px;
      line-height: 25px;
      //border: 1px solid #eea;

      .icon {
        margin: 0 5px;
        cursor: pointer;
      }
    }

    .input {
      .input-area {
        resize: none;
        height: 75px !important;
        outline: none;
        border: none;

        &:focus {
          outline: none;
          box-shadow: 0 0 0;
        }
      }

      .tips {
        display: flex;
        justify-content: flex-end;
        height: 25px;
        line-height: 25px;
        margin-bottom: 5px;

        span {
          margin: 0 10px;
        }

        .send-btn {
          height: 25px;
          margin-right: 10px;
          outline: none;
        }
      }
    }
  }
}
</style>
