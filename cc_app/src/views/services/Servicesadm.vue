<template>
  <div>
    <modal id="crear-servicio-modal">
      <template slot="contenido">
        <createServicesAdm @created="refrescarModal('crear-servicio-modal')" />
      </template>
    </modal>

       <modal id="editar-servicio-modal" titulo="Editar Servicio">
             <template slot="contenido">
                <editarServices @edit="refrescarModal('editar-servicio-modal')" :servicio="servicioSeleccionado" />
             </template>
         </modal>

    <dataTable 
      :dataSource="servicios" 
      :excludedColumns="['tipoServicioId', 'id']" 
      :extraColumns="['Acciones']"
      searchTerm="nombre">

      <template slot="Acciones-header">
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#crear-servicio-modal">
        <i class="fa fa-plus-square" aria-hidden="true"></i>  Crear Servicio
        </button>
      </template>
    
      <template slot-scope="data" slot="Acciones">
          <a href="#" class="" style="margin-right:5px" @click.prevent="abrirEditarModal(data.row)"> <i class="fa fa-pencil-square-o" aria-hidden="true"></i>Editar</a>
 
        <a href="#" class="btn btn-danger" @click.prevent="eliminarServicio(data.row.id)"><i class="fa fa-times" aria-hidden="true"></i>Eliminar</a>
      </template>
    </dataTable>
  </div>
</template>


<script>
import axios from "axios";
import modal from '@/components/Modal'
const createServicesAdm = ()=> import('@/views/services/CreateServicesadm')
const editarServices= ()=> import('@/views/services/EditarServicios.vue')
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
          this.servicioSeleccionado.id = servicio.id
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

    refrescarModal(idModal){
      $('#'+idModal).modal('toggle')
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
