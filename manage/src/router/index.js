import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login'
import manage from '@/pages/manage'
import addGoods from '@/pages/child/addGoods'
import admin from '@/pages/child/admin'
import home from '@/pages/child/home'
import user from '@/pages/child/user'
import claim from '@/pages/child/claim'
import goods from '@/pages/child/goods'
import updateGoods from '@/pages/child/updateGoods'







Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/manage',
      //name: 'manage',
      component: manage,
      //子路由不写 / 
      children:[{
      	path:"",
      	name:'home',
      	component: home
      },
      {
      	path:"user",
      	name:'user',
      	component: user,
      	meta:["数据管理","用户管理"]
      },
      {
      	path:"admin",
      	name:'admin',
      	component: admin,
      	meta:["数据管理","管理员管理"]
      },
      {
      	path:"addGoods",
      	name:'addGoods',
      	component: addGoods,
      	meta:["数据添加","添加商品"]
      },
      {
      	path:"claim",
      	name:'claim',
      	component: claim,
      	meta:["数据管理","订单管理"]
      },
      {
      	path:"goods",
      	name:'goods',
      	component: goods,
      	meta:["数据管理","商品管理"]
      },
      {
      	path:"updateGoods",
      	name:'updateGoods',
      	component: updateGoods,
      	meta:["数据管理","修改商品"]
      }
      ]
    }
  ]
})
