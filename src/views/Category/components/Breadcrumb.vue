<script setup>
// import { ArrowRight } from '@element-plus/icons-vue'
// import { getCategoryAPI } from '@/apis/categoryAPI/getCategoryAPI';
// import { ref, onMounted } from 'vue'
// import { useRoute } from 'vue-router';

//使用composables文件夹进行js代码管理
import { useCategoryStore } from '@/stores/CategoryCategory.js'
const categoryStore=useCategoryStore()
</script>


<template>
  <div class="top-category">
    <el-breadcrumb separator=">">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>{{ categoryStore.categoryData.name }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<style scoped lang="scss">
.top-category {
  padding: 1rem 10rem;
  background-color: #fff;

  span {
    font-size: 1.5rem;
  }

}
</style>
