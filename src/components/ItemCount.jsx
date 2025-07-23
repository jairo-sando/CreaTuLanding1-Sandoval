import { useState } from "react"


const ItemCount = () => {
    const [count, setCount]=useState(1)

    const sumar = () => {
       setCount(count + 1)
    }

    const restar = () => {
       setCount(count - 1)
    }

  return (
    <div>
      <button className='btn btn-danger' onClick={restar}>-</button>
      <span className="btn">{count}</span>
      <button className='btn btn-sucess' onClick={sumar}>+</button>
       


    </div>
  )
}

export default ItemCount 