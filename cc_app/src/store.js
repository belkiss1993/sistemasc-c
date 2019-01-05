import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario: null,

  },
  mutations: {

    registrarUsuario(state, payload) {
      state.usuario = payload
    }

  },
  actions: {

  }
})
