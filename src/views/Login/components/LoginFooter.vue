<template>
  <div class="foot">
    <a href="">关于我们</a>
    <a href="">帮助中心</a>
    <a href="">售后服务</a>
    <a href="">配送与验收</a>
    <a href="">商务合作</a>
    <a href="">搜索推荐</a>
    <a href="">友情链接</a>
    <p>CopyRight &copy; 肥艺</p>
  </div>
</template>

<style scoped lang="scss">
.foot {
  background-color: #fff;
  padding: 2rem 10rem 0 10rem;
  text-align: center;

  p {
    padding: 1rem 10px;
    color: #999;
  }

  a {
    line-height: 1;
    padding: 0 10px;
    color: #999;
    display: inline-block;

    //所有a
    ~a {
      border-left: 1px solid #ccc;
    }
  }
}
</style>