import 'element-plus/es/components/message/style/css'
import { ElMessage } from 'element-plus'
import { useUserInfoStore } from '@/stores/loginUser'
import  router  from '@/router/index'

//引入axios
import axios from "axios";

//使用create方法设置基础地址，请求最大时间
//create自动实例化axios
const httpInstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})

// 添加请求拦截器
httpInstance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么

  //拼接token
  const userInfoStore = useUserInfoStore()
  const token = userInfoStore.userInfo.token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
httpInstance.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return response.data;
}, function (error) {
  console.log(error)
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么

  //报错提示
  ElMessage({
    message: error.response.data.message,
    type: 'warning',
  })
  if (error.response.status === 401) {
    const userInfoStore = useUserInfoStore()
    userInfoStore.clearUserInfo()
    router.replace({ path: '/login' })
  }
  return Promise.reject(error);
});

export default httpInstance