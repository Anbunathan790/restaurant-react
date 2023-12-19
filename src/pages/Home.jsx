import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import RestCard from '../components/RestCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRestaurant } from '../redux/restaurantSlice'

function Home() {
   //accessing state inorder to display content
  const allrestaurant = useSelector((state)=> state.restaurantSlice.allrestaurant)
  console.log(allrestaurant);

  const dispach = useDispatch()

  useEffect(()=>{
    //thunk function called
    dispach(fetchRestaurant())
  },[])
  return (
    <Row className='p-5'>
      {allrestaurant?.length>0?
      allrestaurant.map((restaurant)=>(
      
        <Col sm={6} md={4}>
        <RestCard restaurant = {restaurant}/>
        </Col>))
        : <p className='text-danger'>nothing to display</p>
      }
    </Row>
  )
}

export default Home