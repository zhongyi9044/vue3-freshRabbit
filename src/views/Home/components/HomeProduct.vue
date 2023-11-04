<script setup>
import HomePanel from './HomePanel.vue';
import { getGoodsAPI } from '@/apis/homeAPI/getHomeGoodsAPI';
import GoodsItem from './GoodsItem.vue';
import { ref, onMounted } from 'vue';
const goodsList = ref([]);
const getGoods = async () => {
  const res = await getGoodsAPI();
  goodsList.value = res.result
  console.log(res)
}
onMounted(() =>
  getGoods()
)
</script>

<template>
  <div class="box">
    <home-panel :title="item.name" v-for="item in goodsList" :key="item.id">
      <template #main>
        <div class="goods-list">
          <RouterLink class="left" :to="`/category/${item.id}`">
            <img v-img-lazy="item.picture" />
            <strong class="label">
              <span>{{ item.name }}馆</span>
              <span>{{ item.saleInfo }}</span>
            </strong>
          </RouterLink>
          <ul class="right">
            <li v-for="item2 in item.goods" :key="item2.id">
              <GoodsItem :goods="item2" />
            </li>
          </ul>
        </div>
      </template>
    </home-panel>
  </div>
</template>

<style scoped lang="scss">
.box {
  background-color: #fff;
  transition: all .5s;
  width: 100%;

  img{
    &:first-of-type{
      content: url("https://yanxuan-item.nosdn.127.net/0d7d091a10faf1c22027046f517511cf.png?quality=95&thumbnail=610x610&imageView");
    }
  }

  .goods-list {
    display: flex;


    .left {
      flex: 1;
      width: 20rem;
      height: 35rem;
      position: relative;
      margin-right: 3rem;

      &:hover {
        transform: translate3d(0, -3px, 0);
        box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
      }

      img {
        width: 100%;
        height: 100%;

        // &:first-child{
        //   content: url("https://yanxuan-item.nosdn.127.net/0d7d091a10faf1c22027046f517511cf.png?quality=95&thumbnail=610x610&imageView");
        // }
      }

      .label {
        width: 15rem;
        height: 4rem;
        display: flex;
        font-size: 1.125rem;
        color: #fff;
        line-height: 4rem;
        font-weight: normal;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate3d(0, -50%, 0);


        span {
          text-align: center;

          &:first-child {
            width: 4.75rem;
            background: rgba(0, 0, 0, 0.9);
          }

          &:last-child {
            padding: 0 0.2rem;
            background: rgba(0, 0, 0, 0.7);
          }
        }
      }


    }

    .right {
      flex: 2;
      display: flex;
      flex-wrap: wrap;
      margin-left: 2rem;
      // display: none;

      li {
        width: 10rem;
        height: 15rem;
        margin: 0.3rem 2rem;
        margin-right: 0;

        // border:
        &:hover {
          transform: translate3d(0, -3px, 0);
          box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
        }

       

      }
    }
  }
}
</style>@/apis/homeAPI/getHomeGoodsAPI