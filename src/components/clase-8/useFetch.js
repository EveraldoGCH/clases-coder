import React, { useEffect, useState } from 'react'


export const useFetch=(url)=>{
    const [personajes, setPersonajes]=useState([])
    

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(respuesta => setPersonajes(respuesta))
        .catch(err => console.log("ERROR", err))
    },[])
        

            return {personajes}
}