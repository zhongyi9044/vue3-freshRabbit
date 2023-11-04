//获取轮播图数据
import httpInstance from "@/utils/http";
export function getBannerAPI(distributionSite = '1'){
  return httpInstance({
    url:"/home/banner",
    params: {
      distributionSite
    }
  })
}