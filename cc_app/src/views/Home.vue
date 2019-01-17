<template>

<div>
  <div class="row">
    <center>
      <slider sliderId="mainCarousel" />
    </center>
  </div>
  <div class="row">
    <div class="col-md-4">
    <center>
     <p>
        <img src="../img/personal.png" width="150" height="150" align="middle" alt=""/>
      </p>
    </center>

      <h3 class="text-center">Nuestros Empleados</h3>
      <br>
      Contamos con más de 100 empleados al día de hoy, destacándose en diferentes áreas como comerciales, tecnicos, ejecutivos, administradores, preventa.
    </div>
    <div class="col-md-4">
          <center>
         <p>
        <img src="../img/region.png" width="150" height="150" align="middle" alt=""/>
        </p>
         </center> 
      <h3 class="text-center">La Región</h3>
      <br>
    
      Sistemas C&C, S.A. de C.V. se encuentra en la región, distribuyendo todo tipo de soluciones tecnológicas, nos encontramos en El Salvador y Honduras, en Guatemala como Canella, S.A.
    </div>
    <div class="col-md-4">
       <center>
     <!-- <p>
        <img src="" width="150" height="150" align="middle" alt=""/>
      </p> -->
    </center>
      <h3 class="text-center">informacion</h3>
      <br>
    Contactos, ubicacion
   
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
