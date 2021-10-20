import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '/grid',
    name: 'Grid',
    
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Grid.vue')
    }
  },
  {
    path: '/cards',
    name: 'Cards',
    
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Cards.vue')
    }
  },
  {
    path: '/form',
    name: 'Form',
    
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Form.vue')
    }
  },
  {
    path: '/validate',
    name: 'Validate',
    
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Validate.vue')
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
