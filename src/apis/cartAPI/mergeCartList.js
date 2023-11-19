import httpInstance from "@/utils/http";

//在登录之后，把购物车的商品和数据库的商品合并
export function mergeCartAPI (data){
  return httpInstance({
    url:'/member/cart/merge',
    method:'POST',
    data
  })
}