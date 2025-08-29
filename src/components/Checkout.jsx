import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../service/firebase'
import { Link } from 'react-router-dom'

 const Checkout = () => {

    const [buyer, setBuyer]= useState ({}) 
    const [ validMail, setValidMail ] = useState ('')
    const [ orderId, setOrderId] = useState ('')
    const [ errorMsg, setErrorMsg ] = useState ('')
    const {cart, cartTotal, clear}= useContext(CartContext) 

    const buyerData =  (e) => {
        setBuyer (
          { 
             ...buyer, 
              [e.target.name]: e.target.value
              
          }         
       )
    }

    

      const finalizarCompra = async (e) => {
        e.preventDefault()

        
    // Validación de emails
       
       if (!buyer.email || buyer.email !== validMail) {
      setErrorMsg("⚠️ Los correos electrónicos no coinciden")
      return
        }
        
    // Validación de que haya algo en el carrito
       if (cart.length === 0) {
        setErrorMsg("⚠️ Tu carrito está vacío")
       return
        } 

    // Validación de datos del usuario

      if ( !buyer.name || !buyer.lastname ) {
        setErrorMsg("⚠️ Porfavor complete los datos solicitados ")
      return
      }
      
        let order = {
          comprador:buyer,
          compras: cart, 
          total: cartTotal(),
          date: serverTimestamp()
          }

        
      try {
      const ventas = collection(db, "orders")
      const res = await addDoc(ventas, order)
      setOrderId(res.id)
      clear()
      setErrorMsg('')
    } catch (error) {
      console.log(error)
      setErrorMsg("❌ Ocurrió un error al guardar la orden")
    }
  }
  
  return (
    <>
      {orderId ? (
        <div>
          <h2>Generaste la compra correctamente 🤩</h2>
          <p>La referencia es : {orderId}</p>
          <Link className='btn btn-success' to='/'>Volver a la lista de servicios</Link>
        </div>
      ) : (
        <div>
          <h2>Complete sus datos</h2>

          {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}

          <form onSubmit={finalizarCompra}>
            <input 
              className='form-control' 
              name='name' 
              placeholder='Ingrese Nombre' 
              type="text" 
              onChange={buyerData} 
              required
            />
            <input 
              className='form-control' 
              name='lastname' 
              placeholder='Ingrese Apellido' 
              type="text" 
              onChange={buyerData} 
              required
            />
            <input 
              className='form-control' 
              name='adress' 
              placeholder='Ingrese Dirección' 
              type="text" 
              onChange={buyerData} 
              required
            />
            <input 
              className='form-control' 
              name='email' 
              placeholder='Ingrese correo electrónico' 
              type="email" 
              onChange={buyerData} 
              required
            />
            <input 
              className='form-control' 
              name='second-email' 
              placeholder='Reingrese correo electrónico' 
              type="email" 
              onChange={(e)=> setValidMail(e.target.value)} 
              required
            />
            <button className='btn btn-success' type='submit'>Terminar Compra</button>
          </form>
        </div>
      )}
    </>
  )
}

export default Checkout
