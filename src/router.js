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
      path: '/visual.design',
      name: 'visual.design',
      component: () => import('./views/CPVisualDesign.vue')
    },
    /*
    {
      path: '/cp-project.editor',
      name: 'cp-project.editor',
      component: () => import( './views/CPProjectEditor.vue')
    },
    {
      path: '/cp-public.view',
      name: 'cp-public.view',
      component: () => import( './views/CPPublicView.vue')
    },
    */
    {
      path: '/export.video',
      name: 'export.video',
      component: () => import('./views/CPExportVideo.vue')
    },
    {
      path: '/mobile.create',
      name: 'mobile.create',
      component: () => import('./views/CPMobileCreate.vue')
    },
    /*
    {
      path: '/cityplanner',
      name: 'cityplanner',
      component: () => import('./views/CityPlanner.vue')
    },
    */
    {
      path: '/panorama',
      name: 'panorama',
      component: () => import('./views/Panorama.vue')
    },
    {
      path: '/minstad',
      name: 'minstad',
      component: () => import('./views/MinStad.vue')
    },
    {
      path: '/snografx',
      name: 'snografx',
      component: () => import('./views/Snografx.vue')
    },
    /*
    {
      path: '/datamanager',
      name: 'datamanager',
      component: () => import('./views/DataManager.vue')
    },
    {
      path: '/template.logic',
      name: 'template.logic',
      component: () => import('./views/Template.vue')
    },
    {
      path: '/template',
      name: 'template',
      component: () => import('./views/TemplateSingle.vue')
    },
    */
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