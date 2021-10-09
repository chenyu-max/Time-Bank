<template>
  <div class="map-module-container">
    <div class="mapper">
      <div class="mapper-title">
        <h1 style="font-weight: bolder;">时间银行使用分布</h1>
        <span style="color: #abaea4;">银行使用数据真实有效，实时更新</span>
      </div>
      <ChinaMap />
    </div>
  </div>
</template>

<script>
import ChinaMap from './components/chinamap.vue';

export default {
  name: 'mapModule',
  components: {
    ChinaMap,
  },
};
</script>

<style scoped lang= "less">
.mapper{
  background-color: rgb(190, 228, 102);
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  .mapper-title{
    height: 9vh;
    justify-content: center;
    font-weight: bolder;
  }
}
</style>
