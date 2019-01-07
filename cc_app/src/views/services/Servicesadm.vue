
<template>
  <div>

    <dataTable :dataSource="servicios" :excludedColumns="['tipoServicioId']" />
    
  </div>
</template>

<script>
import axios from "axios";
const dataTable = ()=> import('@/components/dataTable')

export default {
  data() {
    return {
      servicios: []
    };
  },
  //se ejecuta automaticamente cuando se crea la vista
  created() {
    this.obtenerservicios();
  },

  methods: {
    obtenerservicios() {
      axios
        .get("http://localhost:3000/servicios/")
        .then(response => {
          const data = response.data;
          console.log(data);
          if (data.exitoso) {
            this.servicios = data.resultados;
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  },

  components: {
      dataTable
  }
};
</script>
