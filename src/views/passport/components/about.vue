<template>
  <div class="about-me">
    <div class="in-source">
      <h1>About US</h1>
      <h2>关于我们</h2>
      <div class="echarts-list">
        <div class="echarts-line1">
          <div id="e-content1"></div>
          <div id="e-content2"></div>
        </div>
        <div class="echarts-line2">
          <div id="e-content3"></div>
          <div id="e-content4"></div>
        </div>
      </div>
      <div class="articles">
        <div class="article">
          <img src="../../../assets/main_bg/ab1.jpg" alt/>
          <div class="article-body">
            <h1>介绍</h1>
            <p style="text-indent: 2rem">
              区块链技术本质上是一个分布式账本，其特点在于网络是开
              放的，人人可以参与，所有区块链上发生的事件，将被永久
              记录，并且交易记录不可篡改，这就解决了公开透明可监督
              的问题。因此用区块链技术来打造一个时间银行系统，是一
              个非常可行的思路。因此项目组根据以上的需求而设计的一
              个基于区块链的时间银行系统。
            </p>
            <div class="article-info">
              <a-icon type="home"></a-icon>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;2021/09/10</p>
            </div>
          </div>
        </div>
        <div class="article">
          <img src="../../../assets/main_bg/ab2.jpg" alt/>
          <div class="article-body">
            <h1>行业前景</h1>
            <p style="text-indent: 2rem">
              “时间银行”不仅在养老服务领域发挥着重要作用，“溢出效应”也日渐凸显，积
              蓄起强大的社会治理“正能量”。以2020年为例，在抗击疫情期间，全市有1771名
              “时间银行”志愿者参加防控工作;在文明城市创建过程中，有超过3000名“时间银行”
              志愿者参与其中;在防洪抗洪期间，有近千人到一线;当冬季暴雪来临的时候，超过30
              00名“时间银行”志愿者出动，为社区、为老人提供各种力所能及的帮助;
              还有一些企业希望通过“时间银行”筛选到诚信度更高的员工。
            </p>
            <div class="article-info">
              <a-icon type="home"></a-icon>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;2021/08/12</p>
            </div>
          </div>
        </div>
        <div class="article">
          <img src="../../../assets/main_bg/ab3.jpg" alt/>
          <div class="article-body">
            <h1>市场分析</h1>
            <p style="text-indent: 2rem">
              &nbsp;市场对公益项目的支持度越来越高，时间银行这种倡导公益项目的产品提出，对社会和人们的影响力极大。
              &nbsp;市场调查后可知，目前存在的时间银行项目都存在覆盖面较小的问题。项目可服务的范围一般以乡镇为主，无法到
              达城市甚至全国的覆盖面。市场需要覆盖面更广的时间银行项目。
            </p>
            <div class="article-info">
              <a-icon type="home"></a-icon>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;2021/05/31</p>
            </div>
          </div>
        </div>
        <div class="article">
          <img src="../../../assets/main_bg/ab4.jpg" alt/>
          <div class="article-body">
            <h1>技术选型</h1>
            <p style="text-indent: 2rem">
              &nbsp;用区块链的特性以公开透明可监督、数据不被篡改为目标，用区块链技术来打造一个时间银行系统，实现一个公开的的时间银行区块链网络。
              &nbsp;凭借着多用户共同维护和信息共享加密的方式,可以让信息被破解和盗取的几率几乎降低到零,以此来有效保障信息的安全性。
            </p>
            <div class="article-info">
              <a-icon type="home"></a-icon>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;2021/07/30</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="kefu">
      <div class="lf-content">
        <h2>咨询电话</h2>
        <h1>12345678900</h1>
        <br/>
        <h2>邮箱</h2>
        <h3>sjyh@126.com</h3>
      </div>
      <div class="rf-content">
        <div>
          <p>关注我</p>
          <img src="../../../assets/main_bg/wxPublic.jpg" alt/>
        </div>
        <div>
          <p>APP下载</p>
          <img src="../../../assets/main_bg/wxPublic.jpg" alt/>
        </div>
      </div>
    </div>
    <footer class="personal-tips">
      <p>使用条款 隐私协议</p>
      <p>
        Copyright© 时间银行 All Rights Reserved 武汉好韵莱
        信息技术有限公司 版权所有｜鄂ICP备08004430号-10
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'About',
  mounted() {
    this.echartsInit();
  },
  methods: {
    echartsInit() {
      this.$echarts.init(document.getElementById('e-content1'))
        .setOption({
          title: {
            text: '一周网站访问量',
          },
          xAxis: {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          },
          yAxis: {
            type: 'value',
          },
          series: [
            {
              data: [150, 230, 224, 218, 135, 147, 260],
              type: 'line',
            },
          ],
        });
      this.$echarts.init(document.getElementById('e-content2'))
        .setOption({
          title: {
            text: '一周完成的公益项目',
          },
          xAxis: {
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          },
          yAxis: {
          },
          series: [
            {
              type: 'bar',
              data: [23, 24, 18, 25, 27, 28, 25],
              itemStyle: {
                normal: {
                  label: {
                    show: true,
                    position: 'top',
                    textStyle: {
                      fontWeight: 'bolder',
                      fontSize: '12',
                      color: '#4a4a4a',
                    },
                  },
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 1,
                      color: '#3db0fe',
                    },
                    {
                      offset: 0,
                      color: '#0a81d4',
                    },
                  ]),
                },
              },
            },
          ],
        });
      this.$echarts.init(document.getElementById('e-content3'))
        .setOption({
          title: {
            text: '一周完成的公益项目分类',
          },
          series: [
            {
              type: 'pie',
              data: [
                {
                  value: 25,
                  name: '照顾老人',
                },
                {
                  value: 10,
                  name: '照顾小孩',
                },
                {
                  value: 43,
                  name: '帮忙做事',
                },
                {
                  value: 20,
                  name: '社区服务',
                },
                {
                  value: 12,
                  name: '心灵咨询',
                },
              ],
              radius: '50%',
              label: {
                normal: {
                  formatter: '{b}:{c}: ({d}%)',
                },
              },
            },
          ],
        });
      this.$echarts.init(document.getElementById('e-content4'))
        .setOption({
          title: {
            text: '一周内网站使用者分布',
          },
          series: [
            {
              type: 'pie',
              data: [
                {
                  value: 132,
                  name: '杭州',
                },
                {
                  value: 80,
                  name: '绍兴',
                },
                {
                  value: 60,
                  name: '金华',
                },
                {
                  value: 78,
                  name: '湖州',
                },
                {
                  value: 89,
                  name: '宁波',
                },
                {
                  value: 59,
                  name: '嘉兴',
                },
              ],
              roseType: 'area',
              radius: '50%',
              label: {
                normal: {
                  formatter: '{b}:{c}: ({d}%)',
                },
              },
            },
          ],
        });
    },
  },
};
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
}

