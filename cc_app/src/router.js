import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
const About = ()=> import('./views/About.vue')
const Login  = ()=> import('./views/user/Login.vue')
const Registro = ()=> import('./views/user/Registro.vue')
const Productos = ()=> import('./views/products/Product.vue')
const Productosadm = ()=> import('./views/products/Productadm.vue')
const Servicesadm = ()=> import('./views/services/Servicesadm.vue')
const CreateProductsadm = ()=> import('./views/products/CreateProductsadm.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/users/login',
      name: 'userLogin',
      component: Login
    },
    {
      path: '/users/registro',
      name: 'userRegister',
      component: Registro
    },
    {
      path: '/products',
      name: 'productosclientes',
      component: Productos
    },
    {
      path:'/adm/products',
      name: 'productosadm',
      component: Productosadm

    },
    {
      path:'/adm/services',
     name:'servicesadm',
     component: Servicesadm
    },
    {
      path:'/adm/createproducts',
      name:'createproductsadm',
      component: CreateProductsadm
    }
  ]
})
