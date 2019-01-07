<template>
    <div>
        <form id="searchForm">
            <div class="form-row">
                <div class="col-md-5">
                    <input class="form-control" type="text" id="Buscar">
                </div>
                <div class="col-md-4">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </div>
            </div>
        </form>

        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th v-for="col in visibleColumns" scope="col" :key="col">
                        {{col | colName}}
                    </th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="row in dataFiltered" :key="randId()+row[visibleColumns[0]]">
                    <td v-for="col in visibleColumns" :key="col">{{ row[col] }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'dataTable',
    props: ['dataSource', 'excludedColumns'],

    data(){
        return {
            activeFilter: ''
        }
    },

    methods: {
        validValue(val){
            if (val === null || typeof val === 'undefined' || val === "")
                return false
            return true
        },

        randId(){
            const max = 100000
            return Math.floor(Math.random() * Math.floor(max))
        }
    },

    computed: {
        columns(){
            if(!this.validValue(this.dataSource))
                return []
            
            if(!this.validValue(this.dataSource[0]))
                return []

            return Object.keys(this.dataSource[0])
        },

        dataFiltered(){
            if(!this.validValue(this.dataSource))
                return []

            if (this.activeFilter === '')
                return this.dataSource
        },

        visibleColumns(){
            if(!this.excludedColumns)
                return this.columns
            
            return this.columns.filter(col => !this.excludedColumns.includes(col))
        }
    },

    filters: {
        colName(value){
            if (!typeof value === 'string')
                return value

            const arr = value.split('_')
            let header = ''

            for(let word of arr){
                header += word.charAt(0).toUpperCase() + word.slice(1) + ' '
            }

            return header.trim()
        }
    }
}
</script>

<style scoped>
#Buscar{
   margin-right: 
   3px;
   padding: 4px;
   border-radius: 0.5em;
}

#searchForm {
    margin-bottom: 1.5em;
}
</style>