import React from 'react'
import ItemCount from './ItemCount'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const ItemDetail = ({detalle}) => {
  const {addItem, cart} = useContext (CartContext)
  const onAdd = (cantidad)=> {
    console.log(`Compraste ${cantidad} de productos`)
    addItem(detalle, cantidad)
  }
console.log (cart,'cart' )
  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center' }}>
       <h2>Detalle de: {detalle.name}</h2>
       <img alt= {detalle.name} src={detalle.img}/>
       <p>{detalle.description}</p>
       <p>Stock {detalle.stock}</p>
       <p>Precio ${detalle.price},00</p>
      <ItemCount stock={detalle.stock} onAdd= {onAdd}/>


    </div>
    
  )
}

export default ItemDetail