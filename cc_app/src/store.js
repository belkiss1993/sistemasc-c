import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario: null,

  },
  mutations: {

    registrarUsuario(state, payload) {
      const permisos = []
      for(let p of payload.permisos){
        permisos.push(p.permisoId)
      }

      state.usuario = payload
      state.usuario.permisos = permisos
    }

  },
  actions: {

  },
  getters: {
    tipoUsuario: state =>{
      if (!state.usuario)
        return -1
      
      return state.usuario.tipoUsuarioId || -1
    },

    permisos: state =>{
      if(!state.usuario)
        return []
      
      return state.usuario.permisos
    }
  }
})
