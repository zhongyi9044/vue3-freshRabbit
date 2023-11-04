<script setup>
import {getBannerAPI} from "@/apis/homeAPI/getHomeBannerAPI.js";
import {ref,onMounted} from "vue";
const bannerList=ref([]);
const getBanner=async()=>{
  const res=await getBannerAPI()
  bannerList.value=(res).result;
}
onMounted(()=>getBanner())
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
  width: 66rem;
  height: 31.5rem;
  z-index: 98;

  img {
    height: 31.5rem;
    // padding-bottom: 0.5rem;
  }
}
</style>@/apis/homeAPI/banner.js