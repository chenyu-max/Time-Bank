<template>
  <div class="change-city-container">
    <div>
      <div style="text-align: center; padding: 30px; font-size: 20px;">您目前所在地是</div>
      <div class="show-now">
        <div class="city-title" v-for="area in cityList" :key="area">{{ area }}</div>
      </div>
      <div class="title">请手动选择您的地区所在地</div>
      <change-city-selector @changeNowCity="handleChange"></change-city-selector>
    </div>
  </div>
</template>

<script>
import changeCitySelector from '@/components/changeCitySelector/index.vue';

export default {
  name: 'changeCity',
  components: {
    changeCitySelector,
  },
  computed: {
    cityList: {
      get() {
        return this.$store.state.nowCityList.nowCityList;
      },
    },
  },
  methods: {
    handleChange(nowCityList) {
      this.$store.dispatch('nowCityList/setNowCityList', nowCityList);
    },
  },
};
</script>

<style scoped lang="less">
.change-city-container {
  background-color: #eee;

  .title {
    margin-top: 50px;
    font-size: 32px;
    text-align: center;
  }

  .change-city-selector-container {
    margin-top: 50px;
    text-align: center;
  }

  .show-now {
    width: 100%;
    display: flex;
    justify-content: space-around;

    .city-title {
      font-size: 25px;
    }
  }
}
</style>
