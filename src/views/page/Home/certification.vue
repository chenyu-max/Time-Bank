<template>
  <div class="bg">
    <div class='certificate' style="background-color: rgb(248,244,244);">
      <br/>
      <div class="steps-container">
        <a-steps :current='current' class='steps-header'>
          <a-step v-for='item in steps' :key='item.title' :title='item.title'/>
        </a-steps>
      </div>
      <div class='certificate-list'>
        <template v-if='current === 1'>
          <authentication-information @next='handleNext'/>
        </template>
        <template v-else>
          <auditing/>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import authenticationInformation from './components/authentication-information.vue';
import auditing from './components/auditing.vue';

export default {
  name: 'Certification',
  components: {
    authenticationInformation,
    auditing,
  },
  created() {
    this.current = this.$store.state.certificated.certification;
  },
  data() {
    return {
      current: 1,
      steps: [
        {
          title: '进入认证',
        },
        {
          title: '填写认证信息',
        },
        {
          title: '审核认证信息',
        },
        {
          title: '认证结果',
        },
      ],
    };
  },
  methods: {
    handleNext() {
      this.current = 2;
      this.$store.dispatch('certificated/changeCertification', 2);
    },
  },
};
</script>

<style lang='less' scope>
* {
  padding: 0;
  margin: 0;
}

.certificate {
  background-color: #f8f4f4;
  min-height: 100%;

  .steps-header {
    width: 65vw;
    margin: 30px 70px 30px;
  }

  .certificate-list {
    overflow: hidden;
  }
}
</style>
