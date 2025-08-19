import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../mock/AsyncService'
import ItemDetail from './ItemDetail'
import { Link, Links, useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase'

const ItemDetailContainer = () => {
     const [detalle, setDetalle]= useState({})
     const [carga, setCarga] = useState (false)
     const [invalid, setInvalid ] = useState (null)

     const {id} = useParams()
    console.log(id, 'userparams')

//firebase

useEffect(()=> {
  setCarga (true)
  const prodCollection = collection (db, "servicios") 
  //Referencia
  const docRef = doc(prodCollection, id)

  getDoc(docRef)
  .then((res)=> {
    if(res.data ()){
      setDetalle({id:res.id, ...res.data()})
    } else {
      setInvalid(true)
    }
  })
  .catch((error)=> console.log(error))
  .finally (()=> setCarga(false)) 
}, [id])



    
//     useEffect(()=>{
//        setCarga (true)
//        getOneProduct(id)
//        .then((res)=> setDetalle(res))
//        .catch((error)=> console.log(error))
//        .finally (()=> setCarga(false)) 
//     },[])

 
 if (invalid){
   
   return (
     <div>
       <h2>No se encuentra este servicio 😞</h2>
       <Link className= 'btn btn-success' to= '/'> Volver a la pagina Principal</Link>
     </div>
     
   )
 }


  return (
    <>
    {carga ? <LoaderComponent/> : <ItemDetail detalle={detalle}/> }
    </>
  )
}

export default ItemDetailContainer