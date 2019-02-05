<template>
<div class="container">
  
  <div class="row">
    <div v-for="servicio in servicios" :key="servicio.id" class="card col-md-4">
      <img class="card-img-top" src="@/img/canon1.png" alt="Card image cap">
      <div class="card-body">
        <center><h5 class="card-title">{{servicio.nombre}}</h5></center>
        <p class="card-text">
            {{servicio.descripción_servicio}}
        </p>
        <p class="card-text" v-if="servicio.enlace">
            <center>
                <a :href="servicio.enlace" target="_blank" class="btn btn-light"><u>Ver Más</u></a>
            </center>
        </p>
      </div>
    </div>
  </div>

</div>
</template>

<script>
import axios from "axios";

export default {
  props: ["tipoServicio"],
  data() {
    return {
      servicios: []
    };
  },

  created() {
    this.getServicios();
  },

  methods: {
    getServicios() {
      axios
        .get("http://localhost:3000/servicios/explorar/" + this.tipoServicio)
        .then(response => {
          const data = response.data;
          if (data.exitoso) this.servicios = data.servicios;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  watch: {
    tipoServicio: function(val) {
      this.getServicios();
    }
  }
};
</script>