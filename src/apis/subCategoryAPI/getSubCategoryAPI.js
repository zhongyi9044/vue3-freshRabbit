import httpInstance from "@/utils/http";
// 获取二级分类列表
export function getSubCategoryAPI(id){
  return httpInstance({
    url: '/category/sub/filter',
    params: {
      id
    }
  })
}