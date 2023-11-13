<script setup>
import { useCartListStore } from '@/stores/CartStore';
import { ref } from 'vue'
import { useRouter } from 'vue-router';
const cartListStore = useCartListStore()
const box = ref(null);

const boxChange = (item, selected) => {
  cartListStore.boxchecked(item.skuId, selected)
}

const allBoxChange = (selected) => {
  cartListStore.allChecked(selected)
}

const router = useRouter()
const getBilling = () => {


  router.push({
    path: '/billing',
  })
}
</script>

<template>
  <div class="list-box">
    <table>
      <thead>
        <tr>
          <th width="120">
            <el-checkbox :model-value="cartListStore.isAllSelected" @change="allBoxChange" />
          </th>
          <th width="400">商品信息</th>
          <th width="220">单价</th>
          <th width="180">数量</th>
          <th width="180">小计</th>
          <th width="140">操作</th>
        </tr>
      </thead>
      <tbody v-for="item in cartListStore.cartList" :key="item.id">
        <tr>
          <td width="120"> <el-checkbox ref="box" :model-value="item.selected"
              @change="(selected) => boxChange(item, selected)" /></td>
          <td width="400" class="goods">
            <RouterLink :to="`/detail/${item.id}`"><img :src="item.picture" alt="" /></RouterLink>
            <div>{{ item.name }}</div>
          </td>
          <td width="220">￥{{ item.price }}</td>
          <td width="180"><el-input-number :min="1" v-model="item.count" /></td>
          <td width="180">￥{{ item.price * item.count.toFixed(2) }}</td>
          <td width="140">
            <el-popconfirm title="确认删除吗?" confirm-button-text="确认" cancel-button-text="取消"
              @confirm="cartListStore.deleteGoods(item.skuId)">
              <template #reference>
                <a href="#">删除</a>
              </template>
            </el-popconfirm>
          </td>
        </tr>
      </tbody>
      <tr v-if="cartListStore.cartList.length === 0">
        <td colspan="6">
          <div class="cart-none">
            <el-empty description="购物车列表为空">
              <el-button type="primary" @click="$router.push('/')">随便逛逛</el-button>
            </el-empty>
          </div>
        </td>
      </tr>
    </table>
  </div>

  <div class="foot">
    <div>
      <span>共{{ cartListStore.cartCount }}件商品,</span>
      <span>已选择{{ cartListStore.selectedCount }}件,</span>
      <span>商品合计:</span>
      <span>￥{{ cartListStore.selectedPriceCount }}</span>
    </div>
    <el-button size="large" type="primary" @click="getBilling">下单结算</el-button>
  </div>
</template>

<style scoped lang="scss">
.list-box {
  padding: 2rem 10rem;
  background-color: #fff;

  table {
    width: 100%;

    thead {}

    tbody {
      tr {
        td {
          text-align: center;

          &:nth-child(5) {
            color: red;
            font-weight: 600;
          }

          &:last-child {

            color: $xtxColor;
          }

          img {
            width: 6.25rem;
            height: 6.25rem;
          }

          &:last-child {
            a {
              color: $xtxColor;
            }
          }

        }
      }

      .goods {
        display: flex;
        // justify-content: space-around;
        align-items: center;

        div {
          margin-left: 1rem;
          text-align: center;
          width: 50%;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
  }


}

.foot {
  background-color: #fff;
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    padding-left: 10rem;

    span {
      margin-right: 0.5rem;
      font-size: large;

      &:last-child {
        color: red;
      }
    }
  }

  .el-button {
    margin-right: 10rem;
  }
}
</style>@/stores/CartStore