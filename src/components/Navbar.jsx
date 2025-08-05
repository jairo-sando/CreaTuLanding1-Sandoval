import "../css/Navbar.css"
import "../css/CartWidget.css"
import CarWidget from "./CartWidget"
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const Navbar = () => {
 const {cart}= useContext (CartContext)  
 return(
   <nav className="nav-container">
        <NavLink to='/'>
             <img src="../Logo_rincon_del_descanso.png" alt="Logo" className="logo-nav"/>
        </NavLink>
      
        <NavLink className="enlaces-nav" to='/'>Todos los Servicios</NavLink>
        <NavLink className="enlaces-nav" to= '/categories/Día de Spa'>Día de Spa</NavLink>
        <NavLink className="enlaces-nav" to= '/categories/Faciales'>Faciales</NavLink>
        <NavLink className="enlaces-nav" to= '/categories/Masajes Descontracturantes'>Masajes Descontracturantes</NavLink>
        { cart.length >0 && <NavLink to= '/cart' style={{textDecoration:'none', color:'black'}}><CarWidget/> </NavLink> }
   </nav>
  )
}
 
export default Navbar 


