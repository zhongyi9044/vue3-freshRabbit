import httpInstance from "@/utils/http";

export function deleteCartAPI (ids){
  return httpInstance({
    url:'/member/cart',
    method:'DELETE',
    data:{
      ids
    }
  })
}