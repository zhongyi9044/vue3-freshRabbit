import httpInstance from "@/utils/http";

//添加商品到数据库
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