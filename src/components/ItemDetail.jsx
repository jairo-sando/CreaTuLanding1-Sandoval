import React, { useState } from 'react'
import ItemCount from './ItemCount'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({detalle}) => {
  const {addItem, itemQuantity} = useContext (CartContext)
  const [purchase, setPuchase] = useState (false)



  const onAdd = (cantidad)=> {
    console.log(`Compraste ${cantidad} de productos`)
    addItem(detalle, cantidad)
    setPuchase (true)
  }

 const stockActualizado = detalle.stock - itemQuantity(detalle.id)


  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center' }}>
       <h2>Detalle de: {detalle.name}</h2>
       <img alt= {detalle.name} src={detalle.img}/>
       <p>{detalle.description}</p>
       <p>Stock {stockActualizado}</p>
       <p>Precio ${detalle.price},00</p>
       { purchase 
       ? <div style={{width:"80%", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
           <Link className= 'btn btn-outline-success' to= '/'> Seguir Comprando </Link>  
           <Link className= 'btn btn-outline-dark' to= '/cart'> Ir al Carrito de Compra </Link>
         </div>
       : <ItemCount stock={stockActualizado} onAdd= {onAdd}/>}


    </div>
    
  )
}

export default ItemDetail