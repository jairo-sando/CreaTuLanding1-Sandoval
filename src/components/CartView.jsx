import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

export const CartView = () => {
  const {cart, clear, removeItem, cartTotal} = useContext (CartContext)
  const preConfirm = () => {
    Swal.fire ({
      title: '¿Estás seguro de borrar el carrito?',
      showDenyButton: true,
      denyButtonText: 'No', 
      confirmButtonText: 'Si',
    }).then((result)=>{
      if(result.isConfirmed){
       clear() 
      }else if(result.isDenied){

      }
    })
    
  }
  return (
    <div>
      <h1>Tu compra:</h1>
      <div>
        {cart.map ((compra)=>(
          
          <div key={compra.id} style={{display:'flex', justifyContent:'space-between', alignItems: 'center', width:'100%', padding:'2rem' }}> 
            <img src={compra.img} alt={compra.name} style={{width:'10rem'}} />
            <span>{compra.name}</span>
            <span>${compra.price},00 </span>
            <span>Servicios: {compra.quantity}</span>
            <span>Precio Final: ${compra.price*compra.quantity},00</span>
            <button className='btn btn-danger' onClick={()=> removeItem(compra.id)}>X</button>
          </div>

        ))}

      </div>
         
        <span>Total a Pagar: $ {cartTotal()},00 </span>

      <div>
        <button className='btn btn-danger' onClick={preConfirm}>Borrar Carrito</button>
        <Link className='btn btn-primary' to='/checkout'>Confirmar Compra </Link>


      </div>
       


    </div>
  )
}
