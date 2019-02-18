<template>
<div class="container">
   <br>
  <div class="row">
    <div v-for="producto in productos" :key="producto.id" class="card col-md-4">
      <img class="card-img-top img-fluid product-img"  :src="imageURL(producto.id)" alt="Card image cap" >
      <div class="card-body">
        <center><h5 class="card-title">{{producto.nombre}} {{producto.modelo}}</h5></center>
         <center ALIGN="justify" class="card-text">
            {{producto.descripcion_producto}}
        </center>
      </div>
      <div class="card-footer">
        <p v-if="producto.enlace">
          <center>
            <a :href="producto.enlace" target="_blank" class="btn btn-light"><u>Ver Más</u></a>
          </center>
        </p>
      </div>
    </div>
  </div>

</div>
</template>

<script>
import axios from "axios";

export default {
  props: ["tipoSegmento"],
  data() {
    return {
      productos: []
    };
  },

  created() {
    this.getProductos();
  },

  methods: {
    getProductos() {
      axios
        .get(this.serverUrl+"/productos/explorar/" + this.tipoSegmento)
        .then(response => {
          const data = response.data;
          if (data.exitoso) this.productos = data.productos;
        })
        .catch(error => {
          console.log(error);
        });
    },

    imageURL(id){
      return this.serverUrl+'/files/images/productos/'+id+'.jpg'
    }
  },
  watch: {
    tipoSegmento: function(val) {
      this.getProductos();
    }
  }
};
</script>
<style scoped>
.product-img{
  max-height: 200px;
}

.card-footer{
  background-color: #fff;
}
</style>

