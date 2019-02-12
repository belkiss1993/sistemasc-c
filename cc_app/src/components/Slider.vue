<template>

    <div>
        <!--CArrusel -->
     <div :id="sliderId" class="my-carousel carousel slide" data-ride="carousel">
       <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
     <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-item"  style="height: 100vh" >
            <img class="d-block w-100" src="../img/orig_221407.jpg" width="380" height="620" alt="First slide">
            <div class="carousel-caption d-none d-md-block">
               
                <p> </p>
             </div>
        </div>
        <div class="carousel-item " style="height: 100vh">
            <img class="d-block w-100" src="../img/sistemas122.jpg"  width="" height="620" alt="Second slide" >
            <div class="carousel-caption d-none d-md-block">
              
            </div>
        </div>
    <div class="carousel-item active " style="height: 100vh">
      <img class="d-block w-100" src="../img/Plan.png"  width="380" height="620" alt="Third slide">
       <div class="carousel-caption d-none d-md-block">
      
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











