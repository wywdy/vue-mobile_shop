import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

//移动端适配处理
import 'postcss-pxtorem'
import 'lib-flexible'

//引入vant ui
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)

import toast1 from './components/content/toast'
Vue.use(toast1)

import layTab from 'ly-tab'
Vue.use(layTab)

//添加事件总线
Vue.prototype.$bus=new Vue()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
