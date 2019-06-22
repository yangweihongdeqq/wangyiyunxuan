/*
 路由器模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import Msite from '../pages/Msite/Msite.vue'
import Classify from '../pages/Classify/Classify.vue'
import Goods from '../pages/Goods/Goods.vue'
import Shoppingcart from '../pages/Shoppingcart/Shoppingcart.vue'
import Person from '../pages/Person/Person.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/msite',
      component: Msite
    },
    {
      path: '/classify',
      component: Classify
    },
    {
      path: '/goods',
      component: Goods
    },
    {
      path: '/shoppingcart',
      component:Shoppingcart
    },
    {
      path: '/person',
      component: Person
    }
  ]
})
