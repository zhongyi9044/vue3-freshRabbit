import httpInstance from "@/utils/http";

export function getCartListAPI (){
  return httpInstance({
    url:'/member/cart',
  })
}