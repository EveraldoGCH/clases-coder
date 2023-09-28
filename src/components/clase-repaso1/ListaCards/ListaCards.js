import React, { useState, useEffect } from 'react'
import "./style.css"
import Cards from '../Cards-clase-repaso/Cards'
import Boton from '../../clase-4/clase-4-boton/Boton'

export default function ListaCards() {
    const [oscuro, setOscuro]=useState(true)
    const [personajes, setPersonajes]=useState([])

    const activateMode=()=>{
        setOscuro(!oscuro)
    }
    const llamada = () => {
        fetch("https://rickandmortyapi.com/api/character?page=2&name=rick&status=alive")
            .then(res => res.json())
            .then(respuesta => setPersonajes(respuesta.results))
            .catch(err => console.log("ERROR", err))
    }

    
    useEffect(()=>{
        llamada()
    },[])

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
