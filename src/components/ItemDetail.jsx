import React from 'react'

const ItemDetail = ({detalle}) => {
  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
       <h2>Detalle de: {detalle.name}</h2>
       <img alt= {detalle.name} src={detalle.img}/>
       <p>{detalle.description}</p>
       <p>Stock {detalle.stock}</p>
       <p>Precio ${detalle.price},00</p>
       


    </div>
  )
}

export default ItemDetail