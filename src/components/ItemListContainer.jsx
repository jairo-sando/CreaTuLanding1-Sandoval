import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react"
import { getProducts, products } from "../mock/AsyncService"
import ItemList from "./ItemList"
import { useParams } from 'react-router-dom';
import LoaderComponent from './LoaderComponent';
import { addDoc, collection, doc, getDocs, query, where } from 'firebase/firestore';
import { db } from '../service/firebase';


const ItemListContainer = ({saludo}) => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
   const {category}= useParams()
   //console.log(category, 'categoria')

  useEffect (()=> {
     setLoading (true)
     //Ref Base de Datos
     const productsCollection = category ? query(collection (db,"servicios"), where("category", "==", category)): collection (db,"servicios")
     //Documentos
     getDocs(productsCollection)
     .then((res)=>{
      const list = res.docs.map ((doc)=>{
       return {
           id:doc.id,
           ...doc.data()

       }
      })

      setData(list)
     })
     .catch((error)=> console.log(error)) 
     .finally (()=> setLoading(false))
  }, [category])
  
  
   //useEffect (()=>{
   //  setLoading (true)
   //  getProducts()
   // .then ((res)=> {
   //    if(category){
   //       setData(res.filter((prod)=> prod.category === category))
   //    }else{

   //       setData(res)
   //    }
      
   //   })
   //  .catch ((error)=> console.log(error))
   //  .finally (()=> setLoading(false) )
   //}, [category] )



  return(
    <>
   
    {loading ? <LoaderComponent/> 
    : <div>
        <h1>{saludo}</h1>
        <ItemList data={data}/>
      </div>}
    
    </>
  )
}
export default ItemListContainer