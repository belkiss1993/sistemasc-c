<template>
  <form>
    <div class="form-group">
      <label for="exampleInputProduct">Nombre de Producto</label>
      <input
        v-model="Nuevoproducto.nombre"
        type="Product"
        class="form-control"
        id="Product"
        aria-describedby="Product"
        placeholder="Producto"
      >
    </div>
    <div class="form-group">
      <label for="exampleInputdescripción">Descripción de producto</label>
      <input
        v-model="Nuevoproducto.descripcion"
        type="descripción"
        class="form-control"
        id="ProductDescription"
        placeholder="Descripción de producto"
      >
    </div>
    <div class="form-group">
      <label for="exampleInputModel">Modelo</label>
      <input
        v-model="Nuevoproducto.modelo"
        type="Model"
        class="form-control"
        id="Model"
        placeholder="Modelo"
      >
    </div>

    <div class="form-group">
      <label for="exampleFormControlType">Tipo de Producto</label>
      <select class="form-control" v-model="Nuevoproducto.tipoProductoId">
        <option
          v-for=" tipoProducto in tipo_producto"
          :key="tipoProducto.id"
          :value="tipoProducto.id"
        >{{tipoProducto.descripcion}}</option>
      </select>
    </div>

    <div class="form-group">
      <label for="exampleFormControlSegment">Tipo de Segmento</label>
      <select class="form-control" v-model="Nuevoproducto.segmentoId">
        <option
          v-for=" tipoSegmento in tipo_segmentos"
          :key="tipoSegmento.id"
          :value="tipoSegmento.id"
        >{{tipoSegmento.descripcion}}</option>
      </select>
    </div>

    <div class="alert alert-danger" role="alert" v-show="error_msj.length > 0">{{error_msj}}</div>

    <div class="form-group">
      <button id="guardar" type="submit" class="btn btn-primary" @click.prevent="guardarProducto">Guardar</button>
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      tipo_producto: [],
      tipoProductoSeleccionado: "",
      tipo_segmentos: [],
      tipoSegmentoSeleccionado: "",
      Nuevoproducto: {},
      error_msj: ""
      
    };
  },
  created() {
    this.obtenerTipoProductos();
    this.obtenerTipoSegmentos();

  },
  methods: {
    obtenerTipoProductos() {
      axios
        .get("http://localhost:3000/productos/tipo_producto")
        .then(response => {
          const data = response.data;
          this.tipo_producto = data.tipo_producto;


          console.log("data_de_productos", this.tipo_producto);
        })
        .catch(error => {
          console.log("error de conexion", error);
        });
    },

    obtenerTipoSegmentos() {
      axios
        .get("http://localhost:3000/productos/tipo_segmentos")
        .then(response => {
          const data = response.data;
          this.tipo_segmentos = data.tipo_segmentos;

          console.log("data_de_segmento", this.tipo_segmentos);
        })
        .catch(error => {
          console.log("error de conexion", error);
        });
    },
    guardarProducto() {
      
      const btnGuardar = document.querySelector("#guardar")
      btnGuardar.disabled = true;


      if (!this.Nuevoproducto.nombre) {
        this.error_msj = "Campo nombre es obligatorio";
        return;
      }
      if (!this.Nuevoproducto.descripcion) {
        this.error_msj = "Campo descripcion es obligatorio";
        return;
      }
        if (!this.Nuevoproducto.modelo) {
          this.error_msj = "Campo modelo es obligatorio";
        return;
      }
this.error_msj=""

      const data = this.Nuevoproducto;
      axios
        .post("http://localhost:3000/productos/crear_producto", data)
        .then(response => {
          btnGuardar.disabled = false;
           this.Nuevoproducto.nombre = '';
          this.Nuevoproducto.descripcion = '';
          this.Nuevoproducto.modelo = '';
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
