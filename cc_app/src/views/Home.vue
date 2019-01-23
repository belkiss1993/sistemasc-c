
<template>

<div>
  <div class="row">
    <center>
      <slider sliderId="mainCarousel" />
    </center>
  </div>
 
  <div class="row">
    <div class="col">
      <h3 class="text-center">En lo que creemos</h3>
      <br>
      <p class="text-justify">
        Creemos que la asesoría y el soporte técnico, constituyen la espina dorsal de nuestro negocio. Es por eso que buscamos que ambos sean proporcionados de forma confiable, oportuna y eficiente.
      </p>
    </div>
    
    <div class="col">
      <h3 class="text-center">Distribución Geográfica</h3>
      <br>
      <p class="text-justify">Actualmente, desplegamos nuestros negocios con oficinas 
        locales en Honduras y El Salvador. 
      </p>
      <a href="#" class="btn btn-secondary">Mas detalles</a>
    </div>

    <div class="col">
      <h3 class="text-center">Dirección Honduras</h3>
      <br>
      <p class="text-justify">
        Sistemas C&C, S.A. de C.V.
        Edif. Plaza Azul, 3er Nivel, Local No. 37 
        Col. Lomas del Guijarro Sur, TGU
        PBX: (+504) 2239 3800
      </p>
    </div>
  </div>

  <div class="row info-seccion">
    
    <div class="col-md-8">
      <h1 class="text-center">Nuestros valores</h1>

      <ul class="lista-valores">
        <li>
          <h3>Calidad</h3>
          <p>Ofrecemos lo que podemos cumplir de la mejor manera, desde la primera vez y siempre.</p>
        </li>
        <li>
          <h3>Integridad</h3>
          <p>Creemos que tenemos que hacer lo correcto, por las razones correctas, del modo correcto.</p>
        </li>
        <li>
          <h3>Compromiso</h3>
          <p>Nos esforzamos para alcanzar nuevas metas, cumplir todo aquello que se nos ha confiado y hemos aceptado.</p>
        </li>

        <li><a href="#" class="btn btn-secondary">Ver más</a></li>
      </ul>

    </div>

    <div class="col-md-4">
      <img src="valores.png" class="img-fluid" alt="" srcset="">
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

<style scoped>
.lista-valores{
  list-style: none;
}

.info-seccion{
  margin-top: 5em;
}
</style>
