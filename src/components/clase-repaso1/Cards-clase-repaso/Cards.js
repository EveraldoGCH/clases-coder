import React from 'react'
import "./style.css"

export default function Cards({producto, oscuro}) {

  return (
        <div className={oscuro?'Card-container claro':'Card-container'}>
            <h2>{producto.titulo}</h2>
            <p>{producto.marca}</p>
            <p>{producto.precio}</p>
            <p>{producto.categoria}</p>
            <p>{producto.descrip}</p>

        </div>
  )
}
