import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../mock/AsyncService'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'

const ItemDetailContainer = () => {
     const [detalle, setDetalle]= useState({})
     const [carga, setCarga] = useState (false)
     const {id} = useParams()
    console.log(id, 'userparams')
    
     useEffect(()=>{
        setCarga (true)
        getOneProduct(id)
        .then((res)=> setDetalle(res))
        .catch((error)=> console.log(error))
        .finally (()=> setCarga(false)) 
     },[])
   

  return (
    <>
    {carga ? <LoaderComponent/> : <ItemDetail detalle={detalle}/> }
    </>
  )
}

export default ItemDetailContainer