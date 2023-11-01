<script setup>
import layoutFooter from './components/layoutFooter.vue'
import layoutHeader from './components/layoutHeader.vue'
import layoutNav from './components/layoutNav.vue'
import layoutFixed from './components/layoutFixed.vue';

//触发导航栏列表方法 action
import { useCategoryStore } from '@/stores/HomeCategory.js'
import { onMounted } from 'vue';
const categoryStore=useCategoryStore()
onMounted(()=>{
  categoryStore.getCategory()
})

</script>

<template>
  <layout-fixed></layout-fixed>
  <layout-nav></layout-nav>
  <layout-header></layout-header>
  <router-view></router-view>
  <layout-footer></layout-footer>
</template>@/stores/HomeCategory.js