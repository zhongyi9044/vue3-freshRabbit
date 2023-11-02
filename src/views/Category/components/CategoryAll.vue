<script setup>
// import { useCategoryStore } from '@/stores/CategoryCategory';
import GoodsItem from '@/views/Home/components/GoodsItem.vue';

//路由更新前操作函数
import { onBeforeRouteUpdate } from 'vue-router';
// const categoryStore = useCategoryStore();

//使用composables文件夹进行js代码管理
import { useGetCategory } from '../composables/useGetCategory';

const { categoryStore } = useGetCategory()
onBeforeRouteUpdate((to) => {
  categoryStore.getCategory(to.params.id)
})
</script>

<template>
  <div class="category-all">
    <h3>全部分类</h3>
    <ul>
      <li v-for="item in categoryStore.categoryData.children" :key="item.id">
        <router-link :to="`/category/sub/${item.id}`">
          <img v-img-lazy="item.picture" />
          <p>{{ item.name }}</p>
        </router-link>
      </li>
    </ul>
  </div>
  <div class="category-goods">
    <div class="ref-goods" v-for="item2 in categoryStore.categoryData.children" :key="item2.id">
      <div class="head">
        <h3>- {{ item2.name }}-</h3>
      </div>
      <div class="body">
        <div class="body-list" v-for="good in item2.goods" :key="good.id">
          <GoodsItem :goods="good" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.category-goods {
  padding: 0 10rem;

  .ref-goods {
    // font-size: 1.75rem;
    color: #666;
    font-weight: normal;
    text-align: center;
    // line-height: 6.25rem;

    .head {
      line-height: 6.25rem;
      font-size: 1.75rem;
    }

  }

  .body {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .body-list {
      width: 15%;

      a {
        display: block;
      }

    }
  }
}

.category-all {


  h3 {
    font-size: 1.75rem;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 6.25rem;
  }

  ul {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    li {
      width: 15%;
      padding: 3rem 0;

      a {
        text-align: center;
        display: block;
        font-size: 16px;
        height: 15rem;

        &:hover {
          color: $xtxColor;
        }

        img {
          width: 100%;
          height: 100%;
        }

        p {
          line-height: 40px;
        }


      }
    }
  }
}
</style>