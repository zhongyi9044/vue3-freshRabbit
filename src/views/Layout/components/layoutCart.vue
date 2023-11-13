<script setup>
import { useCartListStore } from '@/stores/CartStore'
const cartListStore = useCartListStore()
</script>

<template>
  <div class="cart">
    <router-link to="/cart" class="icon"><i class="iconfont icon-gouwuche"></i><em>{{ cartListStore.cartList.length
    }}</em></router-link>
    <div class="tran">
      <div class="backg">
        <ul class="goods-list">
          <li class="item" v-for="i in cartListStore.cartList" :key="i">
            <RouterLink :to="`/detail/${i.id}`">
              <img :src="`${i.picture}`" alt="" />
              <div class="center">
                <p class="name ellipsis-2">
                  {{ i.name }}
                </p>
                <p class="attr ellipsis">
                  {{ i.attrsText }}
                </p>
              </div>
              <div class="right">
                <p class="price">&yen;{{ i.price }}</p>
                <p class="count">x{{ i.count }}</p>
              </div>
            </RouterLink>
            <i class="iconfont icon-X" @click="cartListStore.deleteGoods(i.skuId)"></i>
          </li>
        </ul>
        <div class="footer">
          <ul>
            <li>共{{ cartListStore.cartCount }}件商品</li>
            <li>￥{{ cartListStore.priceCount }}</li>
          </ul>
          <el-form-item>
            <el-button type="primary" @click="$router.push('/cart')">去购物车支付</el-button>
          </el-form-item>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cart {
  position: relative;
  z-index: 600;

  &:hover {
    .tran {
      opacity: 1;
      transform: none;
    }
  }

  .tran {
    position: absolute;
    transform: translateY(-100rem);
    opacity: 0;
    left: -22.5rem;
    top: 2rem;
    z-index: 99;
    width: 25rem;
    height: 25rem;
    border: rgb(223, 218, 218) solid 0.1rem;
    background-color: #fff;

    .backg {
      width: 100%;
      height: 100%;

      .goods-list {
        height: 80%;
        overflow: auto;
        padding: 0 1rem;
        position: absolute;

        &::-webkit-scrollbar {
          width: 10px;
          height: 10px;
        }

        &::-webkit-scrollbar-track {
          background: #f8f8f8;
          border-radius: 2px;
        }

        &::-webkit-scrollbar-thumb {
          background: #eee;
          border-radius: 10px;
        }

        &::-webkit-scrollbar-thumb:hover {
          background: #ccc;
        }

        li {
          height: 40%;
          padding-top: 1rem;
          position: relative;

          a {
            display: flex;
            align-items: center;
            height: 100%;

            img {
              height: 90%;

            }

            .center {
              padding: 0 0.6rem;
              width: 10rem;

              .name {
                font-size: 1rem;
              }

              .attr {
                color: #999;
                padding-top: 0.3rem;
              }
            }

            .right {
              width: 6.3rem;
              padding-right: 1.3rem;
              text-align: center;

              .price {
                font-size: 1rem;
                color: $priceColor;
              }

              .count {
                color: #999;
                margin-top: 0.3rem;
                font-size: 1rem;
              }
            }


          }

          i {
            position: absolute;
            top: 50%;
            right: 0;
            opacity: 0;
            color: #666;
            transition: all 0.5s;
          }

          &:hover {
            i {
              opacity: 1;
              cursor: pointer;

            }
          }
        }
      }

      .footer {
        position: absolute;
        bottom: 0;
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 20%;
        padding: 0 3rem;
        align-items: center;
        background: #f8f8f8;

        ul {
          text-align: start;

          li {
            &:last-child {
              font-size: 18px;
              color: $priceColor;
            }
          }
        }

        .el-form-item {
          margin-bottom: 0;
        }
      }


    }

    &::before {
      content: "";
      position: absolute;
      right: 0.9rem;
      top: -0.7rem;
      width: 1.25rem;
      height: 1.25rem;
      background: #fff;
      transform: scale(0.6, 1) rotate(45deg);
      // box-shadow: -0.2rem -0.2px 0.3rem rgba(0, 0, 0, 0.1);
      border-top: rgb(223, 218, 218) solid 0.1rem;
      border-left: rgb(223, 218, 218) solid 0.1rem;
    }
  }
}
</style>@/stores/CartStore