import React from 'react'

export default function Promises() {

    const task = new Promise((resolve) => {
        resolve(true)
    })

    const promesa = (numero) => new Promise((resolve, reject) => {
        if (numero % 2 == 0) {
            resolve(`${numero} es par`)
        }
        else {
            reject("no es par")
        }
    })


    const llamada = () => {
        fetch("https://rickandmortyapi.com/api/character?page=2&name=rick&status=alive",
        {headers:{"Authorization":"hjfjhdfgsdfhjsdhsjhd cmscn"}})
            .then(res => res.json())
            .then(respuesta => console.log(respuesta))
            .catch(err => console.log("ERROR", err))
    }

    let resultadoFetch=llamada()
    console.log(resultadoFetch)




    return (
        <div>Promises</div>
    )
}
