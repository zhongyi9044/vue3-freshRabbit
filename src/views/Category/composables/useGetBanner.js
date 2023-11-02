//banner组件的js代码管理

import { getBannerAPI } from "@/apis/homeAPI/banner.js";
import { ref, onMounted } from "vue";

export function useGetBanner() {
  const bannerList = ref({});
  const getBanner = async () => {
    const res = await getBannerAPI('2')
    bannerList.value = (res).result;
  }
  onMounted(() => getBanner())
  return {
    bannerList
  }
}

