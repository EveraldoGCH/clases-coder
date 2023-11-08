import React, { useState, useEffect, useContext } from 'react'
import "./style.css"
import Boton from '../clase-4/clase-4-boton/Boton'
import Cards from '../clase-repaso1/Cards-clase-repaso/Cards'
import { useParams } from 'react-router-dom'
import { coleccionContext } from '../../context/ColeccionContext'
import { db } from '../..'
import { collection, getDocs, where, query, limit, doc, getDoc, addDoc, updateDoc, writeBatch } from "firebase/firestore"
import { useCallCollection } from '../../hooks/useCallCollection'



export default function Personaje() {
    const [newPersonaje, setNewPersonaje] = useState()
    const { nombre } = useParams()
    const { dark, setDark } = useContext(coleccionContext)
    const { data, loading } = useCallCollection("personajes")


    const activateMode = () => {
        setDark(!dark)
    }

    // const llamada = () => {
    //     fetch(`https://rickandmortyapi.com/api/character?name=${nombre}`)
    //         .then(res => res.json())
    //         .then(respuesta => setPersonajes(respuesta.results))
    //         .catch(err => console.log("ERROR", err))
    //         .finally(()=>{
    //             setLoading(false)
    //         })
    // }
    // useEffect(()=>{
    //     llamada()
    // },[nombre])


    const llamadaFSDoc = () => {
        const docRef = doc(db, "personajes", "Ej4FY5mOF1mbwupxgmES")
        getDoc(docRef).then((res) => {
            let item = res.data()
            console.log(item)
        })
    }

    // const llamadaFSDocsFilter = () => {
    //     const itemsCollection = query(collection(db, "personajes"),
    //         where("nombre", "==", "morty")
    //         , limit(1))
    //     getDocs(itemsCollection).then((res) => {
    //         let items = res.docs.map((elm) => ({ ...elm.data() }))
    //         setPersonajes(items)
    //     })
    // }

    
    const handleChange=(e)=>{
        setNewPersonaje({...newPersonaje, [e.target.name]:e.target.value})
        console.log({...newPersonaje, [e.target.name]:e.target.value})
    }

    const handleSubmit=()=>{
        const personajesColection=collection(db, "personajes")
        addDoc(personajesColection, newPersonaje)
    }

    const modificar=()=>{
        const personajeDoc=doc(db, "personajes", "rDUg5yE1bqmAT5fZTdrE")
        updateDoc(personajeDoc, {nombre:"Rick"})
    }

    const bathcUpdate=()=>{
        const batch=writeBatch(db)
        const doc1=doc(db, "personajes", "Yz1SZb3fCnffs1tJynjY")
        const doc2=doc(db, "personajes", "sBuSHEh2BhEgkXSDIjFE")
        batch.update(doc1, {nombre:"RICK C-137"})
        batch.set(doc1, {nueva:"Eve"})
        batch.commit()
    }


    // useEffect(()=>{
    //     llamadaFSDocs()
    // },[handleSubmit])

    return loading ?
        <p>Cargando...</p>
        :
        (
            <div className={`flex-container ${dark ? "oscuro" : "claro"}`}>
                <form>
                    <label>Nombre</label>
                    <input type='text' name="nombre" onChange={(e)=>handleChange(e)}/>
                    <label>Status</label>
                    <input type='text' name="status" onChange={(e)=>handleChange(e)}/>
                    <label>Episodio</label>
                    <input type='text' name="episodio" onChange={(e)=>handleChange(e)}/>
                </form>
                <Boton titulo="Agregar nuevo personaje" funcion={handleSubmit} />
                {data.map((elm) => {
                    return <Cards producto={elm} oscuro={dark} key={elm.id} />
                })}
            </div>
        )
}
