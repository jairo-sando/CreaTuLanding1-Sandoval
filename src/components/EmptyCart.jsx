import React from 'react'
import { Link } from 'react-router-dom'

export const EmptyCart = () => {
  return (
    <div style={{padding:'2rem', color:'rgb(32, 155, 157)'}}> 
        <h2>Tu carrito esta vacio 😳 </h2>
        <h4>Volve a la página principal para elegir la experiencia que más te guste</h4>
        
        <Link className='btn btn-outline-dark' to='/'>Ir a comprar</Link>
    </div>
  )
}
