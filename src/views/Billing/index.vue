<script setup>
import { ref, onMounted } from 'vue'
//导入获取结算数据的API
import { createBillingAPI } from '@/apis/billingAPI/createBillingAPI'
//获取订单API
import { getOrderAPI } from '@/apis/payAPI/getOrderAPI'
import { useRouter } from 'vue-router'
import { useCartListStore } from '@/stores/CartStore'
// import { mergeCartAPI } from '@/apis/cartAPI/mergeCartList'
const time = ref('不限送货时间：周一至周日')
const payMethod = ref('在线支付')

//默认地址
const defaultAddress = ref({})

//结算数据
const billingInfo = ref({})

//是否展示
const showAddress = ref(false)
const cartListStore = useCartListStore()

//获取结算页数据
const getBillingInfo = async () => {

  const res = await createBillingAPI()
  billingInfo.value = res.result
  //找到默认地址
  defaultAddress.value = billingInfo.value.userAddresses.find(item => item.isDefault === 0)

  //如果没有默认地址就默认第一个是默认地址
  if (!defaultAddress.value) {
    defaultAddress.value = billingInfo.value.userAddresses[0];
    defaultAddress.value.isDefault = 0;
  }
}

//修改地址时，鼠标点击的选项地址
const activeAddress = ref({})
const changeAddress = (item) => {
  activeAddress.value = item
}

//确定修改地址按键事件
const comfirm = () => {
  billingInfo.value.userAddresses.forEach(item => {
    if (item.id === defaultAddress.value.id) {
      item.default = 1
    } else if (item.id === activeAddress.value.id) {
      item.default = 0
    }
  })
  defaultAddress.value = activeAddress.value
  showAddress.value = false
}
const router = useRouter()

//获取订单数据，准备跳转订单页面
const getOrder = async () => {
  const res = await getOrderAPI({
    deliveryTimeType: 1,
    payType: 1,
    payChannel: 1,
    buyerMessage: '',
    goods: billingInfo.value.goods.map(item => {
      return {
        skuId: item.skuId,
        count: item.count
      }
    }),
    addressId: defaultAddress.value.id
  })

  const orderId = res.result.id

  //结算以后清空本地购物车
  cartListStore.clearCartList()

  //根据订单数据的id跳转
  router.push({
    path: '/pay',
    query: {
      id: orderId
    }
  })

  //重新获取最新购物车数据(选择框未选择的商品)
  cartListStore.getNewCartList()
}

onMounted(() => {
  getBillingInfo()
})

</script>

