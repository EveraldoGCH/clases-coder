import React, { useState, useEffect } from 'react'
import { useCounter } from './useCounter'


//Que es un High Order Component?
//Es una funcion de JavaScript que recibe como parametro un componente y devuelve
//Un componente con una funcionalidad
export const HOC = (Componente, productos, titulo) => {
    function NewComponente() {
   const { cuenta, incrementar, decrementar, disabled1, disabled2 } = useCounter(productos)


        return (
        <>
        <h1>{titulo}</h1>
        <Componente cuenta={cuenta} incrementar={incrementar} decrementar={decrementar} 
        disabled1={disabled1}
        disabled2={disabled2}/>
        </>)
        
    }
    return NewComponente
}
