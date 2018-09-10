import Vue from 'vue'
import Router from 'vue-router'
/* “@”相当于“../” */
import Business from '../components/Business'
import Center from '../components/Center'
import Home from '../components/Home'
import CargoTrack from '../components/UserCenter/CargoTrack'
import AccountManage from '../components/UserCenter/AccountManage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Business',
      name: 'Business',
      component: Business
    },
    {
      path: '/Center',
      name: 'Center',
      component: Center
    },
    {
      path: '/CargoTrack',
      name: 'CargoTrack',
      component: CargoTrack
    },
    {
      path: '/AccountManage',
      name: 'AccountManage',
      component: AccountManage
    }
  ]
})
