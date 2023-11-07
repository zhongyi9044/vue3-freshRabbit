import { defineStore } from 'pinia'
import { getLoginAPI } from '@/apis/loginAPI/getLoginAPI'
import { ref } from 'vue'

export const useUserInfoStore = defineStore('getUserInfo', () => {
  // 1. 定义管理用户数据的state
  const userInfo = ref({})
  // 2. 定义获取接口数据的action函数
  const getUserInfo = async (form) => {
    console.log(form)
    const res = await getLoginAPI(form)
    console.log(res)
    userInfo.value = res.result
  }
  const clearUserInfo = () => {
    userInfo.value = {}
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

