<template>
  <div>
    <modal id="crear-servicio-modal">
      <template slot="contenido">
        <createServicesAdm @created="refrescarModal" />
      </template>
    </modal>

       <modal id="editar-servicio-modal" titulo="Editar Servicio">
             <template slot="contenido">
                <editarServices :servicio="servicioSeleccionado" />
             </template>
         </modal>

    <dataTable 
      :dataSource="servicios" 
      :excludedColumns="['tipoServicioId', 'id']" 
      :extraColumns="['Acciones']"
      searchTerm="nombre">

      <template slot="Acciones-header">
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#crear-servicio-modal">
          Crear Servicio
        </button>
      </template>
    
      <template slot-scope="data" slot="Acciones">
          <a href="#" class="" style="margin-right:5px" @click.prevent="abrirEditarModal(data.row)">Editar</a>
 
        <a href="#" class="btn btn-danger" @click.prevent="eliminarServicio(data.row.id)">Eliminar</a>
      </template>
    </dataTable>
  </div>
</template>


<script>
import axios from "axios";
import modal from '@/components/Modal'
const createServicesAdm = ()=> import('@/views/services/CreateServicesadm')
const editarServices= ()=> import('@/views/services/EditarServicios')
const dataTable = () => import("@/components/dataTable");

export default {
  data() {
    return {
      servicios: [],
        servicioSeleccionado: {
                nombre: '',
                descripcion: '',
                enlace:'',
                tipoServicioId:'',
              
            }
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
    },
      abrirEditarModal(servicio){
            this.servicioSeleccionado.nombre = servicio.nombre
            this.servicioSeleccionado.descripcion = servicio.descripción_servicio
            this.servicioSeleccionado.enlace =  servicio.enlace
            this.servicioSeleccionado.tipoServicioId = servicio.tipoServicioId
     

            $('#editar-servicio-modal').modal('toggle')
        },
          editarServicio(id){
            
            axios.post("http://localhost:3000/servicios/editar"),{id}.then(response=>{
                this.obtenerservicios()
            }).catch(error=>{
                console.log(error)
            })
        },

    refrescarModal(){
      $('#crear-servicio-modal').modal('toggle')
      this.obtenerservicios()
    }
  },

  components: {
    dataTable,
    modal,
    createServicesAdm,
    editarServices
  }
}
</script>
