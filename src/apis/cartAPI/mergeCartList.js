import httpInstance from "@/utils/http";

export function mergeCartAPI (data){
  return httpInstance({
    url:'/member/cart/merge',
    method:'POST',
    data
  })
}