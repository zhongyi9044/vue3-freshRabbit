import httpInstance from "@/utils/http";

//购物车页面全选的勾选按钮改变选中状态的接口
export function changeAllCheckAPI(data) {
  return httpInstance({
    url: '/member/cart/selected',
    method: 'PUT',
    data: {
      selected: data.selected,
      //商品skuId的集合
      ids: data.allSkuIds
    }
  })
}