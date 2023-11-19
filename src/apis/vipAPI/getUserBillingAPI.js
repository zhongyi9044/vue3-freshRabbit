import httpInstance from "@/utils/http"

export const getUserBillingAPI = (params) => {
  return httpInstance({
    url:'/member/order',
    method:'GET',
    params
  })
}