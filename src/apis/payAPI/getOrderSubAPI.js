import httpInstance from "@/utils/http";

export function getOrderSubAPI (id){
  return httpInstance({
    url: `/member/order/${id}`
  })
}