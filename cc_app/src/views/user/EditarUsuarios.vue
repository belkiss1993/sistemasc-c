<template>
    <form>
     <div class="form-group">
      <label for="exampleInputUser">Nombre de Usuario</label>
      <input
        type="text"
        class="form-control"
        name="UserName"
        aria-describedby="UserName"
        placeholder="Nombre"
        v-model="usuario.nombre"
      >
    </div>
  
    
    <div class="row">
    <div class="form-group col-md-4">
      <label for="inputGenero">Genero</label>
      <select  class="form-control" v-model="usuario.sexo">
        <option value="M">Masculino</option>
        <option value="F">Femenino</option>
      </select>
    </div>
  </div>

   <div class="row">
  
  <div class="form-group col-md-6">
       <label for="inputMobile">Celular/Telefono</label>
      <input v-model="usuario.telefono" type="text" class="form-control" placeholder="Telefono">
    </div>
  </div>



  <!-- <div class="row">
   <div class="form-group col-md-8">
     <label for="inputAddress">Dirección</label>
     <input v-model="usuario.direccion" type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
   </div>
  </div> -->

      <div class="form-group">
      <label for="exampleInputUser">Correo</label>
      <input
        type="email"
        class="form-control"
        name="UserEmail"
        aria-describedby="UserEmail"
        placeholder="Correo"
        v-model="usuario.email" />
    </div>

      <div class="form-group">
      <label for="editUserPassword">Contraseña</label>
      <input
        type="password"
        class="form-control"
        name="editUserPassword"
        aria-describedby="UserPassword"
        placeholder="Contraeña"
        v-model="usuario.password" />
       <small id="passwordHelpInline" class="text-muted">Mas de 6 caracteres.</small>
    </div>

    <div class="form-group" v-if="usuario.password">
      <label for="passconfirm">Confirmar Contraseña</label>
      <input type="password" class="form-control" name="passconfirm" v-model="usuario.passConfirm">
    </div>

    <div class="alert alert-danger" role="alert" v-show="error_msj.length > 0">{{error_msj}}</div>

    <div class="form-group">
      <button id="btnEditar" type="submit" class="btn btn-primary" @click.prevent="editarUsuario">Guardar</button>
    </div>
</form>
</template>

<script>
import axios from "axios"

export default {
    props: ['usuario'],

    data(){
        return {
          tipo_usuario: [],
          error_msj: ''
        } 
    },
     created() {
        this.obtenerTipoUsuarios();
    },
    methods: {
      obtenerTipoUsuarios() {
            axios.get("http://localhost:3000/usuarios/tipo-usuarios").then(response => {
                    const data = response.data;
                    this.tipo_usuario = data.tipo_usuario;
            })
            .catch(error => {
            console.log("error de conexion", error);
            });
      },

      editarUsuario(){

        if(this.usuario.password > 0){

          const continuar = confirm('¿Desea cambiar esta contraseña?')
          if(!continuar)
            return

          if (this.usuario.password != this.usuario.passConfirm){
            this.error_msj = "las contraseñas con coinciden"
            return
          }
        }
        if (!this.usuario.nombre) {
        this.error_msj = "Campo nombre es obligatorio";
        return;
      }
      if (!this.usuario.sexo) {
        this.error_msj = "Campo genero es obligatorio";
        return;
      }
       if (!this.usuario.telefono) {
        this.error_msj = "Campo telefono es obligatorio";
        return;
      }
        if (!this.usuario.email) {
        this.error_msj = "Campo correo es obligatorio";
        return;
      }
      

        const data = this.usuario

        axios.post('http://localhost:3000/usuarios/editar', data).then(r =>{
          if(r.data.exitoso){
            this.$emit('editado')
          }

        }).catch(err =>{
          console.log(err)
        })
      }
    }
} 
</script>
