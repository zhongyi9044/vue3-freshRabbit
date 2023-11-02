import { getSubGoodsListAPI } from '@/apis/subCategoryAPI/getSubGoodsListAll'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { disableValidation } from 'schema-utils'

export function useSubCategoryAll() {
  const route = useRoute()
  const goodsList = ref([])
  const reqData = ref({
    categoryId: route.params.id,
    page: 1,
    pageSize: 20,
    sortField: 'publishTime'
  })
  const getSubGoodsList = async () => {
    const res = await getSubGoodsListAPI(reqData.value)
    goodsList.value = res.result.items
    console.log(goodsList.value)
  }
  onMounted(() => getSubGoodsList())

  //element的tab组件事件
  const tabChange = () => {
    // console.log('tab切换了', reqData.value.sortField)
    reqData.value.page = 1
    getSubGoodsList()
  }
  const disabled = ref(false)
  const key = ref(false)

  //element的底部加载新数据事件
  const load = async () => {
    if (key.value === false) {
      key.value = true
      reqData.value.page++
      const res = await getSubGoodsListAPI(reqData.value)
      console.log(reqData.value.page)
      goodsList.value = [...goodsList.value, ...res.result.items]
      if (res.result.items.length === 0) {
        disableValidation.value = true
        disabled.value = disabled
      }
      key.value = false
    }
  }

  return {
    goodsList,
    reqData,
    tabChange,
    load,
    disabled
  }
}