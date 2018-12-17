import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import One from '../pages/One'
import Two from '../pages/Two'
import Three from '../pages/Three'
import Detail from '../pages/Detail'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/one',
      name: 'one',
      component: One
    },
    {
      path: '/two',
      name: 'two',
      component: Two
    },
    {
      path: '/three',
      name: 'three',
      component: Three
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
  ]
})
