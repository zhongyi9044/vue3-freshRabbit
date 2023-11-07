<template>
  <div class="header">
    <div class="logo"></div>
    <div class="to"><a href="" @click="$router.push('/')">
        <span>进入首页</span>
        <i class="iconfont icon-angleright"></i>
        <i class="iconfont icon-angleright"></i></a></div>
  </div>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding:0 10rem;

  .logo {
    width: 12.5rem;
    height: 8rem;
    background: url("@/assets/image/logo.png") no-repeat center 18px / contain;
  }

  .to {
    line-height: 8rem;
    font-size: 1.2rem;

    i {
      font-size: 1rem;
      color: $xtxColor;
      letter-spacing: -0.3rem;
    }
  }
}
</style>