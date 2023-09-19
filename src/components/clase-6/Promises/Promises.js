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

    // promesa(6)
    // .then(res=>console.log(res))
    // .catch(err=>console.log(err))

    const llamada = () => {
        fetch("https://rickatyapi.com/api/character")
            .then(res => res.json())
            .then(respuesta => console.log(respuesta))
            .catch(err => console.log("ERROR", err))
    }


    const array = [1, 2, 3, 4, 5, 6]


    return (
        <div>Promises</div>
    )
}
