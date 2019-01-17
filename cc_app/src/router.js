import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
const About = ()=> import('./views/contact.vue')
const Login  = ()=> import('./views/user/Login.vue')
const Registro = ()=> import('./views/user/Registro.vue')
const Productos = ()=> import('./views/products/Product.vue')
const Productosadm = ()=> import('./views/products/Productadm.vue')
const Servicesadm = ()=> import('./views/services/Servicesadm.vue')
const CreateProductsadm = ()=> import('./views/products/CreateProductsadm.vue')
const CreateServicesadm = ()=> import('./views/services/CreateServicesadm.vue')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/contact',
      name: 'contact',
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
    },
    {
      path:'/adm/createservices',
      name:'createservicesadm',
      component: CreateServicesadm
    }
  ]
})
