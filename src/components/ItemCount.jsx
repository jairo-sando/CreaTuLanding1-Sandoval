import { useState } from "react"


const ItemCount = ({stock, onAdd}) => {
    const [count, setCount]=useState(1)

    const sumar = () => {
      if(count < stock) {
       setCount(count + 1)
       }
    }

    const restar = () => {
      if(count> 0 ) {

       setCount(count - 1) 
      }
    }

  return (
    <div>
      <div>
      <button className='btn btn-outline-danger' onClick={restar}>-</button>
      <span className="btn">{count}</span>
      <button className='btn btn-outline-success' onClick={sumar}>+</button>
      </div>

      <button className="btn btn-outline-dark" disabled= {count=== 0} onClick={ ()=> onAdd(count) }>Comprar</button>

    </div>
  )
}

export default ItemCount 