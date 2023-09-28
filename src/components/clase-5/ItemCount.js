import React, {useState, useEffect} from 'react'
import Boton from '../clase-4/clase-4-boton/Boton'

export default function ItemCount({incrementar, decrementar, cuenta, disabled1, disabled2}) {
    
    return (
        <div>
            <Boton titulo={"Incrementar"} funcion={incrementar} deshabilitado={disabled1}/>
            {cuenta}
            <Boton titulo={"Decrementar"} funcion={decrementar} deshabilitado={disabled2}/>
        </div>
    )
}
