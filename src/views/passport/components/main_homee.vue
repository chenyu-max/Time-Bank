<template>
  <div class="homee_main">
    <div class="bg1">
      <div class="bg1-text">
        <h1>时间银行</h1>
        <h2>TIME-BANK</h2>
        <a-button
            type="primary"
            style="background-color:#ffb46d;
           border-style:none;margin-top:20px;width:80px;"
        >了解情况
        </a-button>
      </div>
    </div>
    <div class="bg2">
      <div class="bg2-bar">
        <a-icon type="home" style="font-size:70px;"></a-icon>
        <div>
          <h1>系统配置灵活</h1>
          <p>每个机构可根据自身特点配置，满足不同模式的时间银行需要！</p>
        </div>
      </div>
      <div class="bg2-bar">
        <a-icon type="team" style="font-size:70px;"></a-icon>
        <div>
          <h1>团队配比丰富</h1>
          <p>时间银行团队内部构造丰富，各行各业人员参与其中！</p>
        </div>
      </div>
      <div class="bg2-bar">
        <a-icon type="trophy" style="font-size:70px;"></a-icon>
        <div>
          <h1>人人均可审核</h1>
          <p>本项目中，只要注册就有机会成为审核人，获得更多时间币！</p>
        </div>
      </div>
    </div>
    <div class="func">
      <div>
        <div class="func-introduction">
          <h1>FUNCTION INTRODUCTION</h1>
          <p>功能介绍</p>
        </div>
        <div class="func-content">
          <a-row type="flex" justify="space-around" align="middle">
            <a-col :span="4">
              <div class="func-pic" id="pic1">
                <a-icon type="user-add" style="font-size:40px;"></a-icon>
                <h2>志愿活动</h2>
                <p>VOLUNTEER ACTIVITY</p>
                <p>
                  发布任务<br>
                  供需匹配<br>
                  活动报名<br>
                  签到/签退<br>
                </p>
              </div>
            </a-col>
            <a-col :span="4">
              <div class="func-pic" id="pic2">
                <a-icon type="shopping-cart" style="font-size:40px;"></a-icon>
                <h2>时间商城</h2>
                <p>TIME SHOPPING</p>
                <p>
                  购买时间货币<br>
                  购买农业产品<br>
                  参与活动即可获取<br>
                  只要参与，均可获得<br>
                </p>
              </div>
            </a-col>
            <a-col :span="4">
              <div class="func-pic" id="pic3">
                <a-icon type="file-protect" style="font-size:40px;"></a-icon>
                <h2>审核机制</h2>
                <p>AUDIT MECHANISM</p>
                <p>
                  审核候选公平公开<br>
                  人人皆可成为审核人<br>
                  21人投票机制<br>
                  拥有更多的福利与权限哦！<br>
                </p>
              </div>
            </a-col>
            <a-col :span="4">
              <div class="func-pic" id="pic4">
                <a-icon type="menu" style="font-size:40px;"></a-icon>
                <h2>机构组成</h2>
                <p>ORIGANIZATION COMPOSITION</p>
                <p>
                  发布任务<br>
                  审核任务<br>
                  参与任务<br>
                  完成任务<br>
                </p>
              </div>
            </a-col>
          </a-row>
        </div>
      </div>
      <div>
        <div class="how-use">
          <h1>HOW TO USE</h1>
          <p>如何使用</p>
        </div>
        <div class="use-content">
          <a-row type="flex" justify="space-around" align="middle">
            <a-col :span="6">
              <div class="func-pic" id="pic5">
                <a-icon type="solution" style="font-size:40px;"></a-icon>
                <h2 style="font-weight:bolder;">谁可以使用时间银行</h2>
                <p>
                  民非组织、志愿团队、社区、企业等所<br>有认同时间银行理念的团队和个人
                </p>
              </div>
            </a-col>
            <a-col :span="6">
              <div class="func-pic" id="pic6">
                <a-icon type="safety" style="font-size:40px;"></a-icon>
                <h2 style="font-weight: bolder">如何启动时间银行</h2>
                <p>注册一个机构账号并设置运营规则，邀<br>请成员加入后发起各种活动</p>
              </div>
            </a-col>
            <a-col :span="6">
              <div class="func-pic" id="pic7">
                <a-icon type="laptop" style="font-size:40px;"></a-icon>
                <h2 style="font-weight: bolder">如何运营时间银行</h2>
                <p>创始人和全体成员形成共识，在本组织<br>所关注的领域、范围开展各种互助活动</p>
              </div>
            </a-col>
          </a-row>
        </div>
      </div>
    </div>
    <div class="kefu">
      <div class="lf-content">
        <h2>咨询电话</h2>
        <h1>12345678900</h1><br>
        <h2>邮箱</h2>
        <h3>sjyh@126.com</h3>
      </div>
      <div class="rf-content">
        <div>
          <p>关注我</p>
          <img src="../../../assets/main_bg/wxPublic.jpg" alt=""></div>
        <div>
          <p>APP下载</p>
          <img src="../../../assets/main_bg/wxPublic.jpg" alt=""></div>
      </div>
    </div>
    <footer class="personal-tips">
      <p>使用条款 隐私协议</p>
      <p>Copyright© 时间银行 All Rights Reserved 武汉好韵莱
        信息技术有限公司 版权所有｜鄂ICP备08004430号-10</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Mainhomee',
};
</script>

