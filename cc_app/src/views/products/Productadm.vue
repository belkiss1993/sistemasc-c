<template>
    <div>
        <dataTable 
            :dataSource="productos" 
            :excludedColumns="['id', 'tipoProductoId', 'tipoSegmentoId']"
            searchTerm="modelo">
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
        }
    },
    components: {
        dataTable
    }

}


</script>

