//createRouter 创建路由实例
//createWebHistory 创建history路由模式
import { createRouter, createWebHistory } from 'vue-router'

//导入需要路由的组件
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import Detail from '@/views/Detail/index.vue'
import Cart from '@/views/Cart/index.vue';
import Billing from '@/views/Billing/index.vue'
import Pay from '@/views/Pay/index.vue'
import PayBack from '@/views/Pay/PayBack.vue'
import VIP from '@/views/VIP/index.vue'
import UserInfo from '@/views/VIP/components/UserInfo.vue'
import MyBilling from '@/views/VIP/components/MyBilling.vue'

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
        {
          path: 'detail/:id',
          component: Detail,
          name: 'detail'
        },
        {
          path: 'cart',
          component: Cart,
          name: 'cart'
        },
        {
          path: 'billing',
          component: Billing,
          name: 'billing',
        },
        {
          path: 'pay',
          component: Pay,
          name: 'pay'
        },
        {
          path: 'payback',
          component: PayBack,
          name: 'payBack'
        },
        {
          path: 'vip',
          component: VIP,
          name: 'vip',
          children: [
            {
              path: '',
              component: UserInfo,
              name: 'userInfo_',
            },
            {
              path: '',
              component: UserInfo,
              name: 'userInfo',
            },
            {
              path: 'myBilling',
              component: MyBilling,
              name: 'myBilling',
            }
          ]
        }
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
