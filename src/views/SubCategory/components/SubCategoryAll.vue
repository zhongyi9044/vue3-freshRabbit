<script setup>
// import { getSubGoodsListAPI } from '@/apis/subCategoryAPI/getSubGoodsListAll'
// import { ref, onMounted } from 'vue'
// import { useRoute } from 'vue-router'
import GoodsItem from '@/views/Home/components/GoodsItem.vue';
// import { disableValidation } from 'schema-utils';
// const route = useRoute()
// const goodsList = ref([])
// const reqData = ref({
//   categoryId: route.params.id,
//   page: 1,
//   pageSize: 20,
//   sortField: 'publishTime'
// })
// const getSubGoodsList = async () => {
//   const res = await getSubGoodsListAPI(reqData.value)
//   goodsList.value = res.result.items
//   console.log(goodsList.value)
// }
// onMounted(() => getSubGoodsList())

// const tabChange = () => {
//   // console.log('tab切换了', reqData.value.sortField)
//   reqData.value.page = 1
//   getSubGoodsList()
// }
// const disabled=ref(false)
// const load=async()=>{
//   reqData.value.page++
//   const res=await getSubGoodsListAPI(reqData.value)
//   goodsList.value=[...goodsList.value,...res.result.items]
//   if(res.result.items.length===0){
//     disableValidation.value=true
//     disabled.value=disabled
//   }
// }

//用composables文件夹进行js代码管理
import { useSubCategoryAll } from '../composables/useSubCategoryAll.js'
const { goodsList, reqData, tabChange, load, disabled } = useSubCategoryAll()

</script>

<template>
  <div class="sub-container">
    <el-tabs v-model="reqData.sortField" type="card" class="demo-tabs" @tab-click="tabChange">
      <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
      <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
      <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
    </el-tabs>
    <div class="body" v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
      <!-- 商品列表-->
      <div class="body-list" v-for="item in goodsList" :key="item.id">
        <goods-item :goods="item"></goods-item>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.sub-container {
  background-color: #fff;
  padding: 0 10rem;

  .body {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .body-list {
      width: 15%;

      a {
        display: block;
      }

    }
  }

}
</style>