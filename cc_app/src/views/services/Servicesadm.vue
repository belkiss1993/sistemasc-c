<template>
  <div>
    <dataTable 
    :dataSource="servicios" 
    :excludedColumns="['tipoServicioId', 'id']" 
    :extraColumns="['Acciones']"
    searchTerm="nombre">    
    
      <template slot-scope="data" slot="Acciones">
        <a href="#" class="btn btn-danger" @click.prevent="eliminarServicio(data.row.id)">Eliminar</a>
        <a href="#" class="btn btn-default">Ver</a>
      </template>
    </dataTable>
  </div>
</template>


<script>
import axios from "axios";
const dataTable = () => import("@/components/dataTable");

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
    },

    eliminarServicio(id) {
      const continuar = confirm("¿Desea eliminar?");
      
      if (!continuar) {
        return;
      }

      console.log(id)

      axios.post("http://localhost:3000/servicios/eliminar", {id}).then(response=>{
          this.obtenerservicios();

        }).catch(error => {
          console.log(error);
      })
    }
  },

  components: {
    dataTable
  }
}
</script>
