import httpInstance from "@/utils/http";
//获取新鲜好物数据
export function getNewAPI(){
  return httpInstance({
    url:"/home/new",
  })
}