import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/Home.vue'
import Hospital from '../pages/Hospital/Hospital.vue'
import Company from '../pages/Company/Company.vue'
import KeyPoint from '../pages/Hospital/KeyPoint/KeyPoint.vue'
import Province from '../pages/Hospital/Province/Province.vue'
import ServerType from '../pages/Company/ServerType/ServerType.vue'
import Region from '../pages/Company/Region/Region.vue'

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
      path: '/hospital',
      name: 'hospital',
      component: Hospital,
    },
    {
      path: '/keypoint',
      name: 'keypoint',
      component: KeyPoint
    },
    {
      path: '/province',
      name: 'province',
      component: Province
    },
    {
      path: '/company',
      name: 'company',
      component: Company,
    },
    {
      path: '/servertype',
      name: 'servertype',
      component: ServerType
    },
    {
      path: '/region',
      name: 'region',
      component: Region
    }
  ]
})
