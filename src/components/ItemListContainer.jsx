import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react"
import { getProducts } from "../mock/AsyncService"
import ItemList from "./ItemList"
import { useParams } from 'react-router-dom';
import LoaderComponent from './LoaderComponent';


const ItemListContainer = ({saludo}) => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
   const {category}= useParams()
   //console.log(category, 'categoria')

   useEffect (()=>{
     setLoading (true)
     getProducts()
     .then ((res)=> {
       if(category){
          setData(res.filter((prod)=> prod.category === category))
       }else{

          setData(res)
       }
      
      })
     .catch ((error)=> console.log(error))
     .finally (()=> setLoading(false) )
   }, [category] )

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