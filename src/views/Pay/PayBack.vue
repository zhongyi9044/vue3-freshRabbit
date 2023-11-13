<script setup>
import { onMounted, ref } from 'vue';
import { getOrderSubAPI } from '@/apis/payAPI/getOrderSubAPI';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute()
const orderInfo = ref({})

const getOrderInfo = async () => {
  const res = await getOrderSubAPI(route.query.orderId)
  orderInfo.value = res.result
}
const edge = ref()

const router = useRouter()
const toEdge = (edg) => {
  if (edg === '查看订单') {
    router.push({ path: '/' })
  } else {
    router.push({ path: '/' })
  }
}

onMounted(() => getOrderInfo())
</script>

<template>
  <div class="bac">
    <ul>
      <li>
        <!-- 路由获取的是字符串 -->
        <i class="iconfont icon-zhifuchenggong succ" v-if="$route.query.payResult === 'true'"></i>
        <i class="iconfont icon-zhifushibai mistake" v-else></i>
      </li>
      <li class="tit">支付{{ $route.query.payResult === 'true' ? '成功' : '失败' }}</li>
      <li class="tip">我们将尽快为您发货，收获期间请保持手机畅通</li>
      <li class="appli">支付方式：{{ orderInfo.payChannel === 1 ? '微信支付' : '支付宝' }}</li>
      <li class="money">支付金额：{{ orderInfo.payMoney?.toFixed(2) }}</li>
      <li>
        <el-radio-group v-model="edge" size="large" @change="toEdge">
          <el-radio-button label="查看订单" />
          <el-radio-button label="进入首页" />
        </el-radio-group>
      </li>
      <li class="btTips" @click="$router.push('/')">
        <span class="iconfont icon-wentifankui1"></span>
        温馨提示：小兔鲜儿不会以订单异常、系统升级为由要求您点击任何网址链接进行退款操作，保护资产、谨慎操作
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.bac {
  margin: 2rem 10rem;
  background-color: #fff;
  padding: 2rem 0;

  ul {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    .tit {
      font-weight: 600;
      font-size: 2rem;
    }

    .tip {
      color: #999;
      font-size: 0.9rem;
    }

    .appli {
      font-weight: 550;
    }

    .money {
      font-weight: 600;
      font-size: 1.2rem;
    }

    .btTips {
      color: #999;
      font-size: 0.8rem;
    }

    li {
      margin-bottom: 2rem;

      i {
        &.succ {
          color: $sucColor;
        }

        &.mistake {
          color: $helpColor
        }

        font-size: 5rem;

      }
    }
  }
}

.el-radio-button {
  margin-left: 2rem;

  &:last-child {
    margin-right: 2rem;

    border-left: #e5e5e5 solid 0.05rem;
    // border-top-left-radius: 10%;
    // border-bottom-left-radius: 10%;
  }
}
</style>