import httpInstance from "@/utils/http";

//获取订单数据获取订单详情
export function getOrderSubAPI (id){
  return httpInstance({
    url: `/member/order/${id}`
  })
}