const routes = [
  {
    path: '/billOpen',
    name: 'billOpen',
    component: () => import(/* webpackChunkName: "about" */ '../views/billOpen.vue'),
  },
  {
    path: '/myBill',
    name: 'myBill',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/myBill.vue'),
  },
  {
    path: '/*',
    name: '404',
    component: () => import('../views/errorPage/404.vue'),
    meta: {
      notRequireAuth: true
    }
  }
]
export default routes
