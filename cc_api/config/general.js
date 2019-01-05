const conexionDB= require ('./conexionBD')
const crypto = require('crypto')

const salt = 'sistemas_C&C'

const sqlQuery = (_query = '', _params = null)=>{

    return new Promise((resolve, reject)=>{
      
        conexionDB.query({
        namedPlaceholders: true,
        sql: _query
      }, _params)
  
      .then(rows=>{
        resolve(rows)
      })
      .catch(err=>{
        reject(err)
      })
    })
  }

const encrypt = (text)=>{
  const hash = crypto.createHmac('sha256', salt)
                    .update(text)
                    .digest('hex')

  return hash
}

const valorValido = (valor)=>{
  
  if(valor == null || valor == 'undefined' || valor == "")
    return false

  return true
}


module.exports={
    sqlQuery,
    encrypt,
    valorValido
}