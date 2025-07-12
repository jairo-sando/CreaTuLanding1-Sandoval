import "../css/Navbar.css"
import "../css/CartWidget.css"
import CarWidget from "./CartWidget"

const Navbar = () => {
 return(
   <nav className="nav-container">
         <img src="../Logo_rincon_del_descanso.png" alt="Logo" className="logo-nav"/>
        <a className="enlaces-nav">Todos los Servicios</a>
        <a className="enlaces-nav">Día de Spa</a>
        <a className="enlaces-nav">Faciales</a>
        <a className="enlaces-nav">Masajes Descontracturantes</a>
        <CarWidget/> 
   </nav>
  )
}
 
export default Navbar 


