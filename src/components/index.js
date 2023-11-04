//把components所有组件进行全局注册
//通过插件方式

import ImageView from "./ImageView.vue"
import Sku from "./XtxSku/index.vue"
export const componentPlugin={
  install(app){
    app.component('XtxImageView',ImageView)
    app.component('XtxSku',Sku)
  }
}