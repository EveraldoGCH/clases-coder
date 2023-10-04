import React, { useState, useEffect } from 'react'
import "./style.css"
import Boton from '../clase-4/clase-4-boton/Boton'
import Cards from '../clase-repaso1/Cards-clase-repaso/Cards'
import { useParams } from 'react-router-dom'

export default function Personaje() {
    const [oscuro, setOscuro]=useState(true)
    const [personajes, setPersonajes]=useState([])
    const {nombre}=useParams()

    const activateMode=()=>{
        setOscuro(!oscuro)
    }
    const llamada = () => {
        fetch(`https://rickandmortyapi.com/api/character?name=${nombre}`)
            .then(res => res.json())
            .then(respuesta => setPersonajes(respuesta.results))
            .catch(err => console.log("ERROR", err))
    }

    
    useEffect(()=>{
        llamada()
    },[nombre])

  return personajes.length===0?
  <p>Cargando...</p>
  :
   (
    <div className='flex-container' style={oscuro?{backgroundColor:"black"}:{backgroundColor:"white"}}>
        {personajes.map((elm)=>{
            
            return <Cards producto={elm} oscuro={oscuro} key={elm.id}/>
        })}
        <Boton titulo="Modo oscuro/claro" funcion={activateMode}/>
    </div>
  )
}
