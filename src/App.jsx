import './App.css'
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer'; 
import ItemCount from './components/ItemCount'; 



function App() {
  

  return (
    <>
      <Navbar/>
      <ItemListContainer saludo="Bienvenido al Rincón del Descanso..."/>
      <ItemCount/>
    </>
  )
}

export default App
