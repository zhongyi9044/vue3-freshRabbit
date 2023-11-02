import { getSubCategoryAPI } from '@/apis/subCategoryAPI/getSubCategoryAPI'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

export function useSubCategoryDate() {
  const subCategoryData = ref({})
  const route = useRoute()
  const getSubCategory = async () => {
    const res = await getSubCategoryAPI(route.params.id)
    subCategoryData.value = res.result
  }
  onMounted(() => { getSubCategory() })
  return{
    subCategoryData
  }
}

