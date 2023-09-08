import React, { useState } from 'react'
import "./style.css"
import Cards from '../Cards-clase-repaso/Cards'
import Boton from '../../clase-4/clase-4-boton/Boton'

export default function ListaCards() {

    const [productos, setProductos]=useState([{
        titulo:"iPhone 14",
        marca:"Apple",
        precio:"$ 500.000",
        categoria:"Celulares",
        descrip:"el mejor telefono"
    },
    {
        titulo:"Notebook",
        marca:"Apple",
        precio:"$ 1.500.000",
        categoria:"Computadoras",
        descrip:"la mejor mac"
    },
    {
        titulo:"Teclado razer",
        marca:"Razer",
        precio:"$ 300.000",
        categoria:"Teclado",
        descrip:"el mejor teclado"
    }])
    const [oscuro, setOscuro]=useState(true)

    const activateMode=()=>{
        setOscuro(!oscuro)
    }

  return (
    <div className='flex-container' style={oscuro?{backgroundColor:"black"}:{backgroundColor:"white"}}>
        {productos.map((elm)=>{
            return <Cards producto={elm} oscuro={oscuro}/>
        })}
        <Boton titulo="Modo oscuro/claro" funcion={activateMode}/>
    </div>
  )
}
