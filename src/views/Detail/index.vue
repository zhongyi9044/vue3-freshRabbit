<script setup>
import { useDetailGoodsStore } from '@/stores/Detail.js'
import Breadcrumb from './components/Breadcrumb.vue';
import DetailGoodsMsg from './components/DetailGoodsMsg.vue';
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';

const route = useRoute()
const detailGoodsStore = useDetailGoodsStore()
onMounted(() => { detailGoodsStore.getDetailGoods(route.params.id) })
</script>

<template>
  <breadcrumb></breadcrumb>
  <detail-goods-msg></detail-goods-msg>
</template>