<template>
  <div class="about-me-container">
    <div class="ab-bg">
      <!-- 首页按钮 -->
      <div class="ab-header">
        <a-button class="top-btn">新闻公告</a-button>
        <a-button class="top-btn" @click="jumpOthers('PublicWelfareHistory')"
          >我的活动情况</a-button
        >
        <a-button class="top-btn" @click="jumpOthers('AddProjectsHistory')"
          >我发起的活动</a-button
        >
        <a-button class="top-btn" @click="jumpOthers('VotingReviewer')"
          >投票区</a-button
        >
      </div>
      <a-divider />
      <!-- 新闻公告 -->
      <div class="ab-news">
        <div class="news-details">
          <div class="news-content">
            <a-card title="新闻公告" class="news-public">
              <a slot="extra">>>更多</a>
              <h2 style="color: #01558e; text-align: center">
                《中国青年志愿者标志基本规范》发布
              </h2>
              <p style="color: #797979">
                &nbsp;&nbsp;&nbsp;近日，共青团中央、中国青年志愿者协会发布《中国青年志愿者标志基本规范》
                ，对中国青年志愿者标志“心手标”的使用作出规范性要求。
              </p>
              <span
                >&nbsp;&nbsp;&nbsp;老牛兄妹基金会和洛克菲勒兄弟基金会在美国发起Richard
                Rockefeller学人计划。</span
              >
              <a-divider />
              <a-list item-layout="horizontal" :data-source="newspublic_news">
                <a-list-item slot="renderItem" slot-scope="item">
                  <!-- 出版社 -->
                  <a slot="actions">{{ item.newsport }}</a>
                  <a-badge status="processing" :text="item.newsText"></a-badge>
                </a-list-item>
              </a-list>
            </a-card>
            <a-card title="志愿快播" style="width: 90%" class="quick-news">
              <a slot="extra">>>更多</a>
              <a-list item-layout="horizontal" :data-source="newspublic_news">
                <a-list-item slot="renderItem" slot-scope="item">
                  <a slot="actions">{{ item.tdDate }}</a>
                  <a-badge status="processing" :text="item.newsText"></a-badge>
                </a-list-item>
              </a-list>
            </a-card>
          </div>
        </div>
        <!-- 轮播图 -->
        <div class="box-img">
          <a-carousel autoplay class="carousel">
            <div class="slick-slide"><img src="@/assets/rollpic/1.jpg" /></div>
            <div class="slick-slide"><img src="@/assets/rollpic/2.jpg" /></div>
            <div class="slick-slide"><img src="@/assets/rollpic/3.jpg" /></div>
            <div class="slick-slide"><img src="@/assets/rollpic/4.jpg" /></div>
          </a-carousel>
          <div class="national-and-comments">
            <div class="nac-content">
              <h3>国际新闻<span>International News</span></h3>
              <img
                style="height: 20%; width: 95%"
                src="@/assets/rollpic/5.jpg"
              />
              <a style="font-size: 20px">以微薄之力，解“燃眉之急” | 志愿观察</a>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;风雨过后，我们更需要意识到让志愿精神持续闪光.
              </p>
              <a-list item-layout="horizontal" :data-source="newspublic_news">
                <a-list-item slot="renderItem" slot-scope="item">
                  <a-badge status="processing" :text="item.newsText"></a-badge>
                </a-list-item>
              </a-list>
            </div>
            <div class="nac-content">
              <h3>评价观点<span>Comments</span></h3>
              <img
                style="background-color: red; height: 20%; width: 95%"
                src="@/assets/rollpic/6.jpg"
              />
              <a style="font-size: 20px">以微薄之力，解“燃眉之急” | 志愿观察</a>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;风雨过后，我们更需要意识到让志愿精神持续闪光.
              </p>
              <a-list item-layout="horizontal" :data-source="newspublic_news">
                <a-list-item slot="renderItem" slot-scope="item">
                  <a-badge status="processing" :text="item.newsText"></a-badge>
                </a-list-item>
              </a-list>
            </div>
          </div>
          <div class="abs">
            <a-card title="关于我们" class="news-public">
              <a slot="extra">>>更多</a>
              <img src="@/assets/rollpic/10.png" style="width: 100%" />
              <a-divider />
            </a-card>
          </div>
        </div>
      </div>
      <!-- 中场休息 -->
      <div class="ab-layout">
        <img style="width: 100%; height: 100%" src="@/assets/rollpic/7.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api/aboutMe';

export default {
  name: 'aboutMe',
  async created() {
    await api
      .getAboutMeList({
        appkey: this.$store.state.user.userinfo.appkey,
      })
      .then((res) => {
        this.newspublic_news = res;
      });
  },
  data() {
    return {
      ablist: [],
      newspublic_news: [],
      sssm: 'hhelo',
    };
  },
  methods: {
    jumpOthers(val) {
      this.$router.replace({
        name: val,
      });
    },
  },
};
</script>

<style scoped lang="less">
.ab-bg {
  display: flex;
  flex-direction: column;
  //height: 2400px;
}

.ab-header {
  display: flex;
  justify-content: space-evenly;
  margin-right: 150px;

  .top-btn {
    padding: 0 10px;
    background-color: #ebebeb;
    color: black;

    &:hover {
      background-color: red;
      color: #ffffff;
    }
  }
}

.ab-news {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;

  .news-details {
    width: 45%;
  }

  .box-img {
    width: 55%;

    .carousel {
      .slick-slide {
        text-align: center;
        height: 300px;
        line-height: 160px;
        background: #364d79;
        overflow: hidden;

        > img {
          width: 100%;
          height: 100%;
        }
      }
    }

    .national-and-comments {
      display: flex;

      .nac-content {
        width: 50%;
        height: 450px;
        margin-top: 8px;
        padding-right: 8px;

        > h3 {
          text-align: center;
        }
      }
    }
  }
}

.news-content {
  .news-public {
    width: 90%;

    .sexx {
      color: #01558e;
    }
  }

  .quick-news {
    margin-top: 8px;

    > div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: nowrap;
    }
  }
}

.ab-layout {
  margin-top: 20px;
}

#components-back-top-demo-custom {
  .ant-back-top-inner {
    height: 40px;
    width: 40px;
    background-color: blue;
    color: red;
    font-size: 20px;
  }
}
</style>
