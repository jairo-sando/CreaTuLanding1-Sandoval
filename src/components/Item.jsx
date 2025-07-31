import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Item = ({prod}) => {
  return (
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {prod.img} />
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>
          $ {prod.price},00
        </Card.Text>
        <Link className='btn btn-success' to={'/Item/'+prod.id} >Ver más Detalle</Link>
      </Card.Body>
    </Card>
  )
}

export default Item