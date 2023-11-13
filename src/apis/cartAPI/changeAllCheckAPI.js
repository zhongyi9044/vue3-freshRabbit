import httpInstance from "@/utils/http";

export function changeAllCheckAPI(data) {
  return httpInstance({
    url: '/member/cart/selected',
    method: 'PUT',
    data: {
      selected: data.selected,
      ids: data.allSkuIds
    }
  })
}