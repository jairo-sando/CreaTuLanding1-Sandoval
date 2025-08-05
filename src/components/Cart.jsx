import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { CartView } from './CartView'
import { EmptyCart } from './EmptyCart'


const Cart = () => {
  const {cart}= useContext (CartContext)
  return (
    <>
       {cart.legth ? <CartView/> : <EmptyCart/> }

    </>
  )
}

export default Cart