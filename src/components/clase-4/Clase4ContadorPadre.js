import { useState } from "react"
import Boton from "../clase-4-boton/Boton"
import Productos from "../clase-4-Productos/Productos"
import "./styles.css"
import Cuadrado from "../clase4-Cuadrado/Cuadrado"



 const Clase4ContadorPadre=()=>{
    const [cuenta, setCuenta] = useState(0)
    const [nombre, setNombre] = useState("Everaldo")
    const [cargando, setCargando]=useState(true)
    const [color, setColor]=useState("black")


    const arrayProductos=["Telefono", "remera", "Palo de hockey", "Pelota"]

    const incrementar=()=>{
        setCuenta(cuenta+1)
        setNombre("Pepito")
        setCargando(false)
    }

    const decrementar=()=>{
        setCuenta(cuenta-1)
    }

    const cambiarColor=()=>{
        setColor("aqua")
    }

    return(
    <div className="Container">
        <Boton titulo={"Incrementar"} funcion={incrementar}/>
        <p>{cuenta}</p>
        <p>{nombre}</p>
        <Boton titulo={"Decrementar"} funcion={decrementar}/>
        <Boton titulo={"cambiar color"} funcion={cambiarColor}/>

        {arrayProductos.map((elm)=>{
            return <Productos titulo={elm}/>
        })}
        <Cuadrado color={color}/>
    </div>
    )
}

export default Clase4ContadorPadre