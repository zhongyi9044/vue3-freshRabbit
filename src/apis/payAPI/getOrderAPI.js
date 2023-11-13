import httpInstance from "@/utils/http";

export function getOrderAPI (data){
  return httpInstance({
    url:'/member/order',
    method:'POST',
    data
  })
}