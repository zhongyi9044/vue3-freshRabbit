import httpInstance from "@/utils/http";

//获取商品详情页的热门系列
export function getDetailHotAPI({id,type,limit=3}){
  return httpInstance({
    url:'/goods/hot',
    params:{
      id, 
      type, 
      limit
    }
  })
}