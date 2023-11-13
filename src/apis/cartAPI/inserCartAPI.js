import httpInstance from "@/utils/http";

export function inserCartAPI (data){
  return httpInstance({
    url:'/member/cart',
    method:'POST',
    data:{
      skuId:data.skuId,
      count:data.count,
    }
  })
}