<style scoped lang="less">
* {
  padding: 0;
  margin: 0;
}

.bg1 {
  background-image: url("../../../assets/main_bg/bg1.jpg");
  width: 100%;
  height: 654px;
  background-repeat: no-repeat;
  background-position: 0px -50px;

  .bg1-text {
    margin: 0 auto;
    text-align: center;
    padding-top: 250px;

    > h1 {
      font-size: 50px;
      font-weight: bolder;
      color: white;
    }

    > h2 {
      font-size: 20px;
      font-weight: bolder;
      color: white;
    }
  }
}

.bg2 {
  width: 100%;
  height: 300px;
  padding-top: 50px;
  margin-bottom: 40px;
  background-color: #f5da99;
  display: flex;
  justify-content: space-between;

  .bg2-bar {
    padding-top: 20px;
    height: 200px;
    margin: 0 auto;
    border-right: white solid 5px;
    font-weight: bold;
  }
}

.func {
  margin-bottom: 30px;
  width: 100%;
  background-color: #ffffff;

  .func-introduction {
    width: 100%;
    height: 150px;
    padding-left: 20vh;
    background-color: #ffffff;

    > h1 {
      font-size: 40px;
      color: rgb(233, 236, 9);
    }

    > p {
      font-size: 20px;
    }
  }

  .func-content {
    background-color: #ffffff;

    .func-pic {
      background-color: yellow;
      background-size: cover;
      background-repeat: no-repeat;
      opacity: 0.7;
      background-color: rgba(0, 0, 0, 0.2);
      box-shadow: darkgrey 10px 10px 30px 5px;
      text-align: center;
      padding-top: 150px;

      > h2, p {
        font-weight: bold;
      }
    }
  }

  .how-use {
    margin-top: 30px;
    width: 100%;
    height: 150px;
    background-color: #ffffff;
    padding-left: 20vh;

    > h1 {
      font-size: 40px;
      color: rgb(233, 236, 9);
    }

    > p {
      font-size: 20px;
    }
  }

  .use-content {
    background-color: #ffffff;
    height: 312px;
    text-align: center;

    .func-pic {
      padding-top: 100px;
      background-color: yellow;
      background-repeat: no-repeat;
      background-size: cover;
      opacity: 0.7;
      box-shadow: darkgrey 10px 10px 30px 5px;

      > h2 {
        margin-top: 40px;
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

#pic1 {
  background-image: url('../../../assets/main_bg/bg_renwu.png');
}

#pic2 {
  background-image: url('../../../assets/main_bg/bg_shequ.png');
}

#pic3 {
  background-image: url('../../../assets/main_bg/bg_zhiyuanzhe.png');
}

#pic4 {
  background-image: url('../../../assets/main_bg/bg_zichan.png');
}

#pic5 {
  background-image: url('../../../assets/main_bg/help.jpg');
}

#pic6 {
  background-image: url('../../../assets/main_bg/bg_huzhu.jpg');
}

#pic7 {
  background-image: url('../../../assets/main_bg/loveyou.jpg');
}
</style>
