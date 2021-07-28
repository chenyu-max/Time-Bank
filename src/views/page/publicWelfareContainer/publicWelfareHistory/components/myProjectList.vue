<template>
  <div class="my-project-list">
  </div>
</template>

<script>
export default {
  name: 'myProjectList',
  props: {
    projectList: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped lang="less">

</style>
