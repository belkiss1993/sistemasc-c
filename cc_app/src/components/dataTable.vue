<template>
    <div>
        <form id="searchForm">
            <div class="form-row">
                <div class="col-md-5">
                    <input class="form-control" type="text" id="Buscar" v-model="wordToSearch">
                </div>
                <div class="col-md-4">
                    <button class="btn btn-outline-success" type="submit">Buscar</button>
                </div>
            </div>
        </form>

        <table class="table table-hover table-bordered">
            <thead>
                <tr>

                    <th v-for="extra in extraColumns" :key="extra+randId()">
                        <slot :name="`${extra}-header`"></slot>
                        <span v-if="!$slots[`${extra}-header`]">{{extra | colName}}</span>
                    </th>
                    <th v-for="col in visibleColumns" scope="col" :key="col">
                        {{col | colName}}
                    </th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="row in dataFiltered" :key="randId()+row[visibleColumns[0]]">
                    
                    <!-- values for extra columns -->
                    <td v-for="extraCol in extraColumns" :key="extraCol+randId()">
                        <slot :name="extraCol" v-bind:row="row"></slot>
                    </td>

                    <td v-for="col in visibleColumns" :key="col">{{ row[col] | truncate(30)}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'dataTable',
    props: ['dataSource', 'excludedColumns', 'searchTerm', 'extraColumns'],

    data(){
        return {
            wordToSearch: '',
            matchedData: []
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
        },

        extraHeader(name){
            return 
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

            if (this.matchedData.length === 0)
                return this.dataSource
            
            return this.matchedData
        },

        visibleColumns(){
            if(!this.excludedColumns)
                return this.columns
            
            return this.columns.filter(col => !this.excludedColumns.includes(col))
        }
    },

    watch:{
        wordToSearch: function(value){
            if(!this.validValue(value)){
                this.matchedData = []
                return
            }

            if(!this.validValue(this.searchTerm)){
                this.matchedData = []
                return
            }
            
            this.matchedData = this.dataSource.filter(item => 
                item[this.searchTerm].toLowerCase().includes(value.toLowerCase())
            )
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
        },

        truncate(value, length){
            if(!value)
                return ''

            if(value.length > length)
                return value.slice(0, length) + '...'
  
            return value
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