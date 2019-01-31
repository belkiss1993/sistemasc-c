<template>

    <div>
      <modal id="crear-usuario-modal">
        <template slot="contenido">
          <createUsersadm @usuariocreado="refrescarModal"/>
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
          Crear usuario
        </button>
        </template>

        <template slot-scope="data" slot="Acciones">
          <a href="#" class style="margin-right:5px">Editar</a>
          <a href="#" class="btn btn-danger" @click.prevent="eliminarUsuario(data.row.id)">Eliminar</a>
        </template>
      </dataTable>
    </div>

</template>

<script>
import axios from "axios";
import modal from "@/components/Modal";
const dataTable = () => import("@/components/dataTable");
const createUsersadm = () =>import("@/views/user/CreateUsersadm")

export default {
  data() {
    return {
      usuarios: [],
      
      
    };
  },
  //se ejecuta automaticamente cuando se crea la vista
  created() {
    this.obtenerusuarios();
  },

  methods: {
    obtenerusuarios() {
      axios
        .get("http://localhost:3000/usuarios/")
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
        .post("http://localhost:3000/usuarios/eliminar", { id })
        .then(response => {
          this.obtenerusuarios();
        })
        .catch(error => {
          console.log(error);
        });
    },
    refrescarModal() {
      $("#crear-usuario-modal").modal('toggle')
      this.obtenerusuarios();
    }
  },
  components: {
    dataTable,
    modal,
    createUsersadm
  }
};
</script>


