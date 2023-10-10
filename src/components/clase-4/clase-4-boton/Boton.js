import React from 'react'

const Boton=({titulo, funcion, deshabilitado}) =>{
  return (
    <div>
        <button disabled={deshabilitado} onClick={()=>funcion()}>{titulo}</button>
    </div>
  )
}

export default Boton
