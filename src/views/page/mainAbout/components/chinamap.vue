<template>
  <div class='map-main'>
    <div id='map-container' style='height: inherit; width: inherit;'></div>
  </div>
</template>

<script>
import china from './china.json';

export default {
  name: 'ChinaMap',
  mounted() {
    this.echartsInit();
  },
  methods: {
    echartsInit() {
      this.$echarts.registerMap('china', china);
      this.$echarts.init(document.getElementById('map-container')).setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{b}<br/>{c} (日均活跃度)',
        },
        toolbox: {
          show: true,
          orient: 'vertical',
          top: 'center',
        },
        visualMap: {
          min: 800,
          max: 20000,
          text: ['最高活跃量', '最低活跃量'],
          realtime: false,
          calculable: true,
          inRange: {
            color: ['lightskyblue', 'yellow', 'orangered'],
          },
        },
        series: [
          {
            name: '应用使用人数分布',
            type: 'map',
            map: 'china',
            zoom: 1.2,
            label: { show: true },
            data: [
              { name: '新疆维吾尔自治区', value: 1599 },
              { name: '西藏自治区', value: 6450 },
              { name: '内蒙古自治区', value: 1543 },
              { name: '青海省', value: 3166 },
              { name: '四川省', value: 1887 },
              { name: '黑龙江省', value: 9803 },
              { name: '甘肃省', value: 1089 },
              { name: '云南省', value: 1567 },
              { name: '广西壮族自治区', value: 1821 },
              { name: '湖南省', value: 1359 },
              { name: '陕西省', value: 1622 },
              { name: '广东省', value: 2631 },
              { name: '吉林省', value: 12520 },
              { name: '河北省', value: 8418 },
              { name: '湖北省', value: 1022 },
              { name: '贵州省', value: 1552 },
              { name: '山东省', value: 1579 },
              { name: '江西省', value: 7590 },
              { name: '河南省', value: 13459 },
              { name: '辽宁省', value: 2807 },
              { name: '山西省', value: 10250 },
              { name: '安徽省', value: 12354 },
              { name: '福建省', value: 9208 },
              { name: '浙江省', value: 15938 },
              { name: '江苏省', value: 6379 },
              { name: '重庆市', value: 1249 },
              { name: '宁夏回族自治区', value: 9597 },
              { name: '海南省', value: 1101 },
              { name: '台湾省', value: 8394 },
              { name: '北京市', value: 8461 },
              { name: '天津市', value: 1888 },
              { name: '上海市', value: 1528 },
              { name: '香港', value: 1943 },
              { name: '澳门', value: 6670 },
              {
                name: '南海诸岛',
                label: { show: false },
                itemStyle: {
                  normal: {
                    opacity: 0,
                    label: { show: false },
                    borderWidth: '0',
                    borderColor: '#10242b',
                    areaStyle: { color: '#10242b' },
                  },
                  emphasis: { opacity: 0, label: { show: false } },
                },
              },
            ],
          },
        ],
      });
    },
  },
};
</script>

<style lang='less'>
.map-main{
  height: 77vh
}

.map-container {
  height: 100%;
  width: 100%;
}
</style>
