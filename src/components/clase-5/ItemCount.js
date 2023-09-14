import React, {useState, useEffect} from 'react'
import Boton from '../clase-4/clase-4-boton/Boton'

export default function ItemCount() {
    const [cuenta, setCuenta]=useState(0)
    const [disabled1, setDisabled1]=useState(false)
    const [disabled2, setDisabled2]=useState(true)


    const productos=[{
        titulo:"iPhone 15",
        stock:10
    }]

    const incrementar=()=>{
            setCuenta(cuenta+1)
    }
    
    const decrementar=()=>{
            setCuenta(cuenta-1)
    }

    useEffect(()=>{
        if(cuenta==0){
            setDisabled2(true)
        }
        else if(cuenta>=1){
            setDisabled2(false)
        }

        
        if(cuenta==productos[0].stock){
            setDisabled1(true)
        }
    }, [cuenta])


    return (
        <div>
            <Boton titulo={"Incrementar"} funcion={incrementar} deshabilitado={disabled1}/>
            {cuenta}
            <Boton titulo={"Decrementar"} funcion={decrementar} deshabilitado={disabled2}/>
        </div>
    )
}
