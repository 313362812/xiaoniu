// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import pop from '@/components/pop'
Vue.component("my-pop",pop)

router.beforeEach((to,from,next)=>{
//	console.log(to)
	if(to.matched.every(i=>i.path.includes("manage"))){
		let res = sessionStorage.getItem("admin");
		if(res){
		next()
	}else{
		next("/")
	}
	}else{
		next()
	}
	
})



Vue.use(ElementUI)


Vue.config.productionTip = false

import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:3000";
Vue.prototype.$http = axios;
Vue.prototype.$URL = "http://127.0.0.1:3000/upload"
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
