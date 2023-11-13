<script setup>
import { useDetailGoodsStore } from '@/stores/DetailStore';
const detailGoodsStore = useDetailGoodsStore()
</script>
<!-- 
            错误原因：goods一开始{}  {}.categories -> undefined  -> undefined[1]
            1. 可选链的语法?. 
            2. v-if手动控制渲染时机 保证只有数据存在才渲染
           -->
<template>
  <div class="bread-container" v-if="detailGoodsStore.detailGoods.details">
    <el-breadcrumb separator=">">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: `/category/${detailGoodsStore.detailGoods.categories[1].id}` }">
        {{ detailGoodsStore.detailGoods.categories[1].name }}
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: `/category/sub/${detailGoodsStore.detailGoods.categories[0].id}` }">
        {{
          detailGoodsStore.detailGoods.categories[0].name
        }}
      </el-breadcrumb-item>
      <el-breadcrumb-item>{{
        detailGoodsStore.detailGoods.name
      }}</el-breadcrumb-item>
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
</style>@/stores/DetailStore