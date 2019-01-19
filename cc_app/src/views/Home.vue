<template>

<div>
  <div class="row">
    <center>
      <slider sliderId="mainCarousel" />
    </center>
  </div>
 
  <div class="row">
    <div class="col">
      <h3 class="text-center">En lo que creemos
      </h3>
        <p class="text-justify">Creemos que la asesoría y el soporte técnico, constituyen la espina dorsal de nuestro negocio. Es por eso que buscamos que ambos sean proporcionados de forma confiable, oportuna y eficiente.
  </p>
    </div>
    <div class="col">
      <h3 class="text-center">
      Distribución Geográfica
      </h3>
        <p class="text-justify">Actualmente, desplegamos nuestros negocios con oficinas 
          locales en Honduras y El Salvador. 
        </p>
      </div>

    <div class="col">
      <h3 class="text-center">
      Dirección Honduras
    </h3>
        <p class="text-justify">
          Sistemas C&C, S.A. de C.V.
      Edif. Plaza Azul, 3er Nivel, Local No. 37 
      Col. Lomas del Guijarro Sur, TGU
      PBX: (+504) 2239 3800

       </p>
    </div>
  
  </div>
  
</div>
</template>

<script>
import slider from "@/components/Slider"


export default {
  name: 'home',
  components:{
    slider
  }

}
</script>
