import React from 'react'
import "./style.css"

export default function Cards({producto, oscuro}) {
console.log(producto)
  return (
        <div className={oscuro?'Card-container claro':'Card-container'}>
            <h2>{producto.name}</h2>
            <p>{producto.gender}</p>
            <p>{producto.status}</p>
            <img src={producto.image}/>

        </div>
  )
}
