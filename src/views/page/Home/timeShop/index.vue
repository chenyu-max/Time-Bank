<template>
  <div class="time-shop-container">
    <div class="shopping-cart">
      <div>
        时间银行-时间商城列表
      </div>
    </div>
    <a-list :grid="{ gutter: 16, column: 4 }" :data-source="showShopList">
      <template #renderItem="item">
        <a-list-item @click="goToDetails(item.goodsId)">
          <a-card hoverable style="width: 240px">
            <template #cover>
              <div style="width:240px; height: 240px">
                <image-loader :src="item.img"/>
              </div>
            </template>
            <a-card-meta :title="item.name">
              <template #description>
                <div>兑换时间: {{ item.value }}</div>
                <div>库存: {{ item.total }}</div>
              </template>
            </a-card-meta>
          </a-card>
        </a-list-item>
      </template>
    </a-list>
    <pager :current="currentPage" :total="total" @pageChange="handlePageChange"/>
  </div>
</template>

<script>
import api from '@/api/shop';
import imageLoader from '@/components/ImageLoader/index.vue';
import pager from '@/components/pager/index.vue';

export default {
  name: 'index',
  components: {
    imageLoader,
    pager,
  },
  async created() {
    api.getShopList({ appkey: this.$store.state.user.userinfo.appkey })
      .then((res) => {
        this.shopList = res;
        this.showShopList = this.shopList.slice(0, 8);
        this.total = this.shopList.length;
      });
  },
  data() {
    return {
      shopList: [],
      showShopList: [],
      total: 0,
      currentPage: 1,
    };
  },
  methods: {
    goToDetails(goodsId) {
      this.$router.push({
        name: 'GoodDetails',
        params: {
          goodsId,
        },
      });
    },
    handlePageChange(newPage) {
      const maxPage = newPage * 8 > this.total ? this.total : newPage * 8;
      this.showShopList = this.shopList.slice((newPage - 1) * 8, maxPage);
      this.currentPage = newPage;
    },
  },
};
</script>

<style scoped lang="less">
.shopping-cart {
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  font-weight: 600;
  border-bottom: 1px solid #eee;
  margin-bottom: 1rem;

  > div:first-child {
    float: left;
    margin-left: 5px;
  }
}
</style>
