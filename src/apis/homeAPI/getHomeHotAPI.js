import httpInstance from "@/utils/http";
//获取热门好物数据
export function getHotAPI(){
  return httpInstance({
    url:"/home/hot",
  })
}