<template>
  <div class="bac">
    <div class="address">
      <el-dialog v-model="showAddress" title="切换收货地址">
        <template #default>
          <div class="address-list-bac">
            <ul class="address-list-title">当前地址:</ul>
            <ul class="address-list addressActive">
              <li><span>收<i></i>货<i></i>人：</span><span>{{ defaultAddress.receiver }}</span></li>
              <li><span>联系方式：</span><span>{{ defaultAddress.contact }}</span></li>
              <li><span>收货地址：</span><span>{{ defaultAddress.fullLocation }}</span></li>
            </ul>

            <ul class="address-list-title">地址选择:</ul>
            <ul class="address-list" v-for="item in billingInfo.userAddresses" :key="item.id" @click="changeAddress(item)"
              :class="{ addressActive: activeAddress.id === item.id }">
              <li><span>收<i></i>货<i></i>人：</span><span>{{ item.receiver }}</span></li>
              <li><span>联系方式：</span><span>{{ item.contact }}</span></li>
              <li><span>收货地址：</span><span>{{ item.fullLocation }}</span></li>
            </ul>
          </div>
        </template>
        <template #footer>
          <div class="dialog-footer">
            <el-button @click="showAddress = false">取消</el-button>
            <el-button type="primary" @click="comfirm">确定</el-button>
          </div>
        </template>
      </el-dialog>
      <div class="address-title">收货地址</div>
      <div class="address-detail">
        <div class="none" v-if="defaultAddress.receiver === undefined">您需要先添加收货地址才可提交订单--&gt;</div>
        <ul class="detail-left" v-else>
          <li><span>收<i></i>货<i></i>人：</span><span>{{ defaultAddress.receiver }}</span></li>
          <li><span>联系方式：</span><span>{{ defaultAddress.contact }}</span></li>
          <li><span>收货地址：</span><span>{{ defaultAddress.fullLocation }}</span></li>
        </ul>
        <ul class="detail-right">
          <el-button size="large" @click="showAddress = true">切换地址</el-button>
          <el-button size="large">添加地址</el-button>
        </ul>
      </div>
    </div>
    <div class="cart">
      <div class="cart-title">商品信息</div>
      <table>
        <thead>
          <tr>
            <th width="400">商品信息</th>
            <th width="220">单价</th>
            <th width="180">数量</th>
            <th width="180">小计</th>
            <th width="140">实付</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in billingInfo.goods" :key="item.id">
            <td width="400" class="goods">
              <img :src="item.picture" alt="" />
              <div>
                <p>
                  {{ item.name }}
                </p>
                <p>
                  {{ item.attresText }}
                </p>
              </div>
            </td>
            <td width="220">￥{{ item.price }}</td>
            <td width="180">{{ item.count }}</td>
            <td width="180">￥{{ item.totalPrice }}</td>
            <td width="140">
              ￥{{ item.totalPayPrice }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="time">
      <div class="time-title">配送时间</div>
      <el-radio-group v-model="time" size="large" class="time-btn">
        <el-radio-button label="不限送货时间：周一至周日" />
        <el-radio-button label="工作日送货：周一至周五" />
        <el-radio-button label="双休日、假日送货：周六至周日" />
      </el-radio-group>
    </div>
    <div class="pay-method">
      <div class="pay-method-title">支付方式</div>
      <el-radio-group v-model="payMethod" size="large" class="pay-method-btn">
        <el-radio-button label="在线支付" />
        <el-radio-button label="货到付款" />
      </el-radio-group>
      <span class="tis">货到付款需付5元手续费</span>
    </div>
    <div class="detail" v-if="billingInfo.summary">
      <div class="detail-title">金钱明细</div>
      <div class="detail-list">
        <ul>
          <li>商品件数:</li>
          <li>{{ billingInfo.summary.goodsCount }}件</li>
        </ul>
        <ul>
          <li>商品总价:</li>
          <li>￥{{ billingInfo.summary.totalPrice }}</li>
        </ul>
        <ul>
          <li>运费:</li>
          <li>￥{{ billingInfo.summary.postFee }}</li>
        </ul>
        <ul>
          <li>应付总额:</li>
          <li>￥{{ billingInfo.summary.totalPayPrice - billingInfo.summary.discountPrice }}</li>
        </ul>
      </div>
      <div class="submit">
        <el-button type="primary" size="large" @click="getOrder()">提交订单</el-button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.bac {
  background-color: #fff;
  padding: 2rem 10rem;

  .address {
    display: flex;
    flex-direction: column;
    height: 15rem;
    padding: 0rem 1rem;
    margin-bottom: 4rem;

    .address-list-bac {
      max-height: 20rem;
      overflow: auto;

      // &::-webkit-scrollbar {
      //   width: 10px;
      //   height: 10px;
      // }

      // &::-webkit-scrollbar-track {
      //   background: #f8f8f8;
      //   border-radius: 2px;
      // }

      // &::-webkit-scrollbar-thumb {
      //   background: #eee;
      //   border-radius: 10px;
      // }

      // &::-webkit-scrollbar-thumb:hover {
      //   background: #ccc;
      // }

      .address-list-title {
        font-size: 2rem;
        font-weight: 600;
        margin-left: 2rem;
      }

      .address-list {
        margin: 1rem 2rem;
        border: solid #f5f5f5 0.1rem;

        &:hover {
          border-color: $xtxColor;
          background: lighten($xtxColor, 50%);
        }


        li {
          padding: 0.5rem;
        }
      }

      .addressActive {
        border-color: $xtxColor;
        background: lighten($xtxColor, 50%);
      }
    }


    .address-title {
      padding: 1rem 0 2rem 0;
      font-size: 2rem;
      font-weight: 600;
    }

    .address-detail {
      display: flex;
      justify-content: space-between;
      // text-align: center;

      .none {
        font-weight: 600;
        font-size: 3rem;
        color: #999;
      }

      .detail-left {
        li {
          line-height: 3rem;


          i {
            width: 0.5rem;
            display: inline-block;
          }

          span {

            &:first-child {
              color: #999;
              margin-right: 2rem;
            }
          }
        }
      }

      .detail-right {
        display: flex;
        align-items: center;

        .el-button {
          transition: all .5s;

          &:hover {
            transform: translate3d(0, -0.1875rem, 0);
            box-shadow: 0 .1875rem .5rem rgb(0 0 0 / 20%);
          }
        }
      }
    }
  }

  .cart {
    padding: 0rem 1rem;
    margin-bottom: 4rem;

    .cart-title {
      padding: 1rem 0 2rem 0;
      font-size: 2rem;
      font-weight: 600;
    }

    table {

      thead {
        background: #f5f5f5;

        tr {

          height: 4rem;

          th {}
        }
      }

      tbody {
        tr {
          .goods {
            display: flex;
            align-items: center;

            img {
              width: 4.5rem;
              height: 4.5rem;
            }

            div {
              margin-left: 2rem;
              text-align: start;

              p {
                text-overflow: ellipsis;
                overflow: hidden;
                width: 20rem;

                &:first-child {
                  font-size: 1.3rem;
                }

                &:last-child {
                  color: #999;
                  font-size: 1rem;

                }
              }
            }
          }

          td {
            text-align: center;
          }
        }
      }
    }
  }

  .time {
    padding: 0rem 1rem;
    margin-bottom: 4rem;

    .time-title {

      padding: 1rem 0 2rem 0;
      font-size: 2rem;
      font-weight: 600;
    }

    .time-btn {
      .el-radio-button {
        // margin-right: 2rem;
      }
    }
  }

  .pay-method {
    padding: 0rem 1rem;
    margin-bottom: 4rem;
    position: relative;

    .pay-method-title {
      padding: 1rem 0 2rem 0;
      font-size: 2rem;
      font-weight: 600;
    }

    .tis {
      position: absolute;
      top: 6.4rem;
      color: #999;
      font-size: 0.8rem;
    }

    .pay-method-btn {

      .el-radio-button {
        margin-right: 2rem;

        &:nth-child(2) {
          margin-right: 1rem;
        }
      }
    }
  }

  .detail {
    padding: 0rem 1rem;
    margin-bottom: 4rem;

    .detail-title {
      padding: 1rem 0 2rem 0;
      font-size: 2rem;
      font-weight: 600;
    }

    .detail-list {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: end;

      ul {
        display: flex;
        justify-content: space-between;
        margin-top: 2rem;

        &:last-child {
          li {
            &:last-child {
              color: $priceColor ;
              font-size: 1.5rem;
              font-weight: 600;
            }
          }
        }

        li {
          width: 10rem;
          font-size: 1.2rem;

          &:first-child {
            font-weight: 600;
          }

          &:last-child {
            text-align: end;
          }
        }
      }
    }

    .submit {
      display: flex;
      justify-content: end;
      margin-top: 2rem;
    }
  }




}
</style>@/apis/payAPI/getOrderAPI@/apis/billingAPI/createBillingAPI