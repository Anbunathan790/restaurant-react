import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function RestCard({restaurant}) {
  return (
    <Link to={`/restaurant_view/${restaurant.id}`} style={{textDecoration:'none'}}>
    <Card className='mt-5 rounded' style={{ width: '100%' }}>
    <Card.Img className='rounded' variant="top" src={restaurant.photograph} />
    <Card.Body>
      <Card.Title className='text-center p-3'>{restaurant.name}</Card.Title> <hr />
      <Row>
        <Col className='text-center'>
        {restaurant.neighborhood}
        </Col>
        <Col className='text-center'>
        Cusine type:{restaurant.cuisine_type}
        </Col>
      </Row>
    </Card.Body>
  </Card>
  </Link>
  )
}

export default RestCard