import httpInstance from "@/utils/http";

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