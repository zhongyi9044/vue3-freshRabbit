import httpInstance from "@/utils/http";

//根据结算数据获取订单数据
export function getOrderAPI (data){
  return httpInstance({
    url:'/member/order',
    method:'POST',
    data
  })
}