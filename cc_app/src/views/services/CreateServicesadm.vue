<template>
  <form>
    <div class="form-group">
      <label for="exampleInputService">Nombre de Servicio</label>
      <input
        type="Services"
        class="form-control"
        id="Service"
        aria-describedby="Services"
        placeholder="Servicio"
        v-model="NuevoServicio.nombre"
      >
    </div>
    <div class="form-group">
      <label for="exampleInputdescripción">Descripción de servicio</label>
      <input
        type="descripción"
        class="form-control"
        id="ServicesDescription"
        placeholder="Descripcion de Servicio"
        v-model="NuevoServicio.descripcion"
      >
    </div>
    <div class="form-group">
      <label for="exampleFormControlType">Tipo de servicio</label>
      <select class="form-control" id="ProductType" v-model="NuevoServicio.tipoServicioId">
        <option
          v-for="tipoServicio in tipo_servicios"
          :key="tipoServicio.id"
          :value="tipoServicio.id"
        >{{tipoServicio.descripcion}}</option>
      </select>
    </div>
    <div class="form-group">
      <label for="exampleFormControlEnlace">Enlace</label>
      <input class="form-control" type="text" id="Enlace" v-model="NuevoServicio.enlace">
    </div>

    <div class="alert alert-danger" role="alert" v-show="error_msj.length > 0">{{error_msj}}</div>

    <div class="form-group">
      <button id="guardar" type="submit" class="btn btn-primary" @click.prevent="guardarServicio">Guardar</button>
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      tipo_servicios: [],
      tipoServicioSeleccionado: "",
      NuevoServicio: {},
      error_msj: ""
    };
  },
  created() {
    this.obtenerTipoServicio();
  },
  methods: {
    obtenerTipoServicio() {
      axios
        .get("http://localhost:3000/servicios/tipo-servicios")
        .then(response => {
          const data = response.data;
          this.tipo_servicios = data.tipo_servicios;
        })
        .catch(error => {
          console.log("error de conexion", error);
        });
    },

    guardarServicio() {
      const btnGuardar = document.querySelector("#guardar");
      btnGuardar.disabled = true;

      if (!this.NuevoServicio.nombre) {
        this.error_msj = "Campo nombre es obligatorio";
        return;
      }

      if (!this.NuevoServicio.descripcion) {
        this.error_msj = "Campo descripcion es obligatorio";
        return;
      }
      this.error_msj = "";

       if (!this.NuevoServicio.tipoServicioId) {
        this.error_msj = "Campo descripcion es obligatorio";
        return;
      }
      this.error_msj = "";

      const data = this.NuevoServicio;
      axios
        .post("http://localhost:3000/servicios/crear_servicio", data)
        .then(response => {
          btnGuardar.disabled = false;
          this.NuevoServicio.nombre = '';
          this.NuevoServicio.descripcion = '';
          this.NuevoServicio.tipoServicioId= '';
          this.NuevoServicio.enlace= '';
          
          this.$emit('created')
        })
        .catch(error => {
          btnGuardar.disabled = false;
          console.log(error);
        });
    }
  }
};
</script>


