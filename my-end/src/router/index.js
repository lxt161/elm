import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
// import HelloWorld from '@/components/HelloWorld'
// const HelloWorld=resolve=>require(['@/components/HelloWorld'],resolve)
const Login=resolve=>require(['@/components/elm/com/Login'],resolve)
const Home=resolve=>require(['@/components/elm/com/Home'],resolve)
const main=resolve=>require(['@/components/elm/list/main'],resolve)
const userlist=resolve=>require(['@/components/elm/list/userlist'],resolve)
const shoplist=resolve=>require(['@/components/elm/list/shoplist'],resolve)
const foodlist=resolve=>require(['@/components/elm/list/foodlist'],resolve)
const orderlist=resolve=>require(['@/components/elm/list/orderlist'],resolve)
const adminlist=resolve=>require(['@/components/elm/list/adminlist'],resolve)
const addshop=resolve=>require(['@/components/elm/list/addshop'],resolve)


Vue.use(Router)

export default new Router({
  routes: [{
    path:'/',
    component: App,//顶层路由 对应index.js
    children:[//二级路由 对应App.js
      //地址为空 跳转home页面
      {
        path: '',
        redirect:"/Login"
      },
      // {
      //   path: '/Hello',
      //   name:"HelloWorld",
      //   component:HelloWorld,
      // },
      {
        path: '/login',
        name:"Login",
        component:Login,
      },
      {
        path: '/home',
        name:"Home",
        component:Home,
        redirect:'/main',
        children:[
          {
            path: '/main',
            name:"main",
            component:main,
          },
          {
            path: '/userlist',
            name:"userlist",
            component:userlist,
          },
          {
            path: '/shoplist',
            name:"shoplist",
            component:shoplist,
          },
          {
            path: '/foodlist',
            name:"foodlist",
            component:foodlist,
          },
          {
            path: '/orderlist',
            name:"orderlist",
            component:orderlist,
          },
          {
            path: '/adminlist',
            name:"adminlist",
            component:adminlist,
          },
          {
            path: '/addshop',
            name:"addshop",
            component:addshop,
          }
        ]
      }
    ]
  }   
  ]
})