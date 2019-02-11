<template>
  <div>
    
    <!-- <h4>Dirección:</h4> -->
     <div class="col">
    <p class="text-justify "> 
      Sistemas C&C, S.A. de C.V.
      Edif. Plaza Azul, 3er Nivel, Local No. 37
      Col. Lomas del Guijarro Sur, TGU
    </p>
    <p>PBX: (+504) 2239 3800</p>
    <hr>

      <div class="col">
    <h5>Horarios de Atención</h5>
    <div>
    <p>LUNES A VIERNES</p>
    <p>8:00 AM A 5:00 PM</p>
    </div>
  </div>
  </div>

   
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d61504.59770092364!2d-88.0222208!3d15.536128!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6fa32927a10399%3A0x85b5c88126b60ba3!2sEDIFICIO+PLAZA+AZUL%2C+Calle+Paris%2C+Tegucigalpa!5e0!3m2!1ses!2shn!4v1548301513576" 
      width="1115"
      height="480"
      frameborder="0"
      style="border:0"
      allowfullscreen
    ></iframe>
    <!-- <modal id="modal1" titulo="titulo de modal">
      <template slot="contenido">
        <p>aidgndafbg afdg</p>
        <strong>adfubgiupbgiadbag</strong>
      </template>
    </modal> -->

    <!-- usar funcion de abrir modal -->
    <!-- <img src="@/img/canon1.png" width="70%" @click.prevent="abrirModal('modal1')">

    <! Button trigger modal-->
    <!-- <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal1">
  Launch demo modal
    </button>-->
    

    <body class="contactanos">
      
      <div class="container">
        <form @submit.prevent="sendContactInfo">
         
          <h2>Contáctese con nosotros</h2>
          <p  class="into" >Agradécenos el interés por contactarse con nosotros, si desea recibir más información
             sobre nuestros productos o servicios, por favor rellene el siguiente formulario y enseguida estaremos respondiendo.
          </p>
          <hr>

          <div class="alert alert-success" role="alert" v-show="messageSent">
            ¡Gracias por su mensaje! Sistemas C&C se pondrá en contacto con usted.
          </div>
          <div class="row">
            <div class="col-xs-12 col-ms-6 col-md-6 col-lg-6">

              <input type="text" name="nombre" placeholder="Ingrese su nombre" v-model="contact.name" required>

              <input type="text" name="correo" placeholder="Ingrese su correo" v-model="contact.email" required>

              <input type="text" name="telefono" placeholder="Ingrese su telefono" v-model="contact.phone" required>

              <input type="text" name="empresa" placeholder="Empresa opcional" v-model="contact.company">

              <textarea name="mensaje" placeholder="Escriba aqui su mensaje" v-model="contact.message" required></textarea>

              <input type="submit" value="Enviar" id="boton" @submit="sendContactInfo">


            </div>
                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                  <br>
                  <p>
                    <strong>
                      ¿Deseas más Información?
                    </strong>
                    Ponte en contacto con nosotros a través de este formulario.

                  </p> 
                  <img src="@/img/correo.gif" width="30%" class="img-rounded img-respoonsive " alt="">

                </div>

          </div>
        </form>
      </div>
    </body>
  </div>
</template>


<script>
import axios from 'axios'
import modal from "@/components/Modal"

export default {
  data(){
    return {
      messageSent: false,
      contact: {
        name: '',
        phone: '',
        email: '',
        company: '',
        message: ''
      }
    }
  },
  methods: {
    abrirModal(id) {
      $("#" + id).modal();
    },

    sendContactInfo(){
      const data = this.contact
      this.messageSent = false
      axios.post(this.serverUrl+'/contact/send-email', data).then(r=>{
        if(r.data.exitoso){
          this.contact.name = ''
          this.contact.email = ''
          this.contact.phone = ''
          this.contact.company = ''
          this.contact.message = ''

          this.messageSent = true
        }

      }).catch(err=>{
        console.log(err)
      })
    }
  },

  components: {
    modal
  }
};
</script>

<style>



form{
  margin: auto;
  background: #fff;
  max-width: 1000px;
  padding: 30px;
  margin-top: 20px;
  box-shadow: 0px 8px 3px grey;
  border-radius: 6px;
  box-sizing: border-box;

}
h2{
  color: #00abf0;
  text-align: center;
  margin: 0;
  font-size: 30px;
  margin-bottom: 20px;
}
.into{
  text-align: center;
  margin-bottom: 4px;
  
  
}
input, textarea{
font-size: 16px;
/* color: #383f9f; */
width: 100%;
border: none;
border-bottom: 1px solid #00abf0;
outline: none;
padding: 15px;
}

textarea{
  min-height: 140px;
  max-height: 200px;
  max-width: 100%;

}
#boton{
  background: #00abf0;
  border-radius: 1px;
  border: 2px solid #f2f2f2;
  color: #fff;
  cursor: pointer;
  font-family: "Roboto";
  font-size: 16px;
  width: 100%;
  padding: 15px;
  -webkit-transition: all .3s ease;
  -moz-transition: all .3s ease;
  -o-transition: all .3s ease;
  transition: all .3s ease;

}
#boton:hover{
  cursor: pointer;
  background: #ff4040

}
</style>


