import httpInstance from "@/utils/http";

export function createBillingAPI(){
  return httpInstance({
    url:'/member/order/pre'
  })
}