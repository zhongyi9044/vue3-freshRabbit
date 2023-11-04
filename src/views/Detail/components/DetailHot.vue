<script setup>
import { getDetailHotAPI } from '@/apis/Detail/getDetailHotAPI'
import { ref, onMounted} from 'vue'
import { useRoute } from 'vue-router';
const route = useRoute()
const hotList = ref([])
const props = defineProps({
  type: {
    type: Number, // 1代表24小时热销榜 2代表周热销榜 3代表总热销榜 可以使用type去适配title和数据列表
    default: 1
  }
})
const title=ref('周热榜')
if(props.type===1){
  title.value='24小时热榜'
}

const getDetailHot = async () => {
  const res =await getDetailHotAPI({
    id: route.params.id,
    type: props.type
  })
  hotList.value = res.result
  console.log(hotList.value)
}

onMounted(() => getDetailHot())
</script>

<template>
  <div class="goods-hot">
    <h3>{{title}}</h3>
    <!-- 商品区块 -->
    <RouterLink :to="`/detail/${item.id}`" class="goods-item" v-for="item in hotList" :key="item.id">
      <img :src="item.picture" alt="" />
      <p class="name ellipsis">{{ item.name }}</p>
      <p class="desc ellipsis">{{ item.desc }}</p>
      <p class="price">&yen;{{ item.price }}</p>
    </RouterLink>
  </div>
</template>

<style scoped lang="scss">
.goods-hot {
  padding-top: 2rem;

  h3 {
    height: 4.375rem;
    background: $helpColor;
    color: #fff;
    font-size: 1.2rem;
    line-height: 4.5rem;
    padding-left: 1.2rem;
    margin-bottom: 0.6rem;
    font-weight: normal;
  }

  .goods-item {
    line-height: 2rem;
    // align-items: center;
    text-align: center;
    display: block;
    margin-bottom: 2rem;

    p {
      &:nth-child(2) {
        display: block;
        margin-top: 1rem;
      }

      &:nth-child(4) {
        color: red;
      }
    }
  }
}
</style>