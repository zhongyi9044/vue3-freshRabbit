<script setup>
defineProps({
  goods: {
    typeof: Object,
    default: {}
  }
})
</script>

<template>
  <RouterLink to="/" class="goods-item">
    <img :src="goods.picture" alt="" />
    <p class="name ellipsis">{{ goods.name }}</p>
    <p class="desc ellipsis">{{ goods.desc }}</p>
    <p class="price">&yen;{{ goods.price }}</p>
  </RouterLink>
</template>

<style scoped lang="scss">
p {
  padding-top: 10px;
}

.name {
  font-size: 16px;
}

.desc {
  color: #999;
  height: 29px;
}

.price {
  color: $priceColor;
  font-size: 20px;
}
</style>