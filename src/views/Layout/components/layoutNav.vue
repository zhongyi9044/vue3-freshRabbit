<script setup>

</script>

<template>
  <!-- 导航栏目 -->
  <div class="navbac">
    <div class="nav">
      <!-- 各项导航 -->
      <li><a href=""><i class=" iconfont icon-yonghu"></i> 钟艺</a></li>
      <li><a href="">退出登录</a></li>
      <li><a href="">我的订单</a></li>
      <li><a href="">订单中心</a></li>
      <li class="last"><a href="">会员中心</a></li>
    </div>
  </div>
</template>

<style scope lang="scss">
.navbac {
  background: #333;

  .nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 5rem;

    li {
      margin: 1rem 0 1rem 0;
      padding: 0 1rem 0 1rem;

      a {
        color: #cdcdcd;
      }

      border-right: 0.3rem solid #cdcdcd;
    }

    .last {
      border-right: none;
    }
  }

}
</style>

