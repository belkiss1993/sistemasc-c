<template>

    <div class="row">
        <div class="col-md-5"></div>
        <div class="col-md-5">
            <form>
                <div class="form-group">
                    <label for="email">Dirección de correo electrónico</label>
                    <input 
                        v-model="email"
                        type="text" 
                        name="email" 
                        class="form-control" 
                        placeholder="Email" />
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

                <div class="form-check">
                  <input type="checkbox" class="form-check-input" id="dropdownCheck">
                     <label class="form-check-label" for="dropdownCheck">
                      Remember me
                     </label>
               </div>

                <div class="form-group">
                    <button type="button" @click.prevent="verifyAccount" class="btn btn-primary">Entrar</button>
                </div>
            </form>
            <div class="dropdown-divider"></div>
  <a class="dropdown-item" href="#">New around here? Sign up</a>
  <a class="dropdown-item" href="#">Forgot password?</a>

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
                console.log(response)
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

</style>
