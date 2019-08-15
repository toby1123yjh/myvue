import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login/Login'
import Home from '@/components/Home/Home'
import User from '@/components/Users/users'
import Role from '@/components/Role/Role'
import Menu from '@/components/Menu/menu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      name:'Home',
      path:'/home',
      component:Home,
      children:[
        {
          name:'User',
          path:'/user',
          component:User
        },
        {
          name:'Role',
          path:'/role',
          component:Role
        },
        {
          name:'Menu',
          path:'/menu',
          component:Menu
        }
      ]
    }
  ]
})
