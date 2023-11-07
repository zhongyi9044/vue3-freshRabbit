// import './assets/main.css'
// import ElementPlus from 'element-plus'
// import "@/styles/element/index.scss"
// import "@/styles/common.scss"
import { createApp } from 'vue'
import {lazyPlugin} from "@/directives/lazy.js"
import { componentPlugin } from './components'
import { createPinia } from 'pinia'
//pinia的可持久化插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)
// app.use(ElementPlus)
app.mount('#app')

