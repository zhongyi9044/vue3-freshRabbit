import { useIntersectionObserver } from '@vueuse/core'

//懒加载
export const lazyPlugin = {
  install: (app) => {
    // 在这里编写插件代码
    app.directive('img-lazy', {
      /* ... */
      mounted(el, binding) {
        const { stop } = useIntersectionObserver(
          el,
          ([{ isIntersecting }]) => {
            if(isIntersecting){
              el.src = binding.value
              stop();
            }
          },
        )
      },
    })
  }
}