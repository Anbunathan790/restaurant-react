import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { search } from '../redux/restaurantSlice';

function Header() {
  const dispach = useDispatch()
  return (
   
    <Navbar expand="lg" className="p-3 bg-body-danger ">
    <Container>
      <Navbar.Brand href="" className='d-flex'>
        <img className=' rounded' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKwysyikd2Rjsr3RWVJGdJqXR2aDENkMxD0sZkQDBG&s" style={{width:'15%'}}
        alt="" />
        <h1 className='ms-5 mt-3'>Restaurant</h1>

      </Navbar.Brand>
      <input onChange={(e)=>dispach(search(e.target.value))} className='form-control w-25'type="text" placeholder='enter neighbourhood'  />

    </Container>
  </Navbar>
  
  )
}

export default Header