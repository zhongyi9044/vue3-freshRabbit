import httpInstance from "@/utils/http";

export function getGoodsAPI(){
  return httpInstance({
    url:"/home/goods",
  })
}