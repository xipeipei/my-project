// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss' // global css
import 'normalize.css/normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
import i18n from './lang'
import './icons'
import 'babel-polyfill'

Vue.use(ElementUI, {
  VueI18n: (key, value) => i18n.t(key, value)
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
