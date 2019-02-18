import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

/**************************
 ***** Route Guarding *****
 **************************/
router.beforeEach( (to, from, next)=>{

  if(to.matched.some(record => record.meta.requiresAuth)){

    if(store.state.usuario == null){
      next({
        path: '/users/login',
        query: { redirect: to.fullPath }
      })
    }else{
      const permisos = store.getters.permisos
      
      if(!permisos){
        alert('No cuenta con los permisos necesarios')
        return
      }

      let permissionGranted = false
      const currentRoute = to.matched[0]

      permissionGranted = permisos.some( permiso=> {
        if (!currentRoute.meta.permissionRequired)
          return true
        
        return currentRoute.meta.permissionRequired === permiso
      })

      if(!permissionGranted)
        alert('No cuenta con los permisos necesarios')

      else
        next()
    }
  }
  else if(to.matched.some(record => record.meta.requiresGuest)){
    if(store.state.user != null)
      next({
        path: '/',
        query: { redirect: to.fullPath}
      })
    //default route
    else
      next()
  }
  else
    next()
})

Vue.mixin({
  data(){
    return{
      serverUrl: 'http://localhost:3000'
      // serverUrl:'https://sitemacc-honduras.herokuapp.com'
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
