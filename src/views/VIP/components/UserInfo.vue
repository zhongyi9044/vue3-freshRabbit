<script setup>
import { getFavoriteAPI } from '@/apis/vipAPI/getFavoriteAPI'
import { useUserInfoStore } from '@/stores/loginUserStore';
import GoodsItem from '@/views/Home/components/GoodsItem.vue'
import { onMounted, ref } from 'vue';
const userInfoStore = useUserInfoStore()
const favoriteList = ref([])
const getFavoriteList = async () => {
  const res = await getFavoriteAPI({})
  favoriteList.value = res.result
}

onMounted(() => getFavoriteList())

</script>

<template>
  <div class="top">
    <ul class="left">
      <li><img :src="userInfoStore.userInfo?.avatar" alt=""></li>
      <h4>{{ userInfoStore.userInfo?.account }}</h4>
    </ul>
    <ul class="right">
      <li>
        <div class="iconfont icon-huiyuan1"></div><span>会员中心</span>
      </li>
      <li>
        <div class="iconfont icon-shezhi"></div><span>安全设置</span>
      </li>
      <li>
        <div class="iconfont icon-dizhi"></div><span>地址管理</span>
      </li>
    </ul>
  </div>
  <div class="foot">
    <div class="title">猜你喜欢</div>
    <ul>
      <li v-for="item in favoriteList" :key="item.id">
        <goods-item :goods="item"></goods-item>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.foot {
  .title {
    margin: 1rem 2rem;
    font-weight: 600;
    font-size: 1.5rem;
  }

  ul {
    display: flex;
    width: 100%;
    flex-wrap: wrap;

    li {
      flex: 1;
      width: 18%;
      padding: 0 1rem;
    }
  }
}

.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: url(@/assets/image/center-bg.png) no-repeat center / cover;
  height: 7rem;

  .left {
    flex: 1;
    display: flex;
    align-items: center;

    li {

      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      overflow: hidden;
      margin: 0 3.5rem;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  .right {
    flex: 1;
    display: flex;
    justify-content: space-between;

    li {
      text-align: center;
      font-weight: 550;
      color: #fff;

      div {
        font-size: 2rem;

      }

      span {
        font-size: 0.9rem;
      }


      &:last-child {
        margin-right: 1rem;
      }
    }
  }
}
</style>@/apis/vip/getFavoriteAPI@/apis/vipAPI/getFavoriteAPI