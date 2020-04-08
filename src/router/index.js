import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/page/',
    name: 'pageIndex',
    component: () => import('../views/index.vue'),
    children:[
      {
        path:'index',
        component: () => import('../views/page/indexPage.vue'),
      },
      {
        path:'table/',
        component: () => import('../views/page/TablePage.vue'),
        children:[
          {
            path:'editTable',
            component:() => import('../views/page/TablePageEdit.vue')
          },
          {
            path:'flexibleTable',
            component:() => import('../views/page/TablePageFlexible.vue')
          }
        ]
      },
      {
        path:'admin',
        component: () => import('../views/page/AdminPage.vue'),
      },
      {
        path:'drag/',
        component: () => import('../views/page/DragPage.vue'),
        children:[
          {
            path:'single',
            component:() => import('../views/page/DragPageSingle.vue')
          },
          {
            path:'group',
            component:() => import('../views/page/DragPageGroup.vue')
          }
        ]
      },
      {
        path:'tree',
        component: () => import('../views/page/TreePage.vue'),
      },
      {
        path:'error/',
        component: () => import('../views/page/ErrorPage.vue'),
        children:[
          {
            path:'404',
            component:() => import('../views/page/ErrorPage404.vue')
          },
          {
            path:'500',
            component:() => import('../views/page/ErrorPage500.vue')
          }
        ]
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
