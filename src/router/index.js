import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/major/major.vue')
  },
  {
    path: '/FDFIDO',
    name: 'FDFIDO',

    component: () => import(/* webpackChunkName: "about" */ '../views/FDFIDO/FDFIDO.vue')
  },
  {
    path: '/major',
    name: 'major',
    component: () => import(/* webpackChunkName: "about" */ '../views/major/major.vue')
  },
  {
    path: '/orderDetails',
    name: 'orderDetails',
    component: () => import(/* webpackChunkName: "about" */ '../views/orderDetails/orderDetails.vue')
  },
  {
    path: '/IDOswitch',
    name: 'IDOswitch',
    component: () => import(/* webpackChunkName: "about" */ '../views/IDOswitch/IDOswitch.vue')
  },
  {
    path: '/IN',
    name: 'IN',
    component: () => import(/* webpackChunkName: "about" */ '../views/IN/IN.vue')
  },
  {
    path: '/OUT',
    name: 'OUT',
    component: () => import(/* webpackChunkName: "about" */ '../views/OUT/OUT.vue')
  },
  {
    path: '/splitAccount',
    name: 'splitAccount',
    component: () => import(/* webpackChunkName: "about" */ '../views/splitAccount/splitAccount.vue')
  },
  {
    path: '/NFTpool',
    name: 'NFTpool',
    component: () => import(/* webpackChunkName: "about" */ '../views/NFTpool/NFTpool.vue')
  },
  {
    path: '/panel',
    name: 'panel',
    component: () => import(/* webpackChunkName: "about" */ '../views/panel/panel.vue')
  },
  {
    path: '/myteam',
    name: 'myteam',
    component: () => import(/* webpackChunkName: "about" */ '../views/myteam/myteam.vue')
  }
  
  
  
]

const router = new VueRouter({
  routes
})

export default router
