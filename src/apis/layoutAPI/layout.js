import httpInstance from "@/utils/http";
//获取导航栏列表
export function getCategoryAPI(){
  return httpInstance({
    url:"/home/category/head",
  })
}