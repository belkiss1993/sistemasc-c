<template>
<div>
  <h2>Sistemas C&C</h2>
  <p class="text-justify"> Sistemas C&C, S.A. de C.V.
Edif. Plaza Azul, 3er Nivel, Local No. 37 
Col. Lomas del Guijarro Sur, TGU
PBX: (+504) 2239 3800
</p>
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d61504.59770092364!2d-88.0222208!3d15.536128!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6fa32927a10399%3A0x85b5c88126b60ba3!2sEDIFICIO+PLAZA+AZUL%2C+Calle+Paris%2C+Tegucigalpa!5e0!3m2!1ses!2shn!4v1548301513576" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
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
