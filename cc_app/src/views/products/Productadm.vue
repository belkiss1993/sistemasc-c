<template>
    <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th scope="col">Nombre producto</th>
                <th scope="col">Modelo</th>
                <th scope="col">Descripción</th>
                <th scope="col">Tipo de producto</th>
                <th scope="col">Tipo de Segmento</th>
            </tr>
        </thead>

        <tbody>
            <tr v-for="producto in productos" :key="producto.id">
                <td>{{ producto.nombre}}</td>
                <td>{{ producto.modelo}}</td>
                <td>{{ producto.descripcion_producto}}</td>
                <td>{{ producto.descripcion_tipo_producto}}</td>
                <td>{{ producto.descripcion_segmento}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>

import axios from 'axios'

export default {
    data(){
        return{
            productos: []
        }
    },
    //se ejecuta automaticamente cuando se crea la vista 
    created(){
      this.obtenerproductos()
    },

    methods:{
    obtenerproductos(){
        axios.get('http://localhost:3000/productos/').then(response=>{
            const data = response.data
            if(data.exitoso){
                this.productos=data.resultados
            }

        }).catch(error=>{
            console.log(error)
        })
    }
 }

}


</script>

