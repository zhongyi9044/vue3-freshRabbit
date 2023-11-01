<script setup>
import HomeCategory from './components/HomeCategory.vue';
import HomeBanner from './components/HomeBanner.vue';
import HomeNew from './components/HomeNew.vue';
import HomeHot from './components/HomeHot.vue';
import HomeProduct from './components/HomeProduct.vue';
</script>

<template>
  <div class="hometop">
    <home-category></home-category>
    <home-banner></home-banner>
  </div>
  <home-new></home-new>
  <home-hot></home-hot>
  <home-product></home-product>
</template>

<style scoped lang="scss">
.hometop{
  display:flex;
  // justify-content: center;
  padding:2rem 10rem;
  background-color: #fff;
}
</style>