//获取轮播图数据
import httpInstance from "@/utils/http";
export function getBannerAPI(){
  return httpInstance({
    url:"/home/banner",
  })
}