// import './assets/main.css'
// import ElementPlus from 'element-plus'
// import "@/styles/element/index.scss"
// import "@/styles/common.scss"
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {lazyPlugin} from "@/directives/lazy.js"

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin)
// app.use(ElementPlus)
app.mount('#app')

