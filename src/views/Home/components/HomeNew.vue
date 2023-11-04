<script setup>
import HomePanel from './HomePanel.vue'
import { getNewAPI } from '@/apis/homeAPI/getHomeNewAPI';
import { ref, onMounted } from 'vue'
const newList = ref([]);
const getNew = async () => {
  const res = await getNewAPI();
  newList.value = res.result;
}

onMounted(() => getNew())
</script>

<template>
  <div>
    <home-panel title="新鲜好物" sub-title="新鲜出炉 品质靠谱">
      <template #main>
        <ul class="newList">
          <li v-for="item in newList" :key="item.id">
            <RouterLink :to="`/detail/${item.id}`">
              <img v-img-lazy="item.picture" alt="" />
              <p class="name">{{ item.name }}</p>
              <p class="price">&yen;{{ item.price }}</p>
            </RouterLink>
          </li>
        </ul>
      </template>
    </home-panel>
  </div>
</template>

<style scoped lang="scss">
.newList{
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
</style>@/apis/homeAPI/new@/apis/homeAPI/getHomeNewAPI