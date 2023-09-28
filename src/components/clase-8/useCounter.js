import React, { useState, useEffect } from 'react'


export const useCounter = (productos) => {
    const [cuenta, setCuenta] = useState(0)
    const [disabled1, setDisabled1] = useState(false)
    const [disabled2, setDisabled2] = useState(true)

   

    const incrementar = () => {
        setCuenta(cuenta + 1)
    }

    const decrementar = () => {
        setCuenta(cuenta - 1)
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

    return {incrementar, decrementar, disabled1, disabled2, cuenta}

}