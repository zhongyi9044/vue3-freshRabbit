<script setup>
// import {getSubCategoryAPI} from '@/apis/subCategoryAPI/getSubCategoryAPI'
// import {ref,onMounted} from 'vue'
// import {useRoute} from 'vue-router'
// const subCategoryData=ref({})
// const route=useRoute()
// const getSubCategory=async ()=>{
//   const res=await getSubCategoryAPI(route.params.id)
//   subCategoryData.value=res.result
//   console.log(subCategoryData.value)
// }

// onMounted(()=>{getSubCategory()})

//用composables文件夹进行js代码管理
import {useSubCategoryDate} from '@/views/SubCategory/composables/useSubCategoryDate'
const {subCategoryData}=useSubCategoryDate()
</script>

<template>
  <!-- 面包屑 -->
  <div class="bread-container">
    <el-breadcrumb separator=">">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: `/category/${ subCategoryData.parentId}` }">{{ subCategoryData.parentName }}
      </el-breadcrumb-item>
      <el-breadcrumb-item>{{subCategoryData.name}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<style scoped lang="scss">
.bread-container {
  padding: 1rem 10rem;
  background-color: #fff;

  span {
    font-size: 1.5rem;
  }

}
</style>


@/apis/subCategoryAPI/getSubCategoryAPI