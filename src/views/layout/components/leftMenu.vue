<template>
  <div class="left-menu-container">
    <a-menu
        mode="inline"
        theme="dark"
        :inline-collapsed="collapsed"
    >
      <a-sub-menu key="publicWelfareContainer">
        <span slot="title">
            <a-icon type='heart'/>
            <span>公益项目</span>
        </span>
        <a-menu-item key="publicWelfare">
          <a-icon type="heart"></a-icon>
          <span @click="changeRouter('NowPublicWelfare')">
            公益项目
          </span>
        </a-menu-item>
        <a-menu-item key="publicWelfareHistory" @click="changeRouter('PublicWelfareHistory')">
          <a-icon type="container"></a-icon>
          <span>
            我的公益项目
          </span>
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="addProjectsContainer">
          <span slot="title">
            <a-icon type='form'/>
            <span>发起项目</span>
        </span>
        <a-menu-item key="addProjects" @click="changeRouter('AddProjects')">
          <a-icon type="form"></a-icon>
          <span>发起项目</span>
        </a-menu-item>
        <a-menu-item key="addProjectsHistory" @click="changeRouter('AddProjectsHistory')">
          <a-icon type="hdd"></a-icon>
          <span>我发起的</span>
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="Reviewer">
        <span slot="title">
            <a-icon type='user'/>
            <span>审核人</span>
        </span>
        <a-menu-item key="applyReviewer" @click="changeRouter('ApplyReviewer')">
          <a-icon type="solution"></a-icon>
          <span>申请成为审核人</span>
        </a-menu-item>
        <a-menu-item key="votingReviewer" @click="changeRouter('VotingReviewer')">
          <a-icon type="carry-out"></a-icon>
          <span>投票选举审核人</span>
        </a-menu-item>
        <a-menu-item key="publicityReviewer" @click="changeRouter('PublicityReviewer')">
          <a-icon type="team"></a-icon>
          <span>审核人公示</span>
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="report">
        <span slot="title">
            <a-icon type='exclamation'/>
            <span>举报</span>
        </span>
        <a-menu-item key="reportProjects" @click="changeRouter('ReportProjects')">
          <a-icon type="file-exclamation"></a-icon>
          <span>举报项目</span>
        </a-menu-item>
        <a-menu-item key="reportOriginator" @click="changeRouter('ReportOriginator')">
          <a-icon type="dislike"></a-icon>
          <span>举报发起者</span>
        </a-menu-item>
        <a-menu-item key="reportReviewer" @click="changeRouter('ReportReviewer')">
          <a-icon type="bulb"></a-icon>
          <span>举报审核人</span>
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="customerService">
        <span slot="title">
            <a-icon type='message'/>
            <span>客服咨询</span>
        </span>
        <a-menu-item key="customerServiceMen" @click="changeRouter('CustomerServiceMen')">
          <a-icon type="desktop"></a-icon>
          <span>人工客服</span>
        </a-menu-item>
        <a-menu-item key="customerServiceAI" @click="changeRouter('CustomerServiceAI')">
          <a-icon type="robot"></a-icon>
          <span>智能AI客服</span>
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>

export default {
  name: 'leftMenu',
  computed: {
    collapsed: {
      get() {
        return this.$store.state.leftMenuCollapsed.collapsed;
      },
    },
  },
  methods: {
    changeRouter(name) {
      this.$router.replace({
        name,
      });
    },
  },
};
</script>

<style scoped lang="less">

.span {
  .router-link-active {
    color: inherit;
  }
}

.ant-menu {
  height: 100%;
  overflow: auto;
}

::-webkit-scrollbar { /*隐藏滚轮*/
  display: none;
}
</style>
