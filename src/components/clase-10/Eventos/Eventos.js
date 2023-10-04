import React, {useEffect, useState} from 'react'

export default function Eventos() {
    const [input, setInput]=useState("")


    const handleResize=()=>{
        console.log("Aviso se ajusto la pantalla")

    }

    const handleChange=(e)=>{
        setInput(e.target.value)
    }

    const handleKey=(e)=>{
        if(e.key==="a" || e.key==="e" || e.key==="i" || e.key==="o" || e.key==="u"){
            e.preventDefault()
            console.log("VOCAL")
        }
    }

  return (
    <div>
        <form onChange={(e)=>handleChange(e)} onKeyDown={(e)=>handleKey(e)}>
            <label>Nombre:</label>
            <input type='text' value={input}/>

        </form>
    </div>
  )
}
