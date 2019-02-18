<template>

    <div>
      <modal id="crear-usuario-modal">
        <template slot="contenido">
          <createUsersadm @usuariocreado="refrescarModal('crear-usuario-modal')"/>
        </template>
      </modal>

       <modal id="editar-usuario-modal" titulo="Editar Usuario">
             <template slot="contenido">
                <editarUser @editado="refrescarModal('editar-usuario-modal')" :usuario="usuarioSeleccionado" />
             </template>
         </modal>

      <dataTable
        :dataSource="usuarios"
        :excludedColumns="['id']"
        :extraColumns="['Acciones']"
        searchTerm="nombre"
      >
        <template slot="Acciones-header">
         <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#crear-usuario-modal">
          <i class="fa fa-user-plus" aria-hidden="true"></i> Crear Usuario 
        </button>
        </template>

        <template slot-scope="data" slot="Acciones">
            <a href="#" class="" style="margin-right:5px" 
            @click.prevent="abrirEditarModal(data.row)"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>Editar</a>
          <a href="#" class="btn btn-danger" @click.prevent="eliminarUsuario(data.row.id)"> <i class="fa fa-user-times" aria-hidden="true"></i>Eliminar</a>
        </template>
      </dataTable>
    </div>

</template>

<script>
import axios from "axios";
import modal from "@/components/Modal";
const dataTable = () => import("@/components/dataTable");
const editarUser = ()=> import('@/views/user/EditarUsuarios')
const createUsersadm = () =>import("@/views/user/CreateUsersadm")

export default {
  data() {
    return {
      usuarios: [],
      usuarioSeleccionado: {
        id: '',
        nombre:'', 
        telefono:'', 
        email:'', 
        sexo:'',
        //  password:'', 
        //  imagen:'', 
          tipoUsuarioId:''
      }
      
      
    };
  },
  //se ejecuta automaticamente cuando se crea la vista
  created() {
    this.obtenerusuarios();
  },

  methods: {
    obtenerusuarios() {
      axios
        .get(this.serverUrl+"/usuarios/")
        .then(response => {
          const data = response.data;
          if (data.exitoso) {
            this.usuarios = data.resultados;
          }
        })
        .catch(error => {
          console.log(error);
        });
    },

    eliminarUsuario(id) {
      const continuar = confirm("¿Desea eliminar?");
      if (!continuar) {
        return;
      }
      axios
        .post(this.serverUrl+"/usuarios/eliminar", {id})
        .then(response => {
          this.obtenerusuarios();
        })
        .catch(error => {
          console.log(error);
        });
    },

    abrirEditarModal(usuario){
      this.usuarioSeleccionado.id = usuario.id
      this.usuarioSeleccionado.nombre = usuario.nombre
      this.usuarioSeleccionado.telefono = usuario.telefono
      this.usuarioSeleccionado.email = usuario.email
      this.usuarioSeleccionado.sexo =  usuario.sexo
      this.usuarioSeleccionado.tipoUsuarioId = usuario.tipoUsuarioId
      

      $('#editar-usuario-modal').modal('toggle')
    },

    refrescarModal(idModal) {
      $("#"+idModal).modal('toggle')
      this.obtenerusuarios();
    }
  },
  components: {
    dataTable,
    modal,
    createUsersadm,
    editarUser
  }
};
</script>


