<script setup>
import { useUserInfoStore } from '@/stores/loginUserStore'
import { useRouter } from 'vue-router'
const userInfoStore = useUserInfoStore()
const router = useRouter()
const logout = () => {
  userInfoStore.clearUserInfo()
  router.replace({ path: '/login' })
}
</script>

<template>
  <!-- 导航栏目 -->
  <div class="navbac">
    <div>
      <!-- 各项导航 -->
      <ul class="nav" v-if="userInfoStore.userInfo.token">
        <li><a href=""><i class=" iconfont icon-yonghu"></i>{{ userInfoStore.userInfo.account }}</a></li>
        <li>
          <el-popconfirm title="确认要退出吗" @confirm="logout" confirm-button-text="确认" cancel-button-text="返回">
            <template #reference>
              <a href="#">退出登录</a>
            </template>
          </el-popconfirm>
        </li>
        <!-- <a href="" @click="logout()"></a> -->
        <li><a href="">我的订单</a></li>
        <li><a href="">订单中心</a></li>
        <li class="last"><a href="">会员中心</a></li>
      </ul>
      <ul class="nav" v-else>
        <li><a href="/login" @click="$router.push('/login')"><i class=" iconfont icon-yonghu"></i>请先登录</a></li>
        <li><a href="">帮助中心</a></li>
        <li><a href="">关于我们</a></li>
      </ul>
    </div>
  </div>
</template>

<style scope lang="scss">
.navbac {
  background: #333;

  .nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 5rem;

    li {
      margin: 1rem 0 1rem 0;
      padding: 0 1rem 0 1rem;

      a {
        color: #cdcdcd;
      }

      border-right: 0.3rem solid #cdcdcd;
    }

    .last {
      border-right: none;
    }
  }

}
</style>

@/stores/loginUserStore