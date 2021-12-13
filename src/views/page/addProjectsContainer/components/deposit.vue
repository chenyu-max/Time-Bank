<template>
  <div class="deposit-container">
    <div class="title">
      <div>质押金额规则</div>
      <div>
        质押金额 = 需要服务者的人数 × （每个用户需要交付的时间币 + 1）
      </div>
      <div>
        质押金额成功后，该公益项目会提交上传至审核人处，审核人会在一个工作日内对该项目进行审核
      </div>
      <div>
        审核成功则项目发布，若审核失败，则会给以失败理由（在 “我发起的” 中可以查看），并且返还所质押的时间币
      </div>
      <div>
        您需要质押的时间币是：
        <span style="color: #f40">{{ value }}</span>
      </div>
    </div>
    <div class="balance">
      <div>您账户目前的时间币余额是</div>
      <div style="color: #f40; font-size: 24px">{{ balance }}</div>
    </div>
    <div class="pay">
      <a-button type="primary" @click="previous">返回上一步</a-button>
      <a-button type="primary" @click="payMoney">确认质押金额</a-button>
    </div>
  </div>
</template>

<script>
import api from '@/api/addProject';
import userApi from '@/api/user';
import deepCopy from '../../../../utils/deepCopy';

export default {
  name: 'deposit',
  async created() {
    this.projectInfo = deepCopy(this.$store.state.addProject.nowInfo);
    await userApi
      .getUserInfo({
        appkey: this.$store.state.user.userinfo.appkey,
      })
      .then((res) => {
        this.balance = res.userMoney;
      });
  },
  data() {
    return {
      projectInfo: {},
      balance: 0,
    };
  },
  computed: {
    value: {
      get() {
        return (+this.projectInfo.needPeople) * (+this.projectInfo.value + 1);
      },
    },
  },
  methods: {
    previous() {
      this.$emit('previous');
    },
    async payMoney() {
      // 调用接口
      const params = {
        appkey: this.$store.state.user.userinfo.appkey,
        ...this.projectInfo,
        // payMoney: this.value,
      };
      console.log(params);
      await api.addNewProject(params)
        .then(() => {
          this.$message.success('添加项目成功，请等待项目审核', 1.5);
        })
        .catch((err) => {
          this.$message.error(err);
        });
      this.$emit('pay');
      this.$store.dispatch('addProject/deleteInfo');
    },
  },
};
</script>

<style scoped lang="less">
.title,
.balance {
  > div {
    &:first-child {
      font-size: 18px;
    }

    font-size: 16px;
    margin-bottom: 20px;
  }
}

.pay {
  button:first-child {
    margin-right: 100px;
  }
}
</style>
