import React from 'react'

export default function Boton({titulo, funcion}) {
  return (
    <div>
        <button onClick={()=>funcion()}>{titulo}</button>
    </div>
  )
}
