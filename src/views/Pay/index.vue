<script setup>
import { getOrderSubAPI } from '@/apis/payAPI/getOrderSubAPI'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useCountDown } from '@/composables/useCountDown';
const { formatTime, start } = useCountDown()
const appli = ref()
const bank = ref()
const route = useRoute()
const payInfo = ref({})
const getOrderSub = async () => {
  const res = await getOrderSubAPI(route.query.id)
  payInfo.value = res.result
  start(res.result.countdown)
}
onMounted(() => getOrderSub())

// 支付地址
const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
const backURL = 'http://10.134.9.227:5173/paycallback'
const redirectUrl = encodeURIComponent(backURL)
const payUrl = `${baseURL}pay/aliPay?orderId=${route.query.id}&redirect=${redirectUrl}`

const toPay = () => {
  window.location.href = payUrl
}
</script>

<template>
  <div class="top">
    <ul class="tips">
      <li><i class="iconfont icon-zhifuchenggong"></i></li>
      <li>
        <p>订单提交成功！请尽快完成支付</p>
        <p>支付还剩{{ formatTime }}，超时后将取消订单</p>
      </li>
    </ul>
    <ul class="count">
      <li>应付总额：</li>
      <li>￥113</li>
    </ul>
  </div>
  <div class="foot">
    <ul class="title">
      <li>请选择以下支付方式</li>
    </ul>
    <ul class="payAddr">
      <div>支付平台</div>
      <el-radio-group v-model="appli" size="large" @change="toPay()">
        <el-radio label="1" :border="true">微信支付</el-radio>
        <el-radio label="2" :border="true">支<i></i>付<i></i>宝</el-radio>
      </el-radio-group>
    </ul>
    <ul class="payMethod">
      <div>支付方式</div>
      <el-radio-group v-model="bank" size="large">
        <el-radio label="1" :border="true">招商银行</el-radio>
        <el-radio label="2" :border="true">工商银行</el-radio>
        <el-radio label="3" :border="true">建设银行</el-radio>
        <el-radio label="4" :border="true">农业银行</el-radio>
        <el-radio label="5" :border="true">交通银行</el-radio>
      </el-radio-group>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.foot {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 2rem 10rem;
  padding: 2rem 2rem;
  background-color: #fff;

  ul {
    margin-bottom: 3rem;

    .el-radio-button {
      // margin-right: 2rem;
      // border:#e5e5e5 solid 0.1rem;
    }

    div {
      margin-top: 2rem;
    }
  }
}

.top {
  margin: 2rem 10rem;
  padding: 2rem 2rem;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .tips {
    display: flex;
    justify-content: space-around;
    align-items: center;

    li {
      i {
        font-size: 4rem;
        color: $sucColor;
        margin-right: 1rem;
      }

      &:last-child {

        p {
          &:first-child {
            font-weight: 600;
            font-size: 1.5rem;
            margin-bottom: 0.4rem;
          }

          &:last-child {
            color: #999;
          }
        }

      }
    }
  }

  .count {
    display: flex;
    align-items: center;

    li {

      &:last-child {
        color: $priceColor;
        font-size: 1.2rem;
        font-weight: 550;
      }
    }
  }
}
</style>
