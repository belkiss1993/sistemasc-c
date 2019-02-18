<template>

  <form>
   <div class="row">
  
    <div class="form-group col-md-4">
       <label for="inputEmail4">Nombre</label>
      <input v-model="NuevoUsuario.nombre" type="text" class="form-control" placeholder="Nombre">
    </div>

    <div class="form-group col-md-4">
       <label for="inputEmail4">Apellido</label>
      <input v-model="NuevoUsuario.apellido" type="text" class="form-control" placeholder="Apellido">
    </div>
  </div>

  <div class="row">
    <div class="form-group col-md-4">
      <label for="inputGenero">Genero</label>
      <select  class="form-control" v-model="NuevoUsuario.sexo">
        <option value="M">Masculino</option>
        <option value="F">Femenino</option>
      </select>
    </div>
    
    <div class="archivo custom-file form-group col-md-4">
      <label class="custom-file-label">Seleccionar Archivo</label>
      <input type="file" class="custom-file-input" id="customFileLang" lang="es">
    </div>
  </div>

  
  <div class="row">
    <div class="form-group col-md-4">
      <label for="inputEmail4">Correo</label>
      <input v-model="NuevoUsuario.email" class="form-control" id="inputEmail4" placeholder="Email">
    </div>

    <div class="form-group col-md-4">
      <label for="inputPassword4">Contraseña</label>
      <input v-model="NuevoUsuario.password" type="password" class="form-control" id="inputPassword4" placeholder="Contraseña">
      <small id="passwordHelpInline" class="text-muted">
      Mas de 6 caracteres.
      </small>
    </div>
  </div>

    <div class="row">
  
  <div class="form-group col-md-6">
       <label for="inputMobile">Celular/Telefono</label>
      <input v-model="NuevoUsuario.telefono" type="text" class="form-control" placeholder="Telefono">
    </div>
  </div>



  <div class="row">
   <div class="form-group col-md-8">
     <label for="inputAddress">Direccion</label>
     <input v-model="NuevoUsuario.direccion" type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
   </div>
  </div>


  <div class="row">

    <div class="form-group col-md-4">
      <label for="inputPais">Pais</label>
      <select class="form-control" v-model="paisSeleccionado">
        <option v-for="pais in paises" :key="pais.id" :value="pais.id">
          {{pais.nombre}}
        </option>
      </select>
    </div>

    <div class="form-group col-md-4">
      <label for="inputDepartment">Departamento</label>
      <select v-model="departamentoSeleccionado" id="inputDepartment" class="form-control">
        <option :value="departamento.id" v-for="departamento in departamentos" :key="departamento.id">
          {{departamento.nombre}}
        </option>
      </select>
    </div>
    
    <div class="form-group col-md-4">
      <label for="inputCity">Ciudad</label>
      <select v-model="NuevoUsuario.ciudad" id="inputCity" class="form-control">
        <option :value="ciudad.id" v-for="ciudad in ciudades" :key="ciudad.id" >
          {{ciudad.nombre}}
        </option>
      </select>
    </div>
  </div>
  
  <button @click.prevent="guardarUsuario" type="submit" class="btn btn-primary">Registrarse</button>

  
  
</form>

</template>

<script>

import axios from 'axios'

export default {
  data(){
    return{
      NuevoUsuario:{},
      paisSeleccionado: "",
      departamentoSeleccionado:"",
      paises: [],
      departamentos: [],
      ciudades: []
    }
  },

  created(){
    axios.get(this.serverUrl+'/paises').then(response=>{

      const data = response.data
      this.paises = data

    }).catch(error=>{
      console.log(error)
    })
  },

  methods:{
    guardarUsuario(){
      console.log(this.NuevoUsuario);

      if(this.NuevoUsuario.password.length < 6){
        return 
      }
      const data=this.NuevoUsuario
      axios.post(this.serverUrl+'/usuarios/crear_usuario', data).then(response =>{
          this.$router.push('/users/login')
      }).catch(error=> {
        console.log(error)
      })
      
    }
  },

  watch: {
    paisSeleccionado: function(nuevoValor){
      axios.get(this.serverUrl+'/pais-depts/'+nuevoValor).then(response=> {
        const data = response.data

        if(data.exitoso){
          this.departamentos = data.result
        }else{
          this.departamentos = []
        }

      }).catch(error=>{
        console.log(error)
      })
    },

    //aqui empezar el departamento con la sintaxis de pais seleccionado
    departamentoSeleccionado: function(nuevoValor){
      axios.get(this.serverUrl+'/departamentos-ciudades/'+nuevoValor).then(response=> {
        const data = response.data
        if(data.exitoso){
          this.ciudades= data.result 
        }else{
          this.ciudades = []
        }
      }).catch(error=>{
        console.log(error)
      })
      
    }
  }
}
</script>

<style scoped>
.archivo{
  margin-left: 15px;
  margin-top: 30px;
}
</style>
