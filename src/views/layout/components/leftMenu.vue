<template>
  <div class="left-menu-container">
    <a-menu
        mode="inline"
        theme="dark"
        :inline-collapsed="collapsed"
    >
      <a-sub-menu v-for="item in menuList" :key="item.name">
        <span slot="title">
            <a-icon :type='item.meta.icon'/>
            <span>{{ item.meta.title }}</span>
        </span>
        <template v-for="childItem in item.children">
          <a-menu-item v-if="!childItem.meta.hidden"
                       @click="changeRouter(childItem.name)"
                       :key="childItem.name">
            <a-icon :type="childItem.meta.icon"></a-icon>
            <span>
            {{ childItem.meta.title }}
          </span>
          </a-menu-item>
        </template>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>

export default {
  name: 'leftMenu',
  data() {
    return {
      menuList: [],
    };
  },
  created() {
    this.menuList = this.$store.state.menuRouters.menuRoutes;
  },
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
