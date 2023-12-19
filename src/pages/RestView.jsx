import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import RestReview from '../components/RestReview';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
function RestView() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {id} = useParams()
  console.log(id);

  const allRestaurant = useSelector((state)=>state.restaurantSlice.allrestaurant)
  console.log(allRestaurant);
  const selectedRestaurant = allRestaurant.find(item=>item.id==id)
  console.log(selectedRestaurant);
  return (
    <Row>
        <Col md={4}>
        <img className='ms-3 rounded' src={selectedRestaurant.photograph} alt="" style={{width:'100%',height:'500px'}} />
        </Col>
        
        <Col className='ms-5' md={7}>
        <ListGroup as="ul">
      <ListGroup.Item as="li" active className='p-3 text-center'>
       <span className=''> RESTAURANT </span> DETAILS 
      </ListGroup.Item> <hr />
      <ListGroup.Item className='text-center fs-3' > {selectedRestaurant.name} </ListGroup.Item>
      <ListGroup.Item> neighbourhood : {selectedRestaurant.neighbourhood} </ListGroup.Item>
      <ListGroup.Item> cusine type : {selectedRestaurant.cuisine_type} </ListGroup.Item>
      <ListGroup.Item> Address : {selectedRestaurant.address} </ListGroup.Item>
     
    </ListGroup>
    <ListGroup.Item className='text-center'>
    <button className='btn btn-warning p-3 mt-3 rounded' onClick={handleShow}>operating hours</button>
    <RestReview review = {selectedRestaurant.reviews}/>
    

   
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-success'>RESTAURANT timings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup>
      <ListGroup.Item>Monday:{selectedRestaurant.operating_hours.Monday}</ListGroup.Item>
      <ListGroup.Item>Tuesday:{selectedRestaurant.operating_hours.Tuesday}</ListGroup.Item>
      <ListGroup.Item>Wednesday:{selectedRestaurant.operating_hours.Wednesday}</ListGroup.Item>
      <ListGroup.Item>Thursday:{selectedRestaurant.operating_hours.Thursday}</ListGroup.Item>
      <ListGroup.Item>Friday:{selectedRestaurant.operating_hours.Friday}</ListGroup.Item>
      <ListGroup.Item>Saturday:{selectedRestaurant.operating_hours.Saturday}</ListGroup.Item>
      <ListGroup.Item>Sunday:{selectedRestaurant.operating_hours.Sunday}</ListGroup.Item>
    </ListGroup>
        </Modal.Body>
        <Modal.Footer>
         
        </Modal.Footer>
      </Modal>

      

    </ListGroup.Item>
        </Col>
    </Row>
  )
}

export default RestView