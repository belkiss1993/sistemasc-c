<template>
    <div>
        <dataTable 
            :dataSource="productos" 
            :excludedColumns="['id', 'tipoProductoId', 'tipoSegmentoId']"
            :extraColumns="['Acciones']"
            searchTerm="modelo">
            
            <template slot-scope="data" slot="Acciones">
                <a href="#" class="btn btn-danger" @click.prevent="eliminarProducto(data.row.id)">Eliminar</a>
            </template>
        </dataTable>
    </div>
</template>

<script>
import axios from 'axios'
import dataTable from '@/components/dataTable'

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
        }
    },
    components: {
        dataTable
    }

}


</script>

