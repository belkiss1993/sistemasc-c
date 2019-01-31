<template>
    
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Sistemas C&C</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Inicio<span class="sr-only">(current)</span></a>
      </li>
     
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Productos
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <router-link class="dropdown-item" to="/adm/createproducts">Crear Productos</router-link>
          <router-link class="dropdown-item" to="/adm/products">Ver lista productos</router-link>
            
         
        </div>
      </li>
    

      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Servicios
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <router-link class="dropdown-item" to="/adm/createservices">Crear Servicios</router-link>
          <router-link class="dropdown-item" to="/adm/services">Ver lista de Servicios</router-link>
        </div>
      </li>

      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Usuarios
        </a>  
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">  
          <router-link  class="dropdown-item" to="/adm/createusers" href="#" role="button"  aria-haspopup="true" aria-expanded="false">
          Crear usuarios</router-link>
          <router-link class="dropdown-item" to="/adm/usersadm">Ver lista de usuarios</router-link>
        </div>
      </li>
      
       
      

      <li class="nav-item">
        <a class="nav-link" href="#" @click.prevent="logout">Salir</a>
      </li>
    </ul>
  </div>
</nav>

</template>


<script>
export default {
  methods: {
    logout() {
      location.replace('/')
    }
  }
}
</script>
