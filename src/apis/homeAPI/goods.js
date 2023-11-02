import httpInstance from "@/utils/http";
//获取商品列表
export function getGoodsAPI(){
  return httpInstance({
    url:"/home/goods",
  })
}