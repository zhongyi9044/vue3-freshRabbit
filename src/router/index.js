//createRouter 创建路由实例
//createWebHistory 创建history路由模式
import { createRouter, createWebHistory } from 'vue-router'

//导入需要路由的组件
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      name: 'layout',
      children: [
        {
          path: '',
          component: Home,
          name: 'home',
        },
        {
          path: 'category/:id',
          component: Category,
          name: 'category',
        },
        {
          path: 'category/sub/:id',
          component: SubCategory,
          name: 'subCategory',
        },
      ]
    },
    {
      path: '/login',
      component: Login,
      name: 'login',
    }
  ],
  scrollBehavior() {
    return {
      top: 0
    }
  }
})

export default router
