import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from "@/apis/layout.js"

export const useCategoryStore = defineStore('category', () => {
//将导航栏列表数组变成响应式
const categoryList = ref([])
//调用API方法并且赋值
const getCategory = async () => {
  const res = await getCategoryAPI()
  categoryList.value = res.result
}
return {
  categoryList,
  getCategory
}
})