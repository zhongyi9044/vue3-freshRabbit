import httpInstance from "@/utils/http";
// 获取二级分类商品列表
export function getSubGoodsListAPI(data){
  return httpInstance({
    url:'/category/goods/temporary',
    method:'POST',
    data:data
  })
}