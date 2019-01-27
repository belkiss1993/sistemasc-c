<template>

    <div>
        <!--CArrusel -->
     <div :id="sliderId" class="my-carousel carousel slide" data-ride="carousel">
       <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
     <div class="carousel-inner" role="listbox">
        <div class="carousel-item slider-img"  style="height: 100vh" >
            <img class="d-block w-100" src="../img/PIXMA.png" alt="First slide image">
            <div class="carousel-caption d-none d-md-block">
                <h5>ljdgnjrntgj</h5>
                <p> fbgmj bjrg rlkt </p>
             </div>
        </div>
        <div class="carousel-item slider-img" style="height: 100vh">
            <img class="d-block w-100" src="../img/paisaje.jpg" alt="Second slide image" >
            <div class="carousel-caption d-none d-md-block">
                <h5>ihebvebre</h5>
                <p>n jrbnrtn</p>
            </div>
        </div>
    <div class="carousel-item active slider-img" style="height: 100vh">
      <img class="d-block w-100" src="../img/omen.jpg" alt="Third slide image">
       <div class="carousel-caption d-none d-md-block">
        <h5>n fj gbjfr</h5>
        <p>n djgbirg jl tj</p>
     </div>
   </div>
   </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

    </div>
</template>

<script>
export default {
  props: ['sliderId'],
  name: "slider"  
}
</script>











