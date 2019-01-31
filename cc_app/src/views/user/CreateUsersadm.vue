<template>
    <form>
     <div class="form-group">
      <label for="exampleInputUser">Nombre de Usuario</label>
      <input
        type="text"
        class="form-control"
        id="UserName"
        aria-describedby="UserName"
        placeholder="Nombre"
        v-model="NuevoUsuario.nombre"
      >
    </div>
     <div class="form-group">
      <label for="exampleInputUser">Apellido de Usuario</label>
      <input
        type="text"
        class="form-control"
        id="UserLatsname"
        aria-describedby="UserLastname"
        placeholder="Apellido"
        v-model="NuevoUsuario.apellido"
      >
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
  
  <div class="form-group col-md-6">
       <label for="inputMobile">Celular/Telefono</label>
      <input v-model="NuevoUsuario.telefono" type="text" class="form-control" placeholder="Telefono">
    </div>
  </div>



  <div class="row">
   <div class="form-group col-md-8">
     <label for="inputAddress">Dirección</label>
     <input v-model="NuevoUsuario.direccion" type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
   </div>
  </div>

      <div class="form-group">
      <label for="exampleInputUser">Correo</label>
      <input
        type="email"
        class="form-control"
        id="UserEmail"
        aria-describedby="UserEmail"
        placeholder="Correo"
        v-model="NuevoUsuario.email" />
    </div>
      <div class="form-group">
      <label for="exampleInputUser">Contraseña</label>
      <input
        type="password"
        class="form-control"
        id="UserPassword"
        aria-describedby="UserPassword"
        placeholder="Contraeña"
        v-model="NuevoUsuario.password" />
       <small id="passwordHelpInline" class="text-muted">Mas de 6 caracteres.</small>
        <div class="alert alert-danger" role="alert" v-show="error_msj.length > 0">{{error_msj}}</div>

    <div class="form-group">
      <button id="guardar" type="submit" class="btn btn-primary" @click.prevent="guardarUsuario">Guardar</button>
    </div>
    </div>
</form>
</template>

<script>
import axios from "axios";
export default {
  data(){
    return {
        NuevoUsuario: {},
        error_msj: ""
    }
  
  },
  methods:{
    guardarUsuario(){

      if(this.NuevoUsuario.password.length < 6){
        return 
      }
      const data=this.NuevoUsuario
      axios.post('http://localhost:3000/usuarios/crear_usuario', data)
      .then(response =>{
      
         this.$emit("usuariocreado")
      }).catch(error=> {
        console.log(error)
      })
      
    }
  }
}


</script>


