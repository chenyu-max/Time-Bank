<template>
  <div class="add-projects-container">
    <a-steps :current="current" class="steps-header">
      <a-step v-for="item in steps" :key="item.title" :title="item.title"/>
    </a-steps>
    <div class="steps-content">
      <template v-if="current === 0">
        <fill-information @next="handleNext"/>
      </template>
      <template v-else>
        <deposit :projectInfo="projectInfo" @previous="handlePrevious" @pay="handlePay"/>
      </template>
    </div>
  </div>
</template>

<script>
import deposit from './components/deposit.vue';
import fillInformation from './components/fillInformation.vue';

export default {
  name: 'addProjects',
  components: {
    deposit,
    fillInformation,
  },
  data() {
    return {
      current: 0,
      steps: [
        {
          title: '填写信息',
          content: 'First-content',
        },
        {
          title: '质押金额',
          content: 'Second-content',
        },
      ],
      projectInfo: null,
    };
  },
  methods: {
    handleNext(projectInfo) {
      this.current = 1;
      this.projectInfo = projectInfo;
      this.$store.dispatch('addProject/changeNowInfo', this.projectInfo);
    },
    handlePay() {
      this.current = 0;
    },
    handlePrevious() {
      this.current = 0;
    },
  },
};
</script>

<style scoped lang="less">
.steps-header {
  width: 50%;
  margin: 20px auto;
}

.steps-content {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  height: 85%;
  text-align: center;
  padding: 25px 0;
  overflow: auto;

  &::-webkit-scrollbar { /*隐藏滚轮*/
    display: none;
  }

}
</style>
