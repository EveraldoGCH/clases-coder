import { useState, useEffect } from "react"
import Boton from "../clase-4-boton/Boton"
import Productos from "../clase-4-Productos/Productos"
import "./styles.css"
import Cuadrado from "../clase4-Cuadrado/Cuadrado"



 const Clase4ContadorPadre=()=>{
    const [cuenta, setCuenta] = useState(0)
    const [color, setColor]=useState("black")
    const [personajes, setPersonajes]=useState([])


    const arrayProductos=["Telefono", "remera", "Palo de hockey", "Pelota"]

    const incrementar=()=>{
        setCuenta(cuenta+1)
    }
    const decrementar=()=>{
        setCuenta(cuenta-1)
    }
    const cambiarColor=()=>{
        setColor("aqua")
    }


    
    //useEffect Ejemplo
    //Recibe 2 parametros: primer parametro: 1 funcion a ejecutar
    //2do parametro ARRAY de dependencias a escuchar

    useEffect(()=>{
        fetch("https://rickandmortyapi.com/api/character")
        .then(res=>res.json())
        .then(json=>{
            setPersonajes(json)
            console.log(json)
        })

        return ()=>console.log("SE DESMONTO EL COMPONENTE Clase4ContenedorPadre")
    }, [])

    return(
    <div className="Container">
        <Boton titulo={"Incrementar"} funcion={incrementar}/>
        <p>{cuenta}</p>
        <Boton titulo={"Decrementar"} funcion={decrementar}/>
        <Boton titulo={"cambiar color"} funcion={cambiarColor}/>
        <Cuadrado color={color}/>

    </div>
    )
}

export default Clase4ContadorPadre