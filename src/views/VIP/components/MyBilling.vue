<script setup>
import { onMounted, ref } from 'vue'
import { getUserBillingAPI } from '@/apis/vipAPI/getUserBillingAPI'
const tabId = ref("1")
const billingList = ref([])
const counts = ref()
const params = ref({
  orderState: tabId.value,
  page: 1,
  pageSize: 2
})
const getuserBilling = async () => {
  const res = await getUserBillingAPI(params.value)
  billingList.value = res.result.items
  counts.value = res.result.counts
}
onMounted(() => getuserBilling())
const tabChange = () => {
  params.value.orderState = tabId.value
  params.value.page = 1
  getuserBilling(params.value)
}
const pageChange = (page) => {
  params.value.page = page;
  getuserBilling(params.value)
}
// 创建格式化函数
const fomartPayState = (payState) => {
  const stateMap = {
    1: '待付款',
    2: '待发货',
    3: '待收货',
    4: '待评价',
    5: '已完成',
    6: '已取消'
  }
  return stateMap[payState]
}
</script>

<template>
  <div class="box">
    <el-tabs v-model="tabId" class="demo-tabs" @tab-change="tabChange">
      <el-tab-pane label="全部订单" name="1" class="all-billing">
        <div class="holder-container" v-if="billingList.length === 0">
          <el-empty description="暂无订单数据" />
        </div>
        <ul class="bac" v-for="item in billingList" :key="item.id">
          <li class="time-id">
            <p>下单时间：{{ item.createTime }}</p>
            <p>订单编号：{{ item.id }}</p>
          </li>
          <li class="goods">
            <table>
              <tbody v-for="item2 in item.skus" :key="item2.id">
                <tr>
                  <td width="400">
                    <img :src="item2.image" alt="" />
                    <div>
                      <p>
                        {{ item2.name }}
                      </p>
                      <p>
                        {{ item2.attrsText }}
                      </p>
                    </div>
                  </td>
                  <td width="50">X {{ item2.quantity }}</td>
                </tr>
              </tbody>
            </table>
            <div class="billing-id">
              <p>{{ fomartPayState(item.orderState) }}</p>
            </div>
            <div class="billing-count">
              <p>￥{{ item.payMoney }}</p>
              <p>含运费：￥{{item.postFee}}</p>
              <p>在线支付</p>
            </div>
            <p class="tips">查看详情</p>
          </li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="待付款" name="2">
        <div class="holder-container" v-if="billingList.length === 0">
          <el-empty description="暂无订单数据" />
        </div>
      </el-tab-pane>
      <el-tab-pane label="待发货" name="3">
        <div class="holder-container" v-if="billingList.length === 0">
          <el-empty description="暂无订单数据" />
        </div>
      </el-tab-pane>
      <el-tab-pane label="待收货" name="4">
        <div class="holder-container" v-if="billingList.length === 0">
          <el-empty description="暂无订单数据" />
        </div>
      </el-tab-pane>
      <el-tab-pane label="待评价" name="5">
        <div class="holder-container" v-if="billingList.length === 0">
          <el-empty description="暂无订单数据" />
        </div>
      </el-tab-pane>
      <el-tab-pane label="已完成" name="6">
        <div class="holder-container" v-if="billingList.length === 0">
          <el-empty description="暂无订单数据" />
        </div>
      </el-tab-pane>
      <el-tab-pane label="已取消" name="7">
        <div class="holder-container" v-if="billingList.length === 0">
          <el-empty description="暂无订单数据" />
        </div>
      </el-tab-pane>
    </el-tabs>
    <div class="example-pagination-block">
      <el-pagination background layout="prev, pager, next" :total="counts" :page-size="params.pageSize"
        @current-change="pageChange" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.box {
  min-height: 35rem;
  position: relative;

  .example-pagination-block {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
}

.all-billing {
  .bac {
    display: flex;
    flex-direction: column;
    margin-top: 0.4rem;

    .goods {
      padding: 1.1rem;
      display: flex;
      text-align: center;
      align-items: center;

      tbody {
        margin-bottom: 0.8rem;
      }

      tr {
        display: flex;
        align-items: center;
        text-align: center;

        td {
          display: flex;
          align-items: center;
          text-align: center;

          img {
            width: 5rem;
            height: 5rem;
            margin-right: 0.5rem;
          }

          p {
            text-overflow: ellipsis;
            overflow: hidden;
            width: 20rem;

            &:first-child {
              font-size: 1rem;
              margin-bottom: 0.5rem;
            }

            &:last-child {
              color: #999;
              font-size: 0.8rem;
            }
          }
        }
      }

      .billing-id {
        padding: 1rem 4rem;
        text-align: center;
      }

      .billing-count {
        padding: 1rem 4rem;

        p {
          margin-bottom: 0.5rem;
        }

        p {
          &:first-child {
            color: $priceColor;
            font-size: 1.2rem;
          }
        }
      }
    }

    .time-id {
      background-color: lighten(#999, 35%);
      border: #f5f5f5 solid 0.1rem;
      display: flex;
      padding: 1.1rem;
      font-size: 1.1rem;

      p {
        margin: 0 1rem;
        text-align: center;
        align-items: center;
      }
    }
  }
}

.demo-tabs>.el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
@/apis/vipAPI/getUserBillingAPI