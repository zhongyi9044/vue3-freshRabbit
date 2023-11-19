import httpInstance from "@/utils/http";

//删除数据库商品
export function deleteCartAPI (ids){
  return httpInstance({
    url:'/member/cart',
    method:'DELETE',
    data:{
      ids
    }
  })
}