const express = require('express');
const app = express();
const bodyparser= require('body-parser')
//const rutas = require('./rutas')
const productos = require('./rutas/productos')
const usuarios = require('./rutas/usuarios')
const servicios = require('./rutas/servicios')
const index = require('./rutas/index')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
  extended:true
}))

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
  
  next()
}) 

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');

  app.use('/', index)
  app.use('/usuarios',usuarios)
  app.use('/productos',productos)
  app.use('/servicios',servicios)
});
//

  
  
 

