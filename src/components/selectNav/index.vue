<template>
  <div class="select-nav-container">
    <div>
      {{ title }}
    </div>
    <div v-for="item in list"
         :class="{'active': item.isSelected}"
         @click="changeSelect(item)"
         :key="item.name">
      {{ item.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'selectNav',
  props: {
    title: {
      type: String,
      required: true,
    },
    propList: {
      type: Array,
      required: true,
    },
  },
  created() {
    this.list = this.propList;
  },
  data() {
    return {
      list: [],
    };
  },
  methods: {
    changeSelect(item) {
      this.list = this.list.map((temp) => ({
        name: temp.name,
        isSelected: item.name === temp.name,
      }));
      this.$emit('changeSelector', item.name);
    },
  },
};
</script>

<style scoped lang="less">

.select-nav-container {
  margin-bottom: 20px;
  border-bottom: 1px solid rgba(238, 238, 238, .7);
  padding: 10px 0;

  div {
    display: inline-block;
    width: 75px;
  }

  div:first-child {
    font-weight: bolder;
    margin-right: 30px;
  }

  div:not(:first-child) {
    cursor: pointer;
    text-align: center;
    margin: 0 20px;
  }

  .active {
    background-color: #30A679;
    color: #fff;
    font-weight: bolder;
  }
}
</style>
