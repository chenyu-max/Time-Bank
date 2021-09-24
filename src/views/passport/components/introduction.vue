<template>
  <div class="intro">
    <div class="in-source">
      <h1>时间银行从何而来？</h1>
      <h2>WHERE DOES TIME BANK COME FROM?</h2>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;“时间银行”概念是由美国哥伦比亚特区大学（The Uni
        versity of the District of Columbia)的埃德加.
        卡恩（Edgar S. Cahn)教授提出：他认为市场对很多重
        要工作无法估价或无法给予合适的金钱报酬，如振兴社区、
        保护环境、促进社会公正等等。因此不能将金钱作为衡量产品
        和服务的唯一标准，应该寻找另一种方式来记录、奖励、回报
        人们做出的贡献。这种方式就是时间交换，用对他人服务换来
        被他人服务。卡恩相信，时间交换可以防止无节制地追求金钱
        利润时产生的负作用，有助于建立更加公平与包容的社会秩序。
        1990年第一家时间银行在美国成立，时至今日，超过1000多家
        时间银行遍布世界六大洲的20多个国家。从1999年开始，我国上
        海、北京、成都、南京、广州、济南、武汉等地也先后开展了时
        间银行的社区探索。通过数十年的时间银行实践，人们发现管理软
        件对保障时间银行良好运营有着十分重要的作用。但由于技术、资
        金等方面的原因，一直没有出现一套合适的时间银行产品。 随着
        信息技术的发展，新一代的时间银行系统——芳邻时间银行应运而生，
        我们希望用于她实现“储存爱 | 传递爱”的美好愿景！
      </p>
    </div>
    <div class="in-source">
      <h1>核心理念</h1>
      <h2>CORE IDEA</h2>
      <img src="../../../assets/main_bg/one.jpg" alt style="object-fit: cover"/>
    </div>
    <div class="in-source">
      <h1>价值</h1>
      <h2>VALUE</h2>
      <img src="../../../assets/main_bg/xxd.jpg" alt style="object-fit: cover"/>
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
  name: 'Introduction',
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}

.in-source {
  padding-left: 80px;
  padding-top: 80px;

  > h2 {
    color: silver;
  }

  > p {
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    margin-right: 150px;
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
