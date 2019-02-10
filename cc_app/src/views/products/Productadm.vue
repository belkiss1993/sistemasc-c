<template>
    <div>

         <modal id="crear-producto-modal">
             <template slot="contenido">
               <createProductsAdm @created="refrescarModal('crear-producto-modal')" />
             </template>
         </modal>

         <modal id="editar-producto-modal" titulo="Editar Producto">
             <template slot="contenido">
                <editarProducts @edit="refrescarModal('editar-producto-modal')" :producto="productoSeleccionado" />
             </template>
         </modal>

        <dataTable 
            :dataSource="productos" 
            :excludedColumns="['id', 'tipoProductoId', 'tipoSegmentoId']"
            :extraColumns="['Acciones']"
            searchTerm="nombre">

            <template slot="Acciones-header">
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#crear-producto-modal">
              <i class="fa fa-plus-square" aria-hidden="true"></i>  Crear Producto
            </button>
            </template>
            
            <template slot-scope="data" slot="Acciones">
                <a href="#" class="" style="margin-right:5px" @click.prevent="abrirEditarModal(data.row)"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>Editar</a>
                
                <a href="#" class="btn btn-danger" @click.prevent="eliminarProducto(data.row.id)"><i class="fa fa-times" aria-hidden="true"></i>Eliminar</a>
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
                id: '',
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
            axios.get('http://localhost:3000/productos/').
            then(response=>{
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
            this.productoSeleccionado.id = producto.id
            this.productoSeleccionado.nombre = producto.nombre
            this.productoSeleccionado.descripcion = producto.descripcion_producto
            this.productoSeleccionado.modelo = producto.modelo
            this.productoSeleccionado.enlace =  producto.enlace
            this.productoSeleccionado.tipoProductoId = producto.tipoProductoId
            this.productoSeleccionado.tipoSegmentoId = producto.tipoSegmentoId

            $('#editar-producto-modal').modal('toggle')
        },

        editarProducto(id){
            
            axios.post("http://localhost:3000/productos/editar"),{id}.then(response=>{
                this.obtenerproductos()
            }).catch(error=>{
                console.log(error)
            })
        },

        refrescarModal(idModal){
            $('#'+idModal).modal('toggle')
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

