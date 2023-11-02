<template>
  <!-- 底部上方 -->
  <div class="top">
    <div class="concerning">
      <!-- 客户服务 -->
      <div class="conbox">
        <div class="boxtop">
          客户服务
        </div>
        <div class="boxbottom">
          <li>
            在线客服<br>
            <i class=" iconfont icon-zaixiankefu"></i>
          </li>
          <li>
            问题反馈<br>
            <i class=" iconfont icon-wentifankui"></i>
          </li>
        </div>
      </div>
      <!-- 关注我们 -->
      <div class="conbox">
        <div class="boxtop">
          关注我们
        </div>
        <div class="boxbottom">
          <li>
            <span>公众号</span>
            <i class=" iconfont icon-weixin"></i>
          </li>
          <li>
            <span>微博</span>
            <i class=" iconfont icon-xinlangweibo"></i>
          </li>
        </div>
      </div>
      <!-- 下载app -->
      <div class="conbox">
        <div class="boxtop">
          <span>下载app</span>
        </div>
        <div class="boxbottom">
          <!-- <div class="pay"></div> -->
          <img src="@/assets/image/pay.png" alt="">
          <div class="load">
            <span>扫描二维码</span>
            <span>立马下载app</span>
            <a href="">下载页面</a>
          </div>
        </div>
      </div>
      <!-- 服务热线 -->
      <div class="conbox">
        <div class="boxtop">
          <span>服务热线</span>
        </div>
        <div class="boxbottom">
          <div class="serve">
            <span class="spe">189-2371-7105</span>
            <span>周一至周日 8:00-18:00</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 底部下方 -->
  <div class="bottom">
    <!-- 优势 -->
    <div class="adv">
      <li>价格亲民</li>
      <li>物流快捷</li>
      <li>品质新鲜</li>
    </div>
    <!-- 版权信息 -->
    <div class="copyright">
      <li>关于我们</li>
      <li>帮助中心</li>
      <li>售后服务</li>
      <li>配送与验收</li>
      <li>商务合作</li>
      <li>搜索推荐</li>
      <li class="spe">友情链接</li>
    </div>
    <!-- @区 -->
    <div class="zy">
      <span>zhongyi9044@小鲜兔儿</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.top {

  .concerning {
    display: flex;
    border-right: 1px solid #f2f2f2;
    justify-content: center;
    height: 13rem;

    .conbox {
      display: flex;
      flex-direction: column;
      height: 8rem;
      width: 25rem;
      align-items: center;
      justify-content: space-between;
      border-right: 0.1rem solid #ebe9e9;
      margin: 2rem 0;
      color: #999;
      font-weight: 6rem;
      font-size: 1.2rem;

      .boxtop {
        margin: 1rem;
      }

      .boxbottom {
        margin: 1rem;
        margin-top: 0;
        display: flex;

        li {
          margin: 0.1rem;
          margin-top: 0rem;
          border: #ebe9e9 solid 0.11rem;
          display: flex;
          flex-direction: column;
          width: 5rem;
          align-items: center;


          span {
            display: block;
          }

          i {
            display: block;
            font-size: 2rem;
          }


        }

        img {
          height: 5rem;
          width: 5rem;
        }

        .load,
        .serve {
          margin-left: 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 14px;

          span {
            display: block;
          }

          a {
            display: block;
            width: 8rem;
            text-align: center;
            background-color: $xtxColor;
            color: rgb(248, 245, 245);
          }

          .spe {
            display: block;
            font-size: 2rem;
          }
        }
      }
    }
  }
}

.bottom {
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;

  .adv {
    margin: 0 6rem;
    border-bottom: 0.1px solid #434343;
    display: flex;
    justify-content: space-between;

    li {
      height: 11.5rem;
      padding: 4rem;
      text-align: center;
      font-size: 28px;
    }
  }

  .copyright {
    display: flex;
    justify-content: center;

    li {
      margin: 0 1rem;
      margin-top: 2rem;
      border-right: 0.1rem solid #cdcdcd;
      padding: 0 2rem 0 0;
      color: #999;
      font-size: 15px;
    }

    .spe {
      border-right: 0rem solid #cdcdcd;
    }
  }

  .zy {
    display: flex;
    justify-content: center;
    margin-top: 2rem;

    span {
      display: block;
      color: #999;
      font-size: 15px;
    }
  }
}
</style>