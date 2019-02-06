<template>
  <form>
    <div class="form-group">
      <label for="exampleInputProduct">Nombre de Producto</label>
      <input
        v-model="producto.nombre"
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
        v-model="producto.descripcion"
        type="descripción"
        class="form-control"
        id="ProductDescription"
        placeholder="Descripción de producto"
      >
    </div>
    <div class="form-group">
      <label for="exampleInputModel">Modelo</label>
      <input
        v-model="producto.modelo"
        type="Model"
        class="form-control"
        id="Model"
        placeholder="Modelo"
      >
    </div>

    <div class="form-group">
      <label for="exampleFormControlType">Tipo de Producto</label>
      <select class="form-control" v-model="producto.tipoProductoId">
        <option
          v-for=" tipoProducto in tipo_producto"
          :key="tipoProducto.id"
          :value="tipoProducto.id">
          {{tipoProducto.descripcion}}</option>
      </select>
    </div>

    <div class="form-group">
      <label for="exampleFormControlSegment">Tipo de Segmento</label>
      <select class="form-control" v-model="producto.segmentoId">
        <option
          v-for=" tipoSegmento in tipo_segmentos"
          :key="tipoSegmento.id"
          :value="tipoSegmento.id"
        >{{tipoSegmento.descripcion}}</option>
      </select>
    </div>

    <div class="form-group">
      <label for="exampleFormControlEnlace">Enlace</label>
      <input class="form-control" type="text" id=exampleFormControlEnlace v-model="producto.enlace">
    </div>

    <div class="alert alert-danger" role="alert" v-show="error_msj.length > 0">{{error_msj}}</div>

    <div class="form-group">
      <button id="guardar" type="submit" class="btn btn-primary" @click.prevent="guardarProducto">Guardar</button>
    </div>
  </form>
</template>

<script>
import axios from "axios"

export default {
    props: ['producto'],

    data(){
        return {
            tipo_segmentos:[],
            tipo_producto: [],
            error_msj: ''
        }
    },
    created() {
        this.obtenerTipoProductos();
        this.obtenerTipoSegmentos();
    },
    methods: {
        obtenerTipoProductos() {
            axios.get("http://localhost:3000/productos/tipo_producto").then(response => {
                    const data = response.data;
                    this.tipo_producto = data.tipo_producto;
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
        })
        .catch(error => {
          console.log("error de conexion", error);
        });
    }
            
}
    
}

</script>
