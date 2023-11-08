import { useState, useEffect } from 'react'
import { db } from '..'
import { collection, getDocs } from 'firebase/firestore'



export const useCallCollection=(coleccion)=>{
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const llamadaFSDocs = () => {
        const itemsCollection = collection(db, coleccion)
        getDocs(itemsCollection).then((res) => {
            let items = res.docs.map((elm) => ({ ...elm.data() }))
            setData(items)
        })
        .catch(()=>{

        })
        .finally(()=>{
            setLoading(false)
        })
    }
    useEffect(()=>{
       if(data.length===0){
        llamadaFSDocs()
       }

    },[])


    return {data, loading}
}