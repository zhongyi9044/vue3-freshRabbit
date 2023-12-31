//Home页的分类管理

import { ref } from 'vue'
//获取导航栏数组的pinia管理方法
import { defineStore } from 'pinia'
import { getCategoryAPI } from "@/apis/layoutAPI/layout.js"

export const useCategoryStore = defineStore('homeCategory', () => {
//将导航栏列表数组变成响应式
const categoryList = ref([])
//调用API方法并且赋值
const getCategory = async () => {
  const res = await getCategoryAPI()
  categoryList.value = res.result
}
//导出数据和方法
return {
  categoryList,
  getCategory
}
})
