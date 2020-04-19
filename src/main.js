import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入mock文件
import './mock/routerMock'
import './mock/tableMock'
import './mock/treeMock'

import axios from 'axios'
import VueAxios from 'vue-axios'
import qs from 'qs'

import VueCookies from 'vue-cookies'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import echarts from 'echarts'
Vue.prototype.$echarts = echarts

// 引入全局样式
import './assets/less/index.less'

// 动态设置路由
import '@/authRoute.js'

Vue.use(VueAxios, axios);
Vue.prototype.$qs = qs
Vue.use(VueCookies)
Vue.use(ElementUI)

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
