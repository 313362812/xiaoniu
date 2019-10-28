import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index' 
import my from '@/pages/my' 
import order from '@/pages/order' 
import shopcar from '@/pages/shopcar' 
import reg from '@/pages/reg' 
import list from '@/pages/list' 
import detail from '@/pages/detail' 
import login from '@/pages/login' 


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/shopcar',
      name: 'shopcar',
      component: shopcar
    },
    {
      path: '/reg',
      name: 'reg',
      component: reg
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
