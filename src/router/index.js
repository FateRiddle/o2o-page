import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Person from '@/components/Person'
import Products from '@/components/Products'
import Spaces from '@/components/Spaces'
import Shop from '@/components/Shop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/person',
      name: 'Person',
      component: Person,
    },
    {
      path: '/products',
      name: 'Products',
      component: Products,
    },
    {
      path: '/spaces',
      name: 'Spaces',
      component: Spaces,
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop,
    },
  ],
})
