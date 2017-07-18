import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Cashplay from '@/components/Cashplay'
import NewUser from '@/components/NewUser'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: Home
    // },
    {
      path: '/app',
      name: 'App',
      components: {
        app: Cashplay
      },
      children: [
        {
          path: 'home',
          component: Home
        },
        {
          path: 'setting/user',
          component: NewUser
        }
      ]
    }
  ]
})
