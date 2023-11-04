import httpInstance from '@/utils/http'

export function getDetailGoodsAPI(id){
  return httpInstance({
    url: '/goods',
    params: {
      id
    }
  })
}