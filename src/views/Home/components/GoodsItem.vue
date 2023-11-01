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
    <img v-img-lazy="goods.picture" alt="" />
    <p class="name ellipsis">{{ goods.name }}</p>
    <p class="desc ellipsis">{{ goods.desc }}</p>
    <p class="price">&yen;{{ goods.price }}</p>
  </RouterLink>
</template>

<style scoped lang="scss">
p {
  padding-top: .625rem;
}

.name {
  font-size: 1rem;
}

.desc {
  color: #999;
  height: 1.8125rem;
}

.price {
  color: $priceColor;
  font-size: 1.25rem;
}
</style>