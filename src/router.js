import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  //mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/cp-visual.design',
      name: 'cp-visual.design',
      component: () => import( /* webpackChunkName: "about" */ './views/CPVisualDesign.vue')
    },
    {
      path: '/cp-project.editor',
      name: 'cp-project.editor',
      component: () => import( /* webpackChunkName: "about" */ './views/CPProjectEditor.vue')
    },
    {
      path: '/cp-public.view',
      name: 'cp-public.view',
      component: () => import( /* webpackChunkName: "about" */ './views/CPPublicView.vue')
    },
    {
      path: '/cityplanner',
      name: 'cityplanner',
      component: () => import( /* webpackChunkName: "about" */ './views/CityPlanner.vue')
    },
    {
      path: '/panorama',
      name: 'panorama',
      component: () => import( /* webpackChunkName: "about" */ './views/Panorama.vue')
    },
    {
      path: '/minstad',
      name: 'minstad',
      component: () => import( /* webpackChunkName: "about" */ './views/MinStad.vue')
    },
    {
      path: '/snografx',
      name: 'snografx',
      component: () => import( /* webpackChunkName: "about" */ './views/Snografx.vue')
    },
    {
      path: '/datamanager',
      name: 'datamanager',
      component: () => import( /* webpackChunkName: "about" */ './views/DataManager.vue')
    },
  ],

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }

})