//一级分类的管理

import { getCategoryAPI } from '@/apis/categoryAPI/getCategoryAPI';
import { ref} from 'vue'
import { defineStore } from 'pinia'

export const useCategoryStore = defineStore('CategoryCategory', () => {
  const categoryData = ref({})
  const getCategory = async (id) => {
    const res = await getCategoryAPI(id)
    categoryData.value = res.result;
  }

  //导出数据和方法
  return {
    categoryData,
    getCategory
  }
})