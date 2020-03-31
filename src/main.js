import Vue from 'vue'
import App from './App'
import element from 'element-ui'
import store from './store' // 引入store
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.scss'

Vue.config.productionTip = false
Vue.use(element)
// Vue.use(route)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
