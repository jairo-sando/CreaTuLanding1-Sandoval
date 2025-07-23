import React from 'react'
import { Button, Card } from 'react-bootstrap'

export const Item = ({prod}) => {
  return (
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {prod.img} />
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>
          $ {prod.price},00
        </Card.Text>
        <Button variant="primary">Ver más Detalle</Button>
      </Card.Body>
    </Card>
  )
}

export default Item