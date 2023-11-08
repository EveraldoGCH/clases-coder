import React, {memo, useEffect} from 'react'

const Boton=memo(({titulo, funcion, deshabilitado}) =>{
  return (
    <div>
        <button disabled={deshabilitado} onClick={()=>funcion()}>{titulo}</button>
    </div>
  )
})

export default Boton
