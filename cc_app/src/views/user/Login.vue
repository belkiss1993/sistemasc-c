<template>

    <div class="row">
        <!-- <div class="login-wrapper"> -->
        <div class="col-md-5"></div>
        <div class="col-md-5">
            <form @submit.prevent="verifyAccount">
        
                <div class="imgcontainer">
                     <img src="icon-design-users.png" alt="icon" class="icon">
               </div>
    

                <div class="form-group" >
                    <div class>
                    <label for="email" >Dirección de correo electrónico</label>
                    <input 
                        v-model="email"
                        type="text" 
                        name="email" 
                        class="form-control" 
                        placeholder="Email" />
                </div>
                </div>
               

                <div class="form-group">
                    <label for="password">Contraseña</label>
                    <input 
                        v-model="password"
                        type="password" 
                        name="password" 
                        class="form-control" 
                        placeholder="Password">
                </div>

                <div class="alert alert-danger" role="alert" v-show="error.length > 0">
                    {{error}}
                </div>

                <div class="form-group">
                    <button type="submit" @click.prevent="verifyAccount" class="btn btn-lg btn-primary btn-block btn-signin" ty>Iniciar sesión</button>
                </div>
            </form>

          </div>
        
        <div class="col-md-2">
        </div>
   
   
   </div>

</template>

<script>
// libreria para conexion ajax con el servidor
import axios from 'axios'

export default {
    data(){
        return {
            email: '',
            password: '',
            error: ''
        }
    },

    methods: {
        verifyAccount(){
            if(this.email == '' || this.password == ''){
                this.error = 'por favor llene los campos requeridos'
                return
            }else{
                this.error = ''
            }

            const data = {
                email : this.email,
                password : this.password
            }

            axios.post('http://localhost:3000/usuarios/login', data).then(response =>{
                const resultado = response.data

                if (resultado.exitoso) {
                    const usuario = resultado.data
                    this.$store.commit('registrarUsuario', usuario)
                    this.$router.push('/adm/products')
                }
                // codigo para cuando todo es exitoso
                // this.$router.push('/')
            }).catch(error =>{
                // codigo para cuando hay un error
                this.error = 'usuario o contraseña no valido'
                console.log(error)
            })

            
        }
    }
    
}
</script>

<style>
/* .login-wrapper{
  background-color:#f7f7f7;
  width: 420px;
  height: 400px;
  border-radius: 2px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
  margin: 0 auto;
  
} */
.imgcontainer{
  text-align: center;
  margin: 34px 0 22px 0;

}
/* Avatar image */
img.icon {
  width: 40%;
  border-radius: 80%;
}

</style>
