import React from 'react'
import "./style.css"

export default function Props({pepito}) {
  return (
    <div>
      <h2>ESTE ES MI COMPOENTNE PROPS</h2>
      <p>puedo mostrar</p>
      {pepito}
    </div>
  )
}
