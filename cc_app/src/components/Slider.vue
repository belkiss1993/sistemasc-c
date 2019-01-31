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
            <img class="d-block w-100" src="../img/orig_221407.jpg" alt="First slide image">
            <div class="carousel-caption d-none d-md-block">
                <h5>CANON</h5>
                <p> </p>
             </div>
        </div>
        <div class="carousel-item slider-img" style="height: 100vh">
            <img class="d-block w-100" src="../img/sistemas122.jpg" alt="Second slide image" >
            <div class="carousel-caption d-none d-md-block">
                <h5>Sistemas C&C</h5>
                <p>A tu sevicio</p>
            </div>
        </div>
    <div class="carousel-item active slider-img" style="height: 100vh">
      <img class="d-block w-100" src="../img/Plan.png"  width="350" height="650" alt="Third slide image">
       <div class="carousel-caption d-none d-md-block">
        <h5>Hewlett-Packard</h5>
        <p></p>
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











