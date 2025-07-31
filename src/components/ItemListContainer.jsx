import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react"
import { getProducts } from "../mock/AsyncService"
import ItemList from "./ItemList"
import { useParams } from 'react-router-dom';


const ItemListContainer = ({saludo}) => {

  const [data, setData] = useState([])
   const {category}= useParams()
   //console.log(category, 'categoria')

   useEffect (()=>{
     getProducts()
     .then ((res)=> {
       if(category){
          setData(res.filter((prod)=> prod.category === category))
       }else{

          setData(res)
       }
      
      })
     .catch ((error)=> console.log(error))
   }, [category] )

  return(
    <div>
      <h1>{saludo}</h1>

      <ItemList data={data}/>
    </div>
  )
}
export default ItemListContainer