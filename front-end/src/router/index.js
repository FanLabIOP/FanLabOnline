import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/signup',
    component: () => import('@/views/signup/index'),
    hidden: true
  },

  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/home/index'),
        meta: { title: 'HOME', icon: 'home' }
      }
    ]
  },

  {
    path: '/ipcas',
    component: Layout,
    redirect: '/ipcas/about',
    name: 'Ipcas',
    meta: { title: 'IPCAS', icon: 'I' },
    children: [
      {
        path: 'about',
        name: 'About',
        component: () => import('@/views/ipcas/about/index'),
        meta: { title: 'About' }
      },
      {
        path: 'submit',
        name: 'Submit',
        component: () => import('@/views/ipcas/submit/index'),
        meta: { title: 'Submit' }
      },
      {
        path: 'history',
        name: 'History',
        component: () => import('@/views/ipcas/history/index'),
        meta: { title: 'History' }
      }
    ]
  },

  {
    path: '/oasis',
    component: Layout,
    redirect: '/oasis/about',
    name: 'Oasis',
    meta: { title: 'OASIS', icon: 'O' },
    children: [
      {
        path: 'about',
        name: 'About',
        component: () => import('@/views/oasis/about/index'),
        meta: { title: 'About' }
      },
      {
        path: 'submit',
        name: 'Submit',
        component: () => import('@/views/oasis/submit/index'),
        meta: { title: 'Submit' }
      },
      {
        path: 'history',
        name: 'History',
        component: () => import('@/views/oasis/history/index'),
        meta: { title: 'History' }
      }
    ]
  },

  {
    path: '/vec',
    component: Layout,
    redirect: '/vec/about',
    name: 'Vec',
    meta: { title: 'VEC', icon: 'V' },
    children: [
      {
        path: 'about',
        name: 'About',
        component: () => import('@/views/vec/about/index'),
        meta: { title: 'VEC' }
      }
    ]
  },

  {
    path: '/dims',
    component: Layout,
    redirect: '/dims/about',
    name: 'Dims',
    meta: { title: 'DIMS', icon: 'D' },
    children: [
      {
        path: 'about',
        name: 'About',
        component: () => import('@/views/dims/about/index'),
        meta: { title: 'DIMS' }
      }
    ]
  },

  {
    path: '/sapi',
    component: Layout,
    redirect: '/sapi/about',
    name: 'Sapi',
    meta: { title: 'SAPI', icon: 'S' },
    children: [
      {
        path: 'about',
        name: 'About',
        component: () => import('@/views/sapi/about/index'),
        meta: { title: 'About' }
      },
      {
        path: 'submit',
        name: 'Submit',
        component: () => import('@/views/sapi/submit/index'),
        meta: { title: 'Submit' }
      },
      {
        path: 'history',
        name: 'History',
        component: () => import('@/views/sapi/history/index'),
        meta: { title: 'History' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    hidden: true,
    children: [
      {
        path: 'https://www.revolvermaps.com/livestats/5mq6pok1rj5/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