.in-source {
  padding-left: 80px;

  > h1 {
    font-size: 50px;
    color: rgb(54, 126, 235);
  }

  .echarts-list {
    display: flex;
    flex-direction: column;

    .echarts-line1,
    .echarts-line2 {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      flex-direction: row;

      > div {
        margin-right: 45px;
        height: 500px;
        width: 800px;
      }
    }
  }

  .articles {
    display: flex;
    flex-direction: column;
    width: 100%;

    .article {
      height: 170px;
      margin-top: 35px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;

      > img {
        width: 300px;
        height: 169px;
        margin-right: 50px;
      }

      .article-body {
        width: 800px;

        .article-info {
          display: flex;
          height: 20px;
          line-height: 20px;

          > i {
            line-height: 20px;
          }
        }
      }
    }
  }
}

.kefu {
  width: 100%;
  background-color: rgb(151, 198, 231);
  margin-top: 20px;
  padding: 5vh 5vw;
  display: flex;
  justify-content: space-between;

  .lf-content {
    > h1 {
      font-size: 60px;
      font-weight: bolder;
    }
  }

  .rf-content {
    display: flex;
    justify-content: flex-start;

    div > p {
      text-align: center;
    }

    div > img {
      margin-left: 20px;
      height: 220px;
      width: 220px;
    }
  }
}

.personal-tips {
  width: 100%;
  height: 100px;
  background-image: linear-gradient(270deg,
  rgba(32, 35, 36, 0.8) 0%,
  rgba(66, 72, 74, 0.8) 100%);
  background-color: initial;
  text-align: center;
  padding-top: 5px;

  > p {
    margin: 20px;
  }
}
</style>
