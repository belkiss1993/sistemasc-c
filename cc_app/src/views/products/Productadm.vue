<template>
    <div>

         <modal id="crear-producto-modal">
             <template slot="contenido">
               <createProductsAdm @created="refrescarModal" />
             </template>
         </modal>

         <modal id="editar-producto-modal" titulo="Editar Producto">
             <template slot="contenido">
                <editarProducts :producto="productoSeleccionado" />
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
                <a href="#" class="" style="margin-right:5px" @click.prevent="abrirEditarModal(data.row)"><i class="fas fa-edit fa-2x"></i></a>
                
                <a href="#" class="btn btn-danger" @click.prevent="eliminarProducto(data.row.id)"><i class="far fa-trash-alt fa-1x"></i></a>
            </template>
        </dataTable>
    </div>
</template>

<script>
import axios from 'axios'
import modal from '@/components/Modal'
const createProductsAdm = () => import('@/views/products/CreateProductsadm')
const editarProducts = ()=> import('@/views/products/EditarProductos')
const dataTable = () => import("@/components/dataTable");

export default {
    data(){
        return{
            productos: [],
            productoSeleccionado: {
                nombre: '',
                descripcion: '',
                modelo:'',
                enlace:'',
                tipoProductoId:'',
                segmentoId:-1,
            }
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

        abrirEditarModal(producto){
            this.productoSeleccionado.nombre = producto.nombre
            this.productoSeleccionado.descripcion = producto.descripcion_producto
            this.productoSeleccionado.modelo = producto.modelo
            this.productoSeleccionado.enlace =  producto.enlace
            this.productoSeleccionado.tipoProductoId = producto.tipoProductoId
            this.productoSeleccionado.segmentoId = producto.tipoSegmentoId

            $('#editar-producto-modal').modal('toggle')
        },

        editarProducto(id){
            
            axios.post("http://localhost:3000/productos/editar"),{id}.then(response=>{
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
        createProductsAdm,
        editarProducts
    }

}


</script>

