import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', marginTop:15}}>
        <img src='../Error404.png' alt='error'style={{width: '40%', marginBottom: 15}} />

        <Link className='btn btn-dark' to= '/' >Volver a Inicio</Link>


      
       
    
    </div>
  )
}

export default NotFound