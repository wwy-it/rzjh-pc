import { createApp } from 'vue'
import App from './App.vue'
import router from './route/router'
import axios from 'axios'

import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import "@/assets/style/style.css"
import "@/assets/style/el.css"
import '@/assets/style/cl-public.css' //基本样式

axios.defaults.baseURL = "http://8.140.50.228:5000/"

// 请求拦截
axios.interceptors.request.use(config => {
    // config.headers.Authorization = localStorage.getItem('token')
    config.headers.Authorization = ""
    return config
}, function (error) {
    return Promise.reject(error)
})
// 响应拦截
axios.interceptors.response.use(res => {
    return res.data || {}
}, function (err) {
    return Promise.resolve(err)
})

const app = createApp(App)
app.config.globalProperties.$ = axios
app.use(router)
app.use(ElementPlus)
app.mount('#app')