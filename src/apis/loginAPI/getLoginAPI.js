import httpInstance from "@/utils/http";

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