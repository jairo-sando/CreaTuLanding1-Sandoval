import { useContext } from "react"; 
import { CartContext } from "../context/CartContext";




const CarWidget = () => {

const {cartQuantity}= useContext (CartContext)   
  
   return (
      <div>
        <img src="../carritocompras.png" alt="Carrito" className="carrito" />
        <span className="numerito">{cartQuantity()}</span>
      </div>
   )

} 

export default CarWidget