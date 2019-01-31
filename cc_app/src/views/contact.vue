<template>
  <div>
    <h2>Sistemas C&C</h2>
    <!-- <h4>Dirección:</h4> -->
    <p class="text-justify">
      Sistemas C&C, S.A. de C.V.
      Edif. Plaza Azul, 3er Nivel, Local No. 37
      Col. Lomas del Guijarro Sur, TGU
    </p>
    <p>PBX: (+504) 2239 3800</p>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d61504.59770092364!2d-88.0222208!3d15.536128!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6fa32927a10399%3A0x85b5c88126b60ba3!2sEDIFICIO+PLAZA+AZUL%2C+Calle+Paris%2C+Tegucigalpa!5e0!3m2!1ses!2shn!4v1548301513576" 
      width="950"
      height="480"
      frameborder="0"
      style="border:0"
      allowfullscreen
    ></iframe>
    <modal id="modal1" titulo="titulo de modal">
      <template slot="contenido">
        <p>aidgndafbg afdg</p>
        <strong>adfubgiupbgiadbag</strong>
      </template>
    </modal>

    <!-- usar funcion de abrir modal -->
    <!-- <img src="@/img/canon1.png" width="70%" @click.prevent="abrirModal('modal1')">

    <! Button trigger modal-->
    <!-- <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal1">
  Launch demo modal
    </button>-->
    |
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="well well-sm">
            <form class="form-horizontal" method="post">
              <fieldset>
                <legend class=" header">CONTACTO</legend>

                <div class="form-group">
                  <span class="col-md-1 col-md-offset-2 text-center">
                    <i class="fa fa-user bigicon"></i>
                  </span>
                  <div class="col-md-8">
                    <input
                      id="fname"
                      name="name"
                      type="text"
                      placeholder="Nombre"
                      class="form-control"
                    >
                  </div>
                </div>
                <div class="form-group">
                  <span class="col-md-1 col-md-offset-2 text-center">
                    <i class="fa fa-user bigicon"></i>
                  </span>
                  <div class="col-md-8">
                    <input
                      id="lname"
                      name="name"
                      type="text"
                      placeholder="Apellido"
                      class="form-control"
                    >
                  </div>
                </div>

                <div class="form-group">
                  <span class="col-md-1 col-md-offset-2 text-center">
                    <i class="fa fa-envelope-o bigicon"></i>
                  </span>
                  <div class="col-md-8">
                    <input
                      id="email"
                      name="email"
                      type="text"
                      placeholder="Correo"
                      class="form-control"
                    >
                  </div>
                </div>

                <div class="form-group">
                  <span class="col-md-1 col-md-offset-2 text-center">
                    <i class="fa fa-phone-square bigicon"></i>
                  </span>
                  <div class="col-md-8">
                    <input
                      id="phone"
                      name="phone"
                      type="text"
                      placeholder="Telefono"
                      class="form-control"
                    >
                  </div>
                </div>

                <div class="form-group">
                  <span class="col-md-1 col-md-offset-2 text-center">
                    <i class="fa fa-pencil-square-o bigicon"></i>
                  </span>
                  <div class="col-md-8">
                    <textarea
                      class="form-control"
                      id="message"
                      name="message"
                      placeholder="Ingrese su masaje para nosotros aquí. Nos pondremos en contacto con usted."
                      rows="7"
                    ></textarea>
                  </div>
                </div>

                <div class="form-group">
                  <div class="col-md-12 text-center">
                    <button type="submit" class="btn btn-primary btn-lg">Enviar</button>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modal from "@/components/Modal";

export default {
  methods: {
    abrirModal(id) {
      $("#" + id).modal();
    }
  },

  components: {
    modal
  }
};
</script>

<style>
.header {
    color: #36A0FF;
    font-size: 27px;
    padding: 10px;
}

.bigicon {
    font-size: 35px;
    color: #36A0FF;
}
</style>


