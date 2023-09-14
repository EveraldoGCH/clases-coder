import React from 'react'

export default function Boton({titulo, funcion, deshabilitado}) {
  return (
    <div>
        <button disabled={deshabilitado} onClick={()=>funcion()}>{titulo}</button>
    </div>
  )
}
