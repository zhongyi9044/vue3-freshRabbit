import { defineStore } from 'pinia'
import { getLoginAPI } from '@/apis/loginAPI/getLoginAPI'
import { mergeCartAPI } from '@/apis/cartAPI/mergeCartList'
import { ref } from 'vue'
import { useCartListStore } from './CartStore'

export const useUserInfoStore = defineStore('loginUser', () => {
  const cartListStore = new useCartListStore

  // 1. 定义管理用户数据的state
  const userInfo = ref({})
  // 2. 定义获取接口数据的action函数
  const getUserInfo = async (form) => {
    const res = await getLoginAPI(form)
    userInfo.value = res.result
    await mergeCartAPI(cartListStore.cartList.map((item) => {
      return {
        skuId: item.skuId,
        selected: item.selected,
        count: item.count
      }
    }))
    cartListStore.getNewCartList()
  }
  const clearUserInfo = () => {
    userInfo.value = {}
    cartListStore.clearCartList()
  }
  // 3. 以对象的格式把state和action return
  return {
    userInfo,
    getUserInfo,
    clearUserInfo,
  }
}, {
  persist: true,
})

