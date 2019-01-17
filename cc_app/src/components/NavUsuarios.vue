<template>
    <div>
        <div id="nav">
            <!-- Barra de navegacion -->
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <img src="../img/sistemas.png" width="70" height="70" alt=""/>

                <button 
                    class="navbar-toggler" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarNavDropdown" 
                    aria-controls="navbarNavDropdown" 
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse w-100" id="navbarNavDropdown">
                    <ul class="navbar-nav w-100 justify-content-center">
                        <li class="nav-item active">
                            <router-link class="nav-link" to="/"> Inicio </router-link>
                        </li>
                                
                        <li class="nav-item dropdown">
                            <a
                                class="nav-link dropdown-toggle" 
                                href="!#"
                                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Productos
                            </a>
                            
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <router-link class="dropdown-item" to="/">Profesional</router-link>
                                <a class="dropdown-item" href="#">Empresa</a>
                                <a class="dropdown-item" href="#">Hogar</a>
                            </div>
                        </li>
                        
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Servicios
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <router-link class="dropdown-item" to="/">Soluciones de Oficina</router-link>
                                <a class="dropdown-item" href="#">Soluciones de Informatica</a>
                                <a class="dropdown-item" href="#">Soporte Tecnico Especializado</a>
                            </div>
                        </li>
                        
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Cuenta
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <router-link class="dropdown-item" to="/users/login">Iniciar sesión</router-link>
                                <router-link class="dropdown-item" to="/users/registro">Crear cuenta</router-link>
                                <a class="dropdown-item" href="#">Ayuda</a>
                            </div>
                        </li>
                        
                        <li>
                            <router-link class="nav-link" to="/contact">Contacto</router-link>
                        </li>
                    </ul>
                    <ul class="nav navbar-nav w-100 justify-content-end">
                        <span>PBX: (+504) 2239 3800</span>
                    </ul>
                </div>            
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavUsuarios'
}
</script>

<style scoped>
#nav {
  padding: 5px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #eb4434;
}
</style>
