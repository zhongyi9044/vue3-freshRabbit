<script setup>

//使用composables文件夹进行js代码管理
import { useGetBanner } from '../composables/useGetBanner';
const {bannerList}=useGetBanner();
// import { getBannerAPI } from "@/apis/homeAPI/banner.js";
// import { ref, onMounted } from "vue";
// const bannerList = ref([]);
// const getBanner = async () => {
//   const res = await getBannerAPI('2')
//   bannerList.value = (res).result;
// }
// onMounted(() => getBanner())
</script>

<template>
  <div class="home-banner">
    <el-carousel height="31.5rem">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped lang="scss">
.home-banner {
  padding: 0rem 10rem;
  background-color: #fff;
  height: 31.5rem;
  z-index: 98;

  img {
    height: 31.5rem;
    // padding-bottom: 0.5rem;
    width: 100%;
  }
}
</style>