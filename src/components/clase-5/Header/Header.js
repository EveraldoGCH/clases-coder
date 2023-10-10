import React, {useContext} from 'react'
import { coleccionContext } from '../../../context/ColeccionContext'
import "./style.css"
import { useEffect } from 'react'

export default function Header() {
  const {coleccion, setColeccion}=useContext(coleccionContext)


  return (
    <header>
        <h1>HEADER</h1>
        <p>{coleccion.length}</p>
    </header>
  )
}
