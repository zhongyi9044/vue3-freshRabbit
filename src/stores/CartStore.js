import { deleteCartAPI } from '@/apis/cartAPI/deleteCartAPI'
import { getCartListAPI } from '@/apis/cartAPI/getCartListAPI'
import { inserCartAPI } from '@/apis/cartAPI/inserCartAPI'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useUserInfoStore } from './loginUserStore'
import { changeCheckAPI } from '@/apis/cartAPI/changeCheckAPI'
import { changeAllCheckAPI } from '@/apis/cartAPI/changeAllCheckAPI'

export const useCartListStore = defineStore('cart', () => {
  const userInfoStore = useUserInfoStore()
  const isLogin = computed(() => userInfoStore.userInfo.token)

  const cartList = ref([])

  // const cartListDisSeleted = ref([])

  const cartCount = computed(() => {
    return ((cartList.value).reduce((total, item) => {
      return total + item.count
    }, 0))
  })

  const priceCount = computed(() => {
    return ((cartList.value).reduce((total, item) => {
      return total + item.count * item.price
    }, 0))
  })

  const boxchecked = async (skuId, selected) => {
    const item = cartList.value.find((item) => item.skuId === skuId)
    item.selected = selected

    await changeCheckAPI(item)
  }

  const isAllSelected = computed(() => {
    return cartList.value.every((item) => {
      return item.selected
    })
  })

  const allSkuIds = computed(() => {
    return ((cartList.value).map((item) => item.skuId))
  })

  const selectedCount = computed(() => {
    return ((cartList.value).filter((item) => item.selected).reduce((total, item) => {
      return total + item.count
    }, 0))
  })

  const selectedPriceCount = computed(() => {
    return ((cartList.value).filter((item) => item.selected).reduce((total, item) => {
      return total + item.count * item.price
    }, 0))
  })

  const getNewCartList = async () => {
    const res = await getCartListAPI()
    cartList.value = res.result
  }

  const addGodds = async (goods) => {
    if (isLogin.value) {
      await inserCartAPI(goods)
      getNewCartList()
    } else {
      //寻找购物车里是否本来存在此商品，并且赋值
      const existedGoods = cartList.value.find((item) => goods.skuId === item.skuId)
      if (existedGoods) {
        // 存在
        existedGoods.count += goods.count;
      } else {
        // 不存在
        cartList.value.push(goods)
      }
    }
  }

  const deleteGoods = async (skuId) => {
    if (isLogin.value) {
      await deleteCartAPI([skuId])
      getNewCartList()
    } else {
      // 1. 找到要删除项的下标值 - splice
      // 2. 使用数组的过滤方法 - filter
      const idx = cartList.value.findIndex((item) => skuId === item.skuId)
      cartList.value.splice(idx, 1)
    }

  }

  const allChecked = async (selected) => {
    cartList.value.forEach((item) => {
      item.selected = selected
    })
    const data = ref({ selected: selected, allSkuIds: allSkuIds.value })
    await changeAllCheckAPI(data.value)
  }

  const clearCartList = () => {
    cartList.value = []
  }

  return {
    cartList,
    // cartListDisSeleted,
    cartCount,
    priceCount,
    boxchecked,
    isAllSelected,
    selectedCount,
    selectedPriceCount,
    getNewCartList,
    addGodds,
    deleteGoods,
    allChecked,
    clearCartList,
    allSkuIds
  }
}, {
  persist: true,
})
