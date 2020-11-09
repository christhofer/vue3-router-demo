import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

import AboutCompany from '../views/AboutCompany.vue'
import AboutServices from '../views/AboutServices.vue'

import Product from '../views/Product.vue'
import ProductDetail from '../views/ProductDetail.vue'

const routes = [
  {
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
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    children: [
      {
        path: '/about/company',
        name: 'about company',
        component: AboutCompany
      },
      {
        path: '/about/services',
        name: 'about services',
        component: AboutServices
      },
    ],
  },
  {
    path: '/products',
    name: 'products',
    component: Product,
  },
  {
    path: '/products/:type',
    name: 'products detail',
    props: true,
    component: ProductDetail,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
