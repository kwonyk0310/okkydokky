import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '../components/HelloWorld'
import Dashboard from '../views/Dashboard'
import GridSystem from '../views/GridSystem'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/GridSystem',
      name: 'GridSystem',
      component: GridSystem
    }
  ]
})

export default router
