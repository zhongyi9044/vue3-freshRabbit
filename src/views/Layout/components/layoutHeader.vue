<script setup>
import layoutCart from './layoutCart.vue';
//使用已经有数据的导航栏数据
import { useCategoryStore } from '@/stores/HomeCategoryStore.js'
const categoryStore = useCategoryStore()


</script>

<template>
  <!-- 头部区域 -->
  <div class="headerbac">
    <!-- 头部左边 -->
    <div class="left">
      <div class="writing">
        <a href="" class="img"></a>
        <li v-for="item in categoryStore.categoryList" :key="item.id">
          <router-link :to="`/category/${item.id}`" active-class="active">{{ item.name }}</router-link>
        </li>
      </div>
    </div>
    <!-- 头部右边 -->
    <div class="right">
      <div class="search">
        <div class="icon"><i class="iconfont icon-sousuoxiao"></i></div>
        <input type="text" placeholder="搜一搜" />
      </div>
      <layout-cart></layout-cart>
    </div>
  </div>
</template>

<style scoped lang="scss">
.headerbac {
  display: flex;
  justify-content: space-between;
  // background: rgb(247, 245, 245);
  background-color: #fff;
  padding: 0 10rem 1rem 10rem;
  align-items: end;

  .left {
    display: flex;
    align-items: center;

    a {
      &:hover {
        color: $sucColor;
      }
    }

    .active {

      color: $sucColor;
      border-bottom: 0.1rem solid $sucColor;

    }

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
</style>@/stores/HomeCategory.js@/stores/HomeCategoryStore.js