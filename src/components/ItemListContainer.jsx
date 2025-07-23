import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react"
import { getProducts } from "../mock/AsyncService"
import ItemList from "./ItemList"


const ItemListContainer = ({saludo}) => {

  const [data, setData] = useState([])

   useEffect (()=>{
     getProducts()
     .then ((res)=> setData(res))
     .catch ((error)=> console.log(error))
   }, [] )

  return(
    <div>
      <h1>{saludo}</h1>

      <ItemList data={data}/>
    </div>
  )
}
export default ItemListContainer