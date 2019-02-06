
<template>
  <div>
    <div class="row">
      <center>
        <slider sliderId="mainCarousel"/>
      </center>
    </div>

    <div class="row">
      <div class="col">
        <center>
          <img id="img" src="quienessomos.png" class="img-fluid" width="180" height="180" alt>
        </center>
        <h3 class="text-center">Quiénes somos</h3>
        <br>
        <p class="text-justify">
          Somos una empresa dedicada a implementar
          soluciones tecnológicas y de innovación
          por medio de nuestros Productos y Servicios.
        </p>
      </div>

      <div class="col">
        <center>
          <img id="img" src="servicio-tecnico.png" class="img-fluid" width="180" height="180" alt>
        </center>
        <h3 class="text-center">En lo que creemos</h3>
        <br>
        <p
          class="text-justify"
        >Creemos que la asesoría y el soporte técnico, constituyen la espina dorsal de nuestro negocio. Es por eso que buscamos que ambos sean proporcionados de forma confiable, oportuna y eficiente.</p>
      </div>

      <div class="col">
        <center>
          <img id="img" src="MAPA.jpg" class="img-fluid" width="250" height="250" alt>
        </center>
        <h3 class="text-center">Distribución Geográfica</h3>
        <br>
        <p class="text-justify">
          Actualmente, desplegamos nuestros negocios con oficinas
          locales en Honduras y El Salvador.
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

          <button
            type="button"
            class="btn btn-secondary"
            data-toggle="modal"
            data-target="#mostrar-modal"
          >Mostrar mas...</button>
          <div
            class="modal fade"
            id="mostrar-modal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5
                    class="modal-title"
                    id="exampleModalLabel"
                  >Código de Conducta y Ética para Proveedores</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <p class="text-justify">
                     1. Sistemas C&C S. A de C.V. ∗se compromete a actuar de
                  manera honesta y ética y se espera la misma conducta de
                  todos los proveedores. El Código de Conducta y Ética establece
                  lineamientos de comportamiento adecuado y conducta ética para
                  los empleados de Sistemas C&C S. A de C.V. Este Código de Conducta
                  y Ética para Proveedores establece pautas similares para nuestros proveedores.
                  </p>
                 
                 
                  <h4>Informes y registros precisos</h4>
                 <p class="text-justify">  
                  Los proveedores deben mantener registros precisos sobre todos
                  los asuntos referidos a sus transacciones con Sistemas C&C S. A de C.V.,
                  entre otros, el estado de cuenta de gastos y pagos recibidos.
                  Si a Sistemas C&C S. A de C.V. se le cobra por el tiempo de
                  un empleado del proveedor, se deben mantener registros de tiempo,
                  completos y precisos. Los proveedores no deben demorar el envío de
                  sus facturas o, de otro modo, tramitar el cobro de un gasto fuera
                  de su periodo contable correspondiente.</p>
                  
                  <h4>Bienes e información</h4>
                   <p class="text-justify">
                  Los proveedores deben proteger los bienes y la información de Sistemas C&C S. A de C.V.
                  Los proveedores a quienes se les ha dado acceso a los bienes de Sistemas C&C S. A de C.V.,
                  ya sean tangibles o intangibles, deben utilizarlos para los fines contratados
                  por Sistemas C&C S. A de C.V. y dentro del alcance establecido. Los proveedores
                  a quienes se les ha dado acceso a información confidencial de Sistemas C&C S. A de C.V.
                  no deben compartir tal información con nadie salvo que exista autorización
                  de Sistemas C&C S. A de C.V. para ello. Si un proveedor cree que por error se le ha
                  autorizado el acceso a información confidencial de Sistemas C&C S. A de C.V.,
                  debe notificar el hecho de inmediato a la persona de su contacto en
                  Sistemas C&C S. A de C.V. y abstenerse de distribuir la información.
                  Este Código se aplica a todos los proveedores de bienes y servicios de Sistemas C&C S. A de C.V., 
                  y a los empleados, agentes y contratistas de estos que suministran bienes o prestan servicios 
                  a Sistemas C&C S. A de C.V.
                  Los proveedores no deben compartir con ninguna persona de Sistemas C&C S. A de C.V. la información 
                  relativa a otra persona u organización si tienen una obligación contractual o legal que les prohíbe 
                  compartir esa información.</p>
                 
                  <h4>Sobornos y corrupción</h4>
                 <p class="text-justify">   
                  Sistemas C&C S. A de C.V. tiene una política de tolerancia cero en cuanto a ofrecer o 
                  aceptar sobornos o cometer cohecho. En relación con cualquier transacción como proveedor 
                  de Sistemas C&C S. A de C.V., o que tenga que ver con Sistemas C&C S. A de C.V., 
                  los proveedores no deben transferir nada de valor, directa o indirectamente, 
                  a otro con el fin de obtener un beneficio o ventaja ilegal; aquí se incluyen a 
                  funcionarios gubernamentales, empleados de entidades controladas por el gobierno, 
                  empleados de Sistemas C&C S. A de C.V. o cualquier otra organización. Los proveedores
                   que actúen en nombre de Sistemas C&C S. A de C.V. deben cumplir con los lineamientos 
                   establecidos en la U.S. Foreign Corrupt Practices Act (Ley de prácticas corruptas en 
                   el extranjero de EE.UU.), así como con toda ley local aplicable en casos de soborno. 
                   Los proveedores deben mantener registros escritos de todos los pagos (incluidos obsequios, 
                   comidas, cortesías o cualquier otra cosa de valor) que se hayan realizado en nombre 
                   de Sistemas C&C S. A de C.V., o con fondos provenientes de Sistemas C&C S. A de C.V.
                   Los proveedores deben presentar copia de todo tipo de comprobante a petición de 
                   Sistemas C&C S. A de C.V.</p>
                  
                  <h4>Obsequios, comidas, invitaciones y otras atenciones</h4>
                   <p class="text-justify"> 
                  Los empleados de Sistemas C&C S. A de C.V. pueden intercambiar obsequios, comidas, 
                  entretenimiento y otras cortesías de negocios con los proveedores solamente si son 
                  razonables, ocasionales y de bajo costo y siempre que se encuadren y estén conformes
                  a las leyes, prácticas y costumbres locales. En determinadas oportunidades, los empleados 
                  de Sistemas C&C S. A de C.V. pueden estar sujetos a límites monetarios en cuanto al valor
                  de las cortesías de negocios que se les permita dar o recibir. En cualquier caso, en ninguna
                  circunstancia, los empleados de Sistemas C&C S. A de C.V. deben ofrecer o aceptar cortesías 
                  si estas pudiesen afectar, o pareciesen afectar, la toma de una decisión. Y jamás pueden dar
                   o recibir dinero en efectivo. Se espera que nuestros proveedores respeten estas restricciones.</p>
                 
                  <h4>Conflictos de intereses</h4>
                  <p class="text-justify"> 
                  Cada vez que un empleado de Sistemas C&C S. A de C.V. realice negocios en nombre de la empresa, 
                  siempre debe actuar según los mejores intereses de Sistemas C&C S. A de C.V. No debe tener una 
                  relación, financiera o de otro tipo, con un proveedor si esto generara conflicto de intereses,
                   o pareciese hacerlo, e impidiera respetar los mejores intereses de Sistemas C&C S. A de C.V. 
                   Los proveedores no deben tener ningún tipo de relación financiera con el o los empleados de 
                   Sistemas C&C S. A de C.V. con quienes pudiesen interactuar como parte de su compromiso con 
                   Sistemas C&C S. A de C.V. Los proveedores deben tener en cuenta que la relación personal 
                   que se tenga con un empleado de Sistemas C&C S. A de C.V. no debe utilizarse para influenciar 
                   al empleado cuando se trate de tomar decisiones de negocios. Si el proveedor tiene una relación 
                   de familia, o de otro tipo, con un empleado de Sistemas C&C S. A de C.V. que pudiese suponer
                   un conflicto de intereses, el proveedor debe comunicar esa información a Sistemas C&C S. A de C.V.
                   o asegurarse de que el empleado lo haga.</p>
                  
                  <h4>Hablar sin temor</h4>
                  <p class="text-justify"> 
                  Si un proveedor sospecha que un empleado de Sistemas C&C S. A de C.V., o alguien actuando en
                 nombre de Sistemas C&C S. A de C.V., ha incurrido en un comportamiento ilegal o inadecuado,
                  debe informarlo a Sistemas C&C S. A de C.V. Los proveedores pueden plantear el problema ante 
                  el superior del empleado, comunicarse con el personal de ética y cumplimiento de Sistemas C&C S. 
                  A de C.V. a través de la dirección arietti@sistemascc.com. Un informe sincero sobre una potencial
                   inconducta no afectará la relación del proveedor con Sistemas C&C S. A de C.V.</p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                </div>
              </div>
            </div>
          </div>
        </ul>
      </div>

      <div class="col-md-4">
        <img src="valores.png" class alt srcset>
      </div>
    </div>

    <div class="row info-seccion">
      <div class="col">
        <h1 class="text-center">Áreas de Negocios</h1>
        <p class="text-justify">
          Disponemos de un catálogo de soluciones y servicios TI que, gracias a
          la diversificación de soluciones y capacidad de integrarlas, así como
          nuestra especialización en servicios globales, las certificaciones ATPS (Canon),
          CAS (HPE) de nuestro recurso y capacidad de explotación de los mismos, nos permite
          responder a las necesidades de nuestros clientes. Ofrecemos servicios multi­tecnología
          de vanguardia que integran todas las necesidades de su compañía.
        </p>
      </div>
      <div class="col">
        <h1 class="text-center">Alianzas Estratégicas</h1>
        <p class="text-justify">
          Nuestra política de alianzas se basa en certificaciones
          y acuerdos de alto nivel con los fabricantes de referencia mundial en el sector
          de soluciones de informática, oficina, digitalización y capacitaciones, basamos nuestros
          proyectos en las metodologías más aceptadas en el mercado (PMI/ITIL) y en marcos de buenas
          prácticas y seguridad (ISO).
        </p>
      </div>
    </div>

    <div class="row center">
      <img src="marcas.jpg" class="img-fluid imgcenter" alt srcset>
    </div>
  </div>
</template>

<script>
import modal from "@/components/Modal";
import slider from "@/components/Slider";

export default {
  name: "home",

  components: {
    slider,
    modal
  }
};
</script>

<style scoped>
.lista-valores {
  list-style: none;
}

.info-seccion {
  margin-top: 5em;
}
.imgcenter {
  width: 95%;
  margin: 0 auto;
  max-width: 1000px;
}
.img {
  margin-right: 50%;
  margin: auto;
}
</style>
