//引入删除数据库商品API
import { deleteCartAPI } from '@/apis/cartAPI/deleteCartAPI'
//引入获取数据库最新购物车数据API
import { getCartListAPI } from '@/apis/cartAPI/getCartListAPI'
//引入添加商品到数据库API
import { inserCartAPI } from '@/apis/cartAPI/inserCartAPI'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
//引入用户登陆信息
import { useUserInfoStore } from './loginUserStore'
//引入修改商品选中状态API
import { changeCheckAPI } from '@/apis/cartAPI/changeCheckAPI'
//引入修改全选状态API
import { changeAllCheckAPI } from '@/apis/cartAPI/changeAllCheckAPI'

export const useCartListStore = defineStore('cart', () => {
  const userInfoStore = useUserInfoStore()

  //是否登录
  const isLogin = computed(() => userInfoStore.userInfo.token)
//购物车数组
  const cartList = ref([])

  // const cartListDisSeleted = ref([])

  //购物车商品总数量
  const cartCount = computed(() => {
    return ((cartList.value).reduce((total, item) => {
      return total + item.count
    }, 0))
  })

  //购物车商品总价
  const priceCount = computed(() => {
    return ((cartList.value).reduce((total, item) => {
      return total + item.count * item.price
    }, 0))
  })

  //修改商品选中状态
  const boxchecked = async (skuId, selected) => {
    const item = cartList.value.find((item) => item.skuId === skuId)
    item.selected = selected

    await changeCheckAPI(item)
  }

  //是否全选
  const isAllSelected = computed(() => {
    return cartList.value.every((item) => {
      return item.selected
    })
  })

  //skuId集合
  const allSkuIds = computed(() => {
    return ((cartList.value).map((item) => item.skuId))
  })

  //已选中的商品的总数
  const selectedCount = computed(() => {
    return ((cartList.value).filter((item) => item.selected).reduce((total, item) => {
      return total + item.count
    }, 0))
  })

  //已选中的商品的总价
  const selectedPriceCount = computed(() => {
    return ((cartList.value).filter((item) => item.selected).reduce((total, item) => {
      return total + item.count * item.price
    }, 0))
  })

  //获取最新数据库的购物车数据
  const getNewCartList = async () => {
    const res = await getCartListAPI()
    cartList.value = res.result
  }

  //添加数据到数据库
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

  //删除数据库商品数据
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

  //全选
  const allChecked = async (selected) => {
    cartList.value.forEach((item) => {
      item.selected = selected
    })
    const data = ref({ selected: selected, allSkuIds: allSkuIds.value })
    await changeAllCheckAPI(data.value)
  }

  //清空本地购物车，下一步一般是准备合并数据库购物车
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
