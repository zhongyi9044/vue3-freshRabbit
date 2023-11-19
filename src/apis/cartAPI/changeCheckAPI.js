import httpInstance from "@/utils/http";

//购物车页面商品的勾选按钮改变选中状态的接口
export function changeCheckAPI(item) {
  return httpInstance({
    url: `/member/cart/${item.skuId}`,
    method: 'PUT',
    data: {
      selected: item.selected,
      count: item.count
    }
  })
}