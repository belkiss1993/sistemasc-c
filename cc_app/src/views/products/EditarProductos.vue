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
          :value="tipoProducto.id"
        >{{tipoProducto.descripcion}}</option>
      </select>
    </div>
    <div class="form-group">
      <label for="exampleFormControlSegment">Tipo de Segmento</label>
      <select class="form-control" v-model="producto.tipoSegmentoId">
        <option
          v-for=" tipoSegmento in tipo_segmentos"
          :key="tipoSegmento.id"
          :value="tipoSegmento.id"
        >{{tipoSegmento.descripcion}}</option>
      </select>
    </div>
    

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroupFileAddon01">Imagen</span>
        </div>
        <div class="custom-file">
          <input type="file" class="custom-file-input" id="editarProducoImagen" aria-describedby="inputGroupFileAddon01">
          <label class="custom-file-label" for="editarProducoImagen">Reeemplazar imagen</label>
        </div>
      </div>
      
      <div class="form-group">
        <center>
          <img :src="imageURL(producto.id)" class="img-fluid" style="height: 200px">
        </center>
      </div>
    
    <div class="form-group">
      <label for="exampleFormControlEnlace">Enlace</label>
      <input
        class="form-control"
        type="text"
        id="exampleFormControlEnlace"
        v-model="producto.enlace"
      >
    </div>

    <div class="alert alert-danger" role="alert" v-show="error_msj.length > 0">{{error_msj}}</div>

    <div class="form-group">
      <button
        id="guardar"
        type="submit"
        class="btn btn-primary"
        @click.prevent="editarProducto"
      >Guardar</button>
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  props: ["producto"],

  data() {
    return {
      tipo_segmentos: [],
      tipo_producto: [],
      error_msj: ""
    };
  },
  created() {
    this.obtenerTipoProductos();
    this.obtenerTipoSegmentos();
  },

  mounted(){
    $('.custom-file-input').on('change',function(){
      //get the file name
      var fileName = $(this).val();
      //replace the "Choose a file" label
      $(this).next('.custom-file-label').html(fileName);
    })
  },
  methods: {
    obtenerTipoProductos() {
      axios
        .get(this.serverUrl+"/productos/tipo_producto")
        .then(response => {
          const data = response.data;
          this.tipo_producto = data.tipo_producto;
        })
        .catch(error => {
          console.log("error de conexion", error);
        });
    },
    obtenerTipoSegmentos() {
      axios.get(this.serverUrl+"/productos/tipo_segmentos").then(response => {
        const data = response.data;
        this.tipo_segmentos = data.tipo_segmentos;
      }).catch(error => {
        console.log("error de conexion", error);
      });
    },
    editarProducto(){
      const btnGuardar = document.querySelector("#guardar");
      btnGuardar.disabled = true;
       
      if (!this.producto.nombre) {
        this.error_msj = "Campo nombre es obligatorio";
         btnGuardar.disabled = false;
        return;
      }
      
      if (!this.producto.descripcion) {
        this.error_msj = "Campo descripcion es obligatorio";
         btnGuardar.disabled = false;
        return;
      }
       if (!this.producto.modelo) {
        this.error_msj = "Campo modelo es obligatorio";
         btnGuardar.disabled = false;
        return;
      }
       if (!this.producto.tipoProductoId) {
        this.error_msj = "Campo tipo producto es obligatorio";
         btnGuardar.disabled = false;
        return;
      }
       if (!this.producto.segmentoId) {
        this.error_msj = "Campo segmento es obligatorio";
         btnGuardar.disabled = false;
        return;
      }

      const imagen = document.getElementById("editarProducoImagen").files[0]

      this.error_msj = "";
      const data = new FormData();

      for(const attr in this.producto){
        data.append(attr, this.producto[attr])
      }

      data.append('imageType', 'productos')
      data.append('imagen', imagen)

      axios.post(
        this.serverUrl+"/productos/editar", 
        data, {
          headers: {
            'accept': 'application/json',
            'Content-Type': `multipart/form-data; boundary=${data._boundary}`
          }
        }).then(response => {
          btnGuardar.disabled = false;
          this.$emit('edit')
        })
       .catch(error => {
          btnGuardar.disabled = false;
          console.log(error);
        });
    },

    imageURL(id){
      if (!id)
        return ''

      const rndInt = Math.floor(Math.random() * 101); 
      return this.serverUrl+'/files/images/productos/'+id+'.jpg?'+rndInt
    }
  }
}
</script>
