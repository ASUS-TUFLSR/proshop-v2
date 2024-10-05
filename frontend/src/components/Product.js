import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
  return (
    <Card className='my-3 py-3 rounded' >
        <Link to={`/product/${product._id}`} >
            <Card.Img src={product.image} variant='top'/>
        </Link>
        <Card.Body>
            <Link to={`/product/${product._id}`}  style={{color:"#404040", textDecoration:"none"}} >
                <Card.Title as='div'> <strong>{product.name}</strong> </Card.Title>
            </Link>
            <Card.Text as="h3" style={{color:"#737373"}}> $ {product.price} </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Product