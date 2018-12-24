import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/Home'
import One from '../pages/Home/One/One'
import Two from '../pages/Home/Two/Two'
import Three from '../pages/Home/Three/Three'

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
      component: Home,
      children: [
        {
          path: '/',
          redirect: '/one'
        },
        {
          path: '/one',
          component: One
        },
        {
          path: '/two',
          component: Two
        },
        {
          path: '/three',
          component: Three
        },
      ]
    },
  ]
})
