import React, { useState, useEffect, useContext } from 'react'
import "./style.css"
import Boton from '../clase-4/clase-4-boton/Boton'
import Cards from '../clase-repaso1/Cards-clase-repaso/Cards'
import { useParams } from 'react-router-dom'
import { coleccionContext } from '../../context/ColeccionContext'

export default function Personaje() {
    const [personajes, setPersonajes]=useState([])
    const [loading, setLoading]=useState(true)
    const {nombre}=useParams()
    const {dark, setDark}=useContext(coleccionContext)

    const activateMode=()=>{
        setDark(!dark)
    }
    const llamada = () => {
        fetch(`https://rickandmortyapi.com/api/character?name=${nombre}`)
            .then(res => res.json())
            .then(respuesta => setPersonajes(respuesta.results))
            .catch(err => console.log("ERROR", err))
            .finally(()=>{
                setLoading(false)
            })
    }

    
    useEffect(()=>{
        llamada()
    },[nombre])

//     useEffect(()=>{
// setTimeout(()=>{
//     setLoading(false)
// },3000)
//     },[])

  return loading?
  <p>Cargando...</p>
  :
   (
    <div className='flex-container' style={dark?{backgroundColor:"black"}:{backgroundColor:"white"}}>
        {personajes.map((elm)=>{
            return <Cards producto={elm} oscuro={dark} key={elm.id}/>
        })}
        <Boton titulo="Modo oscuro/claro" funcion={activateMode}/>
    </div>
  )
}
