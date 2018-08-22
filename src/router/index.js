/* 
    路由管理
*/

import Router from 'vue-router'


const router = new Router({
  routes: [{
      path: '/',
      redirect: '/homePage'
    },
    {
      path: '/homePage',
      name: '微点首页',
      component:r=>require.ensure([],()=>r(require('../modules/homepage/index.vue')),'homePage')
    }
  ]
})


export default router