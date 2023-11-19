import httpInstance from "@/utils/http";


//得到数据库最新的购物车信息
export function getCartListAPI (){
  return httpInstance({
    url:'/member/cart',
  })
}