import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Cashplay from '@/components/Cashplay'

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
      component: Cashplay
    },
    {
      path: '/app/home',
      name: 'Home',
      component: Home
    }
  ]
})
