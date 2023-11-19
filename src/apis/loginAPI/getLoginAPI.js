import httpInstance from "@/utils/http";

//根据用户名密码进行登录验证
export function getLoginAPI(data) {
  return httpInstance({
    url: "/login",
    method: 'POST',
    data: {
      account: data.name,
      password: data.password
    }
  })
}