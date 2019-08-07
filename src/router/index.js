import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login/Login'
import Home from '@/components/Home/Home'
import User from '@/components/Users/users'

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
        }
      ]
    }
  ]
})
