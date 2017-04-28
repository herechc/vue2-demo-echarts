import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {path: '/logo', name: 'logo', component: require('../views/logo')},
    {path:'/visitor',name:'visitor',component:require("../views/visitor")},
    {path:'*', redirect:'/visitor'}
  ]
})
