// import './assets/main.css'
// import ElementPlus from 'element-plus'
// import "@/styles/element/index.scss"
// import "@/styles/common.scss"
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

import {getCategory} from '@/apis/testApi.js'

getCategory().then(res=>{
  console.log(res)
})

app.use(createPinia())
app.use(router)
// app.use(ElementPlus)
app.mount('#app')
