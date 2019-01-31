import Vue from 'vue'
import Router from 'vue-router'
import constants from './constantes'

import Home from './views/Home.vue'
const About = ()=> import('./views/contact.vue')
const Login  = ()=> import('./views/user/Login.vue')
const Registro = ()=> import('./views/user/Registro.vue')
const Productosadm = ()=> import('./views/products/Productadm.vue')
const Servicesadm = ()=> import('./views/services/Servicesadm.vue')
const CreateProductsadm = ()=> import('./views/products/CreateProductsadm.vue')
const CreateServicesadm = ()=> import('./views/services/CreateServicesadm.vue')
const CreateUsersadm = ()=> import('./views/user/CreateUsersadm.vue')
const Usersadm = ()=> import('./views/user/Usersadm.vue')
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

    /**
     * Rutas de administrador
     */
    {
      path:'/adm/products',
      name: 'productosadm',
      component: Productosadm,
      meta: {
        requiresAuth: true,
        permissionRequired: constants.permisosProductos.ver
      }
    },
    {
      path:'/adm/services',
      name:'servicesadm',
      component: Servicesadm,
      meta: {
        requiresAuth: true,
        permissionRequired: constants.permisosServicios.ver
      }
    },
    {
      path:'/adm/createproducts',
      name:'createproductsadm',
      component: CreateProductsadm,
      meta: {
        requiresAuth: true,
        permissionRequired: constants.permisosProductos.crear
      }
    },
    {
      path:'/adm/createservices',
      name:'createservicesadm',
      component: CreateServicesadm,
      meta: {
        requiresAuth: true,
        permissionRequired: constants.permisosServicios.crear
      }
    },
    {
    path:'/adm/usersadm',
    name:'useradm',
    component:Usersadm
    },
    {
    path:'/adm/createusers',
    name:'createuseradm',
    component:CreateUsersadm
    },
  ]
})
