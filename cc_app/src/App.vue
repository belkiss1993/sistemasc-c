<template>
  <div id="appView">

    <adminnav v-if="usuarioEsLogueado" />
    <usuarionav v-else/>
    
    <router-view class="container"></router-view>
    
    
  </div>

</template>

<script>

const adminnav= () => import('@/components/NavAdmin')
const usuarionav= () => import('@/components/NavUsuarios')


export default {
  name: 'App',

  computed: {
    usuarioEsLogueado(){

      const usuario = this.$store.state.usuario

      if (usuario == null)
        return false
      else
        return true
    }
  },

  components:{
   adminnav,
   usuarionav
 }

}
</script>


<style>
#appView {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
