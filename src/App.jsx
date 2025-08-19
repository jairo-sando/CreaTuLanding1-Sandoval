import './App.css'
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer'; 
import ItemCount from './components/ItemCount'; 
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';
import Checkout from './components/Checkout';




function App() {
  

  return (
    <BrowserRouter>
     <CartProvider> <Navbar/> 
      <Routes>
        <Route path='/' element ={<ItemListContainer saludo="Bienvenido al Rincón del Descanso..."/>} />
        <Route path='/categories/:category' element ={<ItemListContainer saludo="Estas en la categoria: "/>} />
        <Route path='/Item/:id' element ={ <ItemDetailContainer/>} />
        <Route path='/cart' element ={ <Cart/>} />
        <Route path='/checkout' element = { <Checkout/>}/>
        <Route path='*' element = { <NotFound/>} />
      </Routes>
           
     </CartProvider> 
      
    </BrowserRouter>
  )
}

export default App
