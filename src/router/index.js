//createRouter 创建路由实例
//createWebHistory 创建history路由模式
import { createRouter, createWebHistory } from 'vue-router'

//导入需要路由的组件
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component:Layout,
      children:[
        {
          path:'',
          component:Home,
        },
        {
          path:'/category',
          component:Category
        }
    ]
    },
    {
      path:'/login',
      component:Login
    }
  ]
})

export default router
