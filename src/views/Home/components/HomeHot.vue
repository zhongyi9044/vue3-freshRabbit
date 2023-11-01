<script setup>
import HomePanel from './HomePanel.vue'
import { getHotAPI } from '@/apis/homeAPI/hot';
import { ref, onMounted } from 'vue'

const hotList = ref([]);
const getHot = async () => {
  const res = await getHotAPI();
  hotList.value = res.result;
}

onMounted(() => getHot())
</script>

<template>
  <div>
    <home-panel title="人气推荐" sub-title="人气爆款 不容错过">
      <template #main>
        <ul class="hotList">
          <li v-for="item in hotList" :key="item.id">
            <RouterLink to="/">
              <img v-img-lazy="item.picture" alt="">
              <p class="name">{{ item.title }}</p>
              <p class="desc">{{ item.alt }}</p>
            </RouterLink>
          </li>
        </ul>
      </template>
    </home-panel>
  </div>
</template>

<style scoped lang="scss">
.hotList {
  display: flex;
  justify-content: space-between;

  li{
    width: 19.125rem;
    height: 25.375rem;
    transition: all .5s;

    &:hover {
      transform: translate3d(0, -0.1875rem, 0);
      box-shadow: 0 .1875rem .5rem rgb(0 0 0 / 20%);
    }

    img {
      width: 19.125rem;
      height: 19.125rem;
    }

    p {
      font-size: 1.375rem;
      padding-top: .75rem;
      text-align: center;
    }

    .desc {
      color: #999;
      font-size: 1.125rem;
    }
  }
}
</style>