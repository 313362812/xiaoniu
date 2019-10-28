// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'
import store from './store'


Vue.use(MintUI)


Vue.config.productionTip = false

import footer from '@/components/footer'
Vue.component("my-footer",footer)
import header from '@/components/header'
Vue.component("my-header",header)
import header2 from '@/components/header2'
Vue.component("my-header2",header2)

import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:3000"
Vue.prototype.$http = axios;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
