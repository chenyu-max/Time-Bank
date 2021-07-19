<template>
  <div class="change-city-selector-container">
    <a-cascader
        :options="cityList"
        :display-render="displayRender"
        :defaultValue="defaultValue"
        expand-trigger="click"
        placeholder="Please select"
        @change="handleChange"
        size="large"
    />
  </div>
</template>

<script>
import city from '@/api/city';
import rewriteCityList from '../../utils/rewriteCityList';

export default {
  name: 'index.vue',
  data() {
    const displayRender = ({ labels }) => {
      if (labels.length) {
        let str = '';
        labels.forEach((item) => {
          str = `${str + item} `;
        });
        return str;
      }
      return labels[labels.length - 1];
    };
    const defaultValue = this.$store.state.nowCityList.nowCityList;
    return {
      cityList: [],
      displayRender,
      defaultValue,
    };
  },
  created() {
    city.getCityList({ appkey: this.$store.state.user.userinfo.appkey })
      .then((res) => {
        this.cityList = rewriteCityList(res);
      });
  },
  methods: {
    handleChange(value) {
      this.$emit('changeNowCity', value);
    },
  },
};
</script>

<style scoped>
::-webkit-scrollbar { /*隐藏滚轮*/
  display: none;
}
</style>
