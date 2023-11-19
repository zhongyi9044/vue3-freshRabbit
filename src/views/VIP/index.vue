<script></script>

<template>
  <div class="bac">
    <div class="left">
      <ul>
        <li>我的账户</li>
        <li><router-link to="/vip"><i class="iconfont icon-shixinyuan"></i>个人中心</router-link></li>
      </ul>
      <ul>
        <li>交易管理</li>
        <li><router-link to="/vip/myBilling"><i class="iconfont icon-shixinyuan"></i>我的订单</router-link></li>
      </ul>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped lang="scss">
.bac {
  display: flex;
  justify-content: space-between;
  padding: 1rem 10rem;
  width: 100%;
  min-height: 35rem;

  .left {
    background-color: #fff;
    width: 20%;
    margin-right: 1rem;

    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 2rem;
      margin-left: -3rem;

      &:first-child {
        margin-top: 0.8rem;
      }

      li {
        &:first-child {
          font-weight: 550;
          margin-bottom: 1rem;

        }

        &:last-child {
          font-size: 0.9rem;

          i {
            display: none;
          }

        }

        a {
          &:hover {
            color: $xtxColor;
          }

          &.active,
          &.router-link-exact-active {
            color: $sucColor;

            i {
              display: block;
              display: inline;
              margin-right: 0.1rem;
              font-size: 0.9rem;
            }
          }
        }


      }

    }
  }

  .right {
    background-color: #fff;
    width: 80%;
  }
}
</style>