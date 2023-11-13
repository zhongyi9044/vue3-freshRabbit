import httpInstance from "@/utils/http";

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