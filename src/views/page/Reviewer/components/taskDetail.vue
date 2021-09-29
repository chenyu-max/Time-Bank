<template>
  <div class="task-detail-container">
    <div id="taskDetail" style="height: 300px"></div>
  </div>
</template>

<script>
export default {
  name: 'taskDetail',
  props: {
    detailInfo: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.echartsInit();
  },
  methods: {
    echartsInit() {
      this.$echarts.init(document.getElementById('taskDetail'))
        .setOption({
          title: {
            text: '今日任务完成量',
          },
          series: [
            {
              type: 'pie',
              data: [
                {
                  value: this.detailInfo.reportTasks,
                  name: '举报任务处理数量',
                },
                {
                  value: this.detailInfo.reviewAddTasks,
                  name: '项目添加审核',
                },
                {
                  value: this.detailInfo.reviewDeclareTasks,
                  name: '项目申报审核',
                },
              ],
              radius: '50%',
              label: {
                normal: {
                  formatter: '{b}:{c}个',
                },
              },
            },
          ],
        });
    },
  },
};
</script>

<style scoped>

</style>
