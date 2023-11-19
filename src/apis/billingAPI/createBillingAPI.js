import httpInstance from "@/utils/http";

//获取结算页的接口，会根据登陆账号提供地址，已勾选商品列表等
export function createBillingAPI(){
  return httpInstance({
    url:'/member/order/pre'
  })
}