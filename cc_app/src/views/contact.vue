<template>
<div>
  <h2>Sistemas C&C</h2>
  <p class="text-justify"> Sistemas C&C, S.A. de C.V.
Edif. Plaza Azul, 3er Nivel, Local No. 37 
Col. Lomas del Guijarro Sur, TGU
PBX: (+504) 2239 3800
</p>

<modal id="modal1" titulo="titulo de modal">
  <template slot="contenido">
    <p>aidgndafbg afdg</p>
    <strong>adfubgiupbgiadbag</strong>
  </template>
</modal>

<!-- usar funcion de abrir modal -->
  <img src="@/img/canon1.png" width="70%" @click.prevent="abrirModal('modal1')">

<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal1">
  Launch demo modal
</button>
</div>


</template>

<script>
import modal from '@/components/Modal'

export default {
  methods: {

    abrirModal(id){
      $("#"+id).modal()
    }
  },

  components: {
    modal
  }
}
</script>
