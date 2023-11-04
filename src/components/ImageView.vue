<script setup>
import { ref, watch } from 'vue'
import { useMouseInElement } from '@vueuse/core'
// 图片列表
defineProps({
  imageList:{
    type:Array,
    default:()=>[]
  }
})
//小图的下标
const smallIndex = ref(0)
const changeBig = (i) => {
  smallIndex.value = i;
}

// 获取鼠标相对位置
const target = ref(null)
const { elementX, elementY, isOutside } = useMouseInElement(target)


// 根据鼠标在大图片内相对坐标改变阴影滑块位置,单位rem
// 情况1：7.5<x<17.5 7.5<y<17.5 阴影left:x-w/2 top:y-h/2
// 情况2：7.5<x<17.5 y<7.5 阴影left:x-w/2 top:0
// 情况3：7.5<x<17.5 y>17.5 阴影left:x-w/2 top:30
// 情况4：x<7.5 7.5<y<17.5 阴影left:0 top:y-h/2
// 情况5：x>17.5 7.5<y<17.5 阴影left:30 top:y-h/2

//大图的阴影坐标
const left = ref(0)
const top = ref(0)

//放大镜大图的背景坐标
const positionX = ref(0)
const positionY = ref(0)
var fontSize = parseInt(getComputedStyle(window.document.documentElement)['font-size']);
console.log(fontSize)
watch([elementX, elementY], () => {
  if (!isOutside.value) {
    console.log(elementX.value, elementY.value)
    if (7.5 * fontSize < elementX.value < 22.5 * fontSize) {
      left.value = elementX.value - 15 * fontSize / 2
    }
    if (7.5 * fontSize < elementY.value < 22.5 * fontSize) {
      top.value = elementY.value - 15 * fontSize / 2
    }
    if (elementX.value < 7.5 * fontSize) { left.value = 0 }
    if (elementX.value > 22.5 * fontSize) { left.value = 15 * fontSize }
    if (elementY.value < 7.5 * fontSize) { top.value = 0 }
    if (elementY.value > 22.5 * fontSize) { top.value = 15 * fontSize }
    positionX.value = -left.value * 2
    positionY.value = -top.value * 2
  } else {
    left.value = 0
    top.value = 0
  }
})
</script>

<template>
  <div>
    <div class="goods-img">
      <!-- 大图片位置 -->
      <div class="large" ref="target">
        <img :src="imageList[smallIndex]" alt="" />
        <!-- 阴影位置 -->
        <div class="layer" :style="{ left: `${left}px`, top: `${top}px` }"></div>
        <div class="magnify" v-show="!isOutside" :style="{
          backgroundImage: `url(${imageList[smallIndex]})`,
          backgroundPositionX: `${positionX}px`,
          backgroundPositionY: `${positionY}px`
        }"></div>
      </div>
      <!-- 小图 -->
      <ul class="small">
        <li v-for="(img, i) in imageList" :key="i" @click="changeBig(i)" :class="{ active: i === smallIndex }">
          <img :src="img" alt="" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.goods-img {
  display: flex;
  justify-content: center;
  transform: translateX(-1rem);

  .large {
    height: 30rem;
    width: 30rem;
    position: relative;

    .layer {
      position: absolute;
      width: 15rem;
      height: 15rem;
      background: rgba(0, 0, 0, 0.2);
      // 绝对定位 然后跟随咱们鼠标控制left和top属性就可以让滑块移动起来
      left: 0;
      top: 0;
    }

    .magnify {
      position: absolute;
      width: 30rem;
      height: 30rem;
      top: 0;
      left: 30rem;
      z-index: 99;
      background-size: 60rem 60rem;
    }
  }

  .small {
    height: 30rem;
    width: 10rem;

    li {
      width: 6rem;

      img {
        height: 100%;
        width: 100%;
      }

      &:hover,
      &.active {
        border: 2px solid $xtxColor;
      }
    }
  }
}
</style>