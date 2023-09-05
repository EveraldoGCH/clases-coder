import React from 'react'

export default function Clase3() {

    const condicion = true
    const variable = "jajaj"

    // pregunta?aqui va lo que es verdadero: aqui va lo que falso IF TERNARIO
    condicion?console.log("VERDADERO"):console.log("FALSO")


    //Spread Operator

    // const arr1=[1, 2 ,3 ,4]
    // const arr2=[5, 6, 7, 8]
    // console.log(arr1 + arr2)

     const arr1=[1, 2 ,3 ,4]
     const arr2=[...arr1, 5, 6, 7, 8]
     console.log(arr2)

     //propiedades dinámicas

     const obj= {hola:"mundo", hola2:"jajajaj3", hola4:"React", ["hola" + variable]:"mundo2"}


     //desestructuracion
     const miVariable=obj.hola
     const { hola, hola2 } = obj
     

     //Deep matching
    //  const { a: val } = { a : 2 }

    const { hola:hola3 } = obj

    //asignacion en desestructuracion

    const [a=5, b=4]=[1,2,3,4]

    

     console.log(a, b)




  return (
    <div></div>
  )
}
