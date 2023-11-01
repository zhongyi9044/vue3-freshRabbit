<script setup>
import { useCategoryStore } from '@/stores/category.js'
const categoryStore = useCategoryStore();
console.log(categoryStore.categoryList)
</script>

<template>
  <div class="categoryBac">
    <ul class="category">
      <li class="categoryList" v-for="item in categoryStore.categoryList" :key="item.id">
        <router-link to="/" class="menuL">{{ item.name }}></router-link>
        <router-link to="/" v-for="item2 in item.children.slice(0, 2)" :key="item2.id" class="menuR">{{
          item2.name }}</router-link>
        <div class="layer">
          <h4>分类推荐 <small>根据您的购买或浏览记录推荐</small></h4>
          <ul>
            <li v-for="item3 in item.goods" :key="item3.id">
              <RouterLink to="/">
                <img :src="item3.picture" alt="" />
                <div class="info">
                  <p class="name ellipsis-2">
                    {{ item3.name }}
                  </p>
                  <p class="desc ellipsis">{{ item3.desc }}</p>
                  <p class="price"><i>¥</i>{{ item3.price }}</p>
                </div>
              </RouterLink>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>
<style scoped lang="scss">
.categoryBac {
  height: 31.5rem;
  z-index: 99;
  background: rgba(0, 0, 0, 0.8);

  .category {
    font-size: 1rem;
    font-weight: 400;

    line-height: 3.4rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    position: relative;

    :first-child {
      border-top: none !important;
    }

    .menuR {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }

    .categoryList {
      box-sizing: border-box;
      color: #fff;
      border-top: 0.1rem solid #666;


      .layer {
        position: absolute;
        left: 15.5rem;
        top: 0;
        width: 60rem;
        height: 31.25rem;
        background: rgba(255, 255, 255, 0.8);
        position: absolute;
        display: none;

        h4 {
          font-size: 1.25rem;
          font-weight: normal;
          line-height: 5rem;
          color: #666;
          margin-left: 1rem;

          small {
            font-size: 1rem;
            color: #666;
          }
        }

        ul {
          display: flex;
          flex-wrap: wrap;

          li {
            width: 18rem;
            height: 8rem;
            margin-right: 1.5rem;
            margin-bottom: .9375rem;
            border: .0625rem solid #eee;
            border-radius: .25rem;
            background: #fff;

            a {
              display: flex;
              // width: 100%;
              // height: 100%;
              align-items: center;
              padding: .625rem;

              &:hover {
                background: #e3f9f4;
              }

              img {
                width: 5.9375rem;
                height: 5.9375rem;
              }

              .info {
                padding-left: .625rem;
                line-height: 1.5rem;
                overflow: hidden;

                .name {
                  font-size: 1rem;
                  color: #666;
                }

                .desc {
                  color: #999;
                }

                .price {
                  font-size: 1.375rem;
                  color: $priceColor;

                  i {
                    font-size: 16px;
                  }
                }
              }
            }
          }
        }

      }

      // 关键样式  hover状态下的layer盒子变成block
      &:hover {
        .layer {
          display: block;
        }
      }
    }

    .menuL,
    .menuR {
      color: #fff;
    }
  }
}
</style>