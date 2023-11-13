<script setup>
import Breadcrumb from './components/breadcrumb.vue'
import CategoryBanner from './components/CategoryBanner.vue'
import CategoryAll from './components/CategoryAll.vue'

import { useRoute } from 'vue-router';
import { useCategoryStore } from '@/stores/CategoryCategoryStore.js'
import { onMounted } from 'vue';

//在index页调用，进行pinia管理
const route = useRoute()
const categoryStore=useCategoryStore()
onMounted(()=>{
  categoryStore.getCategory(route.params.id)
})

</script>


<template>
  <breadcrumb></breadcrumb>
  <category-banner></category-banner>
  <category-all></category-all>
</template>

<style scoped lang="scss">

</style>

@/stores/CategoryCategoryStore.js