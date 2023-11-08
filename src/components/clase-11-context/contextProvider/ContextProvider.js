import React, { useState } from 'react'
import { coleccionContext } from '../../../context/ColeccionContext'
import { useEffect } from 'react'

export default function ContextProvider({children}) {

const [coleccion, setColeccion]=useState([])
const [dark, setDark]=useState(false)

useEffect(()=>{
    let coleccionLS=JSON.parse(localStorage.getItem("coleccion"))
    if(coleccionLS!=[]){
        setColeccion(coleccionLS)
    }
},[])

const guardarenLS=(producto)=>{
    setColeccion([...coleccion, producto])
    let coleccionLS=JSON.parse(localStorage.getItem("coleccion"))
    console.log(coleccionLS)
    if(coleccionLS){
        coleccionLS.push(producto)
        localStorage.setItem("coleccion", JSON.stringify(coleccionLS))
    }
    else{
        localStorage.setItem("coleccion", JSON.stringify([producto]))
    }
}



  return (
    <coleccionContext.Provider value={{coleccion, setColeccion, dark, setDark, guardarenLS}}>
        {children}
    </coleccionContext.Provider>
  )
}
