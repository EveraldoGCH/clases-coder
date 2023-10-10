import React, {useContext} from 'react'
import { coleccionContext } from '../../../context/ColeccionContext'
import "./style.css"
import Boton from '../../clase-4/clase-4-boton/Boton'

export default function Cards({producto, oscuro}) {

  const {coleccion, setColeccion, guardarenLS}=useContext(coleccionContext)
  return (
        <div className={oscuro?'Card-container claro':'Card-container'}>
            <h2>{producto.name}</h2>
            <p>{producto.gender}</p>
            <p>{producto.status}</p>
            <img src={producto.image} alt=""/>
            <Boton titulo="Agregar a coleccion" funcion={()=>guardarenLS(producto)}/>
        </div>
  )
}
