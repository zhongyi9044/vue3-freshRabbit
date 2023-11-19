import httpInstance from "@/utils/http";

export function getFavoriteAPI({ limit = 4 }) {
  return httpInstance({
    url: '/goods/relevant',
    params: {
      limit
    }
  })
}