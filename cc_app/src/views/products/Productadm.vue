<template>
    <div>

         <modal id="crear-producto-modal">
             <template slot="contenido">
               <createProductsAdm @created="refrescarModal" />
             </template>
         </modal>

        <dataTable 
            :dataSource="productos" 
            :excludedColumns="['id', 'tipoProductoId', 'tipoSegmentoId']"
            :extraColumns="['Acciones']"
            searchTerm="nombre">

            <template slot="Acciones-header">
         <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#crear-producto-modal">
          Crear Producto
        </button>
            </template>
            
            <template slot-scope="data" slot="Acciones">
                <a href="#" class="" style="margin-right:5px">Editar</a>
                <a href="#" class="btn btn-danger" @click.prevent="eliminarProducto(data.row.id)">Eliminar</a>
            </template>
        </dataTable>
    </div>
</template>

<script>
import axios from 'axios'
import modal from '@/components/Modal'
const createProductsAdm = () => import('@/views/products/CreateProductsadm')
const dataTable = () => import("@/components/dataTable");

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
        },

        eliminarProducto(id){
        const continuar = confirm("¿Desea eliminar?")
        if(!continuar){
            return
        }
        axios.post("http://localhost:3000/productos/eliminar",{id}).then(response=>{
            this.obtenerproductos()

        }).catch(error=>{
            console.log(error)
        })
        },
        refrescarModal(){
         $('#crear-producto-modal').modal('toggle')
         this.obtenerproductos()
    }
        
    },
    components: {
     dataTable,
     modal,
    createProductsAdm
    }

}


</script>

