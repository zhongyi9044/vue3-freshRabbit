<script setup>
//导入useScroll
import { useScroll } from '@vueuse/core'
import { useCategoryStore } from '@/stores/category.js'
const categoryStore=useCategoryStore()

var fontSize = (window.innerWidth*100) / 750;
const targetY=fontSize*0.75
const { y } = useScroll(window)

</script>

<template>
  <div class="disshow" :class="{ show: y > targetY }">
    <!-- 头部区域 -->
    <div class="headerbac">
      <!-- 头部左边 -->
      <div class="left">
        <div class="writing">
          <a href="" class="img"></a>
          <li v-for="item in categoryStore.categoryList" :key="item.id">
            <router-link to="/">{{ item.name }}</router-link>
          </li>
        </div>
      </div>
      <!-- 头部右边 -->
      <div class="right">
        <div class="search">
          <div class="icon"><i class="iconfont icon-sousuoxiao"></i></div>
          <input type="text" placeholder="搜一搜" />
        </div>
        <div class="cart">
          <i class="iconfont icon-gouwuche"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.disshow{
  display: none;
}
.show {
  display: block
}

.headerbac {
  position: fixed;
  display: flex;
  justify-content: space-between;
  background: rgb(247, 245, 245);
  // margin: 0 10rem 0 10rem;
  padding: 0 10rem;
  align-items: end;
  width: 100%;

  .left {
    display: flex;
    align-items: center;

    .writing {
      display: flex;
      align-items: end;

      li {
        // transform: translateY(45%);
        margin-left: 3rem;
        font-size: 1rem;
        font-weight: 550;
      }

      .img {
        display: block;
        height: 6rem;
        width: 15rem;
        background: url("@/assets/image/logo.png") no-repeat center 18px / contain;
        // align-items: end;
        transform: translateY(10%);
      }
    }
  }

  .right {
    display: flex;
    align-items: center;

    .search {
      display: flex;
      height: 2rem;
      // transform: translateY(45%);
      border-bottom: 0.1rem solid #e7e7e7;
      align-items: center;


      .icon {
        background-color: #ffffff;


        i {
          display: block;
          transform: translateY(10%);
        }
      }
    }

    .cart {
      // transform: translateY(45%);
      margin-left: 1rem;
    }
  }
}
</style>