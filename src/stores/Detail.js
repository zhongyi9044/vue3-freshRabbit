import { getDetailGoodsAPI } from '@/apis/Detail/getDetailGoodsAPI'
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDetailGoodsStore = defineStore('detail', () => {
  const detailGoods = ref({})
  const getDetailGoods = async (id) => {
    const res = await getDetailGoodsAPI(id)
    detailGoods.value = res.result
  }

  return {
    detailGoods,
    getDetailGoods
  }
})


