<script setup>
// import XtxSku from '@/components/XtxSku/index.vue'
// import imageView from '@/components/ImageView.vue';
import DetailHot from './DetailHot.vue';
import { useDetailGoodsStore } from '@/stores/Detail';
import { onBeforeRouteUpdate } from 'vue-router';
const detailGoodsStore = useDetailGoodsStore()
onBeforeRouteUpdate((to) => {
  detailGoodsStore.getDetailGoods(to.params.id)
})
</script>

<template>
  <!-- 商品信息 -->
  <div class="info-container" v-if="detailGoodsStore.detailGoods.details">
    <!-- 顶部关于商品的一些信息 -->
    <div class="goods-all">
      <div class="goods-top">
        <!-- 商品售卖信息等 -->
        <div class="goods-info">
          <!-- 图片预览区 -->
          <xtx-image-view :image-list="detailGoodsStore.detailGoods.mainPictures"></xtx-image-view>
          <!-- 统计数量 -->
          <ul class="goods-count">
            <li>
              <p>销量人气</p>
              <p> {{ detailGoodsStore.detailGoods.salesCount }}+ </p>
              <p><i class="iconfont icon-renqi"></i>销量人气</p>
            </li>
            <li>
              <p>商品评价</p>
              <p>{{ detailGoodsStore.detailGoods.commentCount }}+</p>
              <p><i class="iconfont icon-pingjia"></i>查看评价</p>
            </li>
            <li>
              <p>收藏人气</p>
              <p>{{ detailGoodsStore.detailGoods.collectCount }}+</p>
              <p><i class="iconfont icon-shoucang"></i>收藏商品</p>
            </li>
            <li>
              <p>品牌信息</p>
              <p>{{ detailGoodsStore.detailGoods.brand.name }}</p>
              <p><i class="iconfont icon-shouye"></i>品牌主页</p>
            </li>
          </ul>
        </div>

        <!-- 商品价格介绍等 -->
        <div class="goods-intr">
          <!-- 商品信息区 -->
          <p class="goods-name"> {{ detailGoodsStore.detailGoods.name }} </p>
          <p class="goods-desc">{{ detailGoodsStore.detailGoods.desc }} </p>
          <p class="goods-price">
            <span>￥{{ detailGoodsStore.detailGoods.price }}</span>
            <span>￥{{ detailGoodsStore.detailGoods.oldPrice }}</span>
          </p>
          <div class="goods-service">
            <dl>
              <dt>促销</dt>
              <dd>12月好物放送,App领券购买直降120元</dd>
            </dl>
            <dl>
              <dt>服务</dt>
              <dd>
                <span>无忧退货</span>
                <span>快速退款</span>
                <span>免费包邮</span>
                <a href="/">了解详情</a>
              </dd>
            </dl>
          </div>
          <!-- sku组件 -->
          <xtx-sku :goods="detailGoodsStore.detailGoods"></xtx-sku>
          <!-- 数据组件 -->

          <!-- 按钮组件 -->
          <div>
            <el-button size="large" class="btn">
              加入购物车
            </el-button>
          </div>

        </div>
      </div>

      <!-- 底部关于商品的详细情况 -->
      <div class="goods-footer">
        <div class="goods-article">
          <!-- 商品详情 -->
          <div class="goods-tabs">
            <nav>
              <a>商品详情</a>
            </nav>
            <div class="goods-detail">
              <!-- 属性 -->
              <ul class="attrs">
                <li v-for="item in detailGoodsStore.detailGoods.details.properties" :key="item.value">
                  <span class="dt">{{ item.name }}</span>
                  <span class="dd">{{ item.value }}</span>
                </li>
              </ul>
              <!-- 图片 -->
              <img v-for="img in detailGoodsStore.detailGoods.details.pictures" :src="img" :key="img" alt="">
            </div>
          </div>
        </div>
        <!-- 24热榜+专题推荐 -->
        <div class="goods-aside">
          <!-- 24小时热榜 -->
          <detail-hot :type="1"></detail-hot>
          <!-- 周热榜 -->
          <detail-hot :type="2"></detail-hot>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.info-container {
  background-color: #fff;
  padding: 1rem 10rem;

  .goods-all {


    .goods-top {
      height: 40rem;
      display: flex;

      .goods-info {
        flex: 1;
        text-align: center;
        position: relative;

        .goods-count {
          display: flex;
          justify-content: center;
          position: absolute;
          // margin-left: 3rem;

          li {
            border-left: .0625rem solid #e4e4e4;
            padding: 0 1rem;

            &:first-child {
              border: none;
            }

            p {
              &:first-child {
                color: #666;
                font-size: 1.5rem;

              }

              &:nth-child(2) {
                margin: 0.4rem 0;
                color: red;
              }
            }

            i {
              color: $xtxColor;
            }
          }
        }
      }

      .goods-intr {
        margin-left: 2rem;
        flex: 1;
        text-align: left;

        .goods-name {
          font-size: 22px;
        }

        .goods-desc {
          color: #999;
          margin-top: 0.5rem;
        }

        .goods-price {
          margin-top: 0.5rem;

          span {

            &:first-child {
              color: $priceColor;
              margin-right: 0.6rem;
              font-size: 1.4rem;
            }

            &:last-child {
              color: #999;
              text-decoration: line-through;
              font-size: 1rem;
            }
          }

        }

        .goods-service {
          background-color: #f5f5f5;
          padding: 1.3rem 0.6rem 0 0.6rem;
          margin-top: 0.6rem;

          dl {
            padding-bottom: 1.3rem;
            display: flex;
            align-items: center;

            dt {
              width: 3rem;
            }

            dd {
              color: #666;

              span {
                margin-right: 0.6rem;

                &::before {
                  content: "•";
                  color: $xtxColor;
                  margin-right: 0.1rem;
                }
              }

              a {
                color: $xtxColor;
              }
            }
          }
        }

        .btn {
          margin-top: 0.6rem;
        }
      }
    }
  }

  .goods-footer {
    display: flex;
    justify-content: center;

    .goods-article {

      .goods-tabs {
        min-height: 36rem;

        nav {
          height: 4.5rem;
          line-height: 4.5rem;
          // display: flex;
          border-bottom: 0.05rem solid #f5f5f5;
          padding: 0 2.5rem;

          a {

            font-size: 1.2rem;
            position: relative;

            // >span {
            //   color: $priceColor;
            //   font-size: 16px;
            //   margin-left: 10px;
            // }
          }
        }

        .goods-detail {
          padding: 0 2.5rem;

          .attrs {
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 1.8rem;

            li {
              display: flex;
              width: 50%;
              margin-bottom: 0.6rem;

              .dt {
                width: 100px;
                color: #999;
              }

              .dd {
                flex: 1;
                color: #666;
              }
            }


          }
        }
      }
    }

  }
}
</style>