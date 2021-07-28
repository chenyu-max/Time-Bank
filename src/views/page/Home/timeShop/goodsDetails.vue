<template>
  <div class="good-details-container">
    <div class="title">
      商品详情
    </div>
    <div class="goods-info">
      <div class="goods-title-img-show">
        <div class="show-img">
          <div>
            <image-loader :src="goodsTitleImg[nowImgIndex]"/>
          </div>
        </div>
        <div class="img-list">
          <div v-for="(url,i) in goodsTitleImg"
               :class="{active: i === nowImgIndex}"
               @mouseover="changeActive(i)"
               :key="i">
            <image-loader :src="url"/>
          </div>
        </div>
      </div>
      <div class="goods-sale-info-show">
        <div class="goods-name">
          {{ goodsInfo.goodsName }}
        </div>
        <div>商品编号: {{ goodsInfo.goodsNumber }}</div>
        <div>兑换方式: 服务时长</div>
        <div>兑换时长: {{ goodsInfo.goodsValue }}h</div>
        <div>已兑换数: {{ goodsInfo.saleNumber }}</div>
        <div>商品库存: {{ goodsInfo.goodsTotal }}</div>
        <div>数量:
          <i class="btn-class" @click="changeNeedNum(-1)">-</i>
          <input type="text" class="input" v-model="needNumber">
          <i class="btn-class" @click="changeNeedNum(+1)">+</i>
        </div>
        <div>
          <a-button type="primary">立即兑换</a-button>
        </div>
      </div>
    </div>
    <div class="intro">
      <img v-for="(url,i) in goodsInfoImg" :key="i" :src="url"/>
    </div>
  </div>
</template>

<script>
import api from '@/api/shop';
import imageLoader from '@/components/ImageLoader/index.vue';

export default {
  name: 'goodsDetails',
  components: {
    imageLoader,
  },
  async created() {
    api.getGoodsDetails({
      appkey: this.$store.state.user.userinfo,
      goodsId: this.$route.params.goodsId,
    })
      .then((res) => {
        this.goodsInfo = res;
        this.goodsTitleImg = res.goodsTitleImgList;
        this.goodsInfoImg = res.goodsInfoImg;
      });
  },
  data() {
    return {
      goodsInfo: {},
      goodsTitleImg: [],
      goodsInfoImg: [],
      nowImgIndex: 0,
      needNumber: 1,
    };
  },
  methods: {
    changeActive(index) {
      this.nowImgIndex = index;
    },
    changeNeedNum(num) {
      let temp = this.needNumber + num;
      if (temp <= 0) {
        temp = 1;
      }
      if (temp >= this.goodsInfo.goodsTotal) {
        temp = this.goodsInfo.goodsTotal;
      }
      this.needNumber = temp;
    },
  },
};
</script>

<style scoped lang="less">
.title {
  color: #2d8cf0;
  height: 35px;
  line-height: 30px;
  font-size: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
}

.goods-info {
  display: flex;
  //height: 550px;

  .goods-title-img-show {
    flex: 0 0 450px;
    display: flex;
    flex-direction: column;

    .show-img {
      flex: 0 0 420px;
      justify-content: center;
      div{
        width: 400px;
        height: 400px;
      }
      img {
        border: 1px solid #eee;
      }
    }

    .img-list {
      flex: 1 1 auto;
      display: flex;

      .active {
        border: 1px solid #f95319;
      }

      > div:first-child {
        margin-right: 5px;
      }

      > div:not(:first-child) {
        margin: 0 5px;
      }

      > div {
        width: 77px;
        height: 77px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .image-loader-container {
        vertical-align: middle;
        width: 75px;
        height: 75px;
      }
    }
  }

  .goods-sale-info-show {
    flex: 1 1 auto;

    .goods-name {
      font-weight: bolder;
      font-size: 20px;
      line-height: 30px;
      margin-bottom: 20px;
    }

    > div:not(:first-child) {
      height: 55px;
      line-height: 55px;
      font-size: 16px;
    }

    .input {
      border: #e1e1e1 1px solid;
      width: 70px;
      height: 30px;
      vertical-align: middle;
      padding: 0;
      margin: 0;
      text-align: center;
      color: #666;
    }

    .ant-btn {
      width: 40%;
    }

    .btn-class {
      font-style: normal;
      border: #e1e1e1 1px solid;
      vertical-align: middle;
      width: 28px;
      height: 30px;
      display: inline-block;
      text-align: center;
      line-height: 30px;
      cursor: pointer;
    }
  }
}

.intro {
  width: 75%;

  img {
    width: 100%;
    margin: 20px 0;
    object-fit: cover;
  }
}

</style>
