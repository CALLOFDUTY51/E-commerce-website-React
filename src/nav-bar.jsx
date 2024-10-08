import React, { useState } from 'react';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import {  useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
   const navigate=useNavigate()

   const goCart=()=>{
    navigate('/cart')
   }

 
  const aa={
    position:"absolute", top:"-10px", right:"-10px",
     backgroundColor:"red", borderRadius:"50%",width:"20px",
     textAlign:"center"
  }

  const cnt=useSelector((state)=>state.myslice.cart).length;

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home"><img height={"50px"} src="https://rb.gy/1nyltu"  /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="product">Home</Nav.Link>
            <Nav.Link as={Link} to="#products">Products</Nav.Link>
          </Nav>
          <Nav className="ms-auto" style={{ position: 'relative',display:"flex", alignItems:"center" }}>
          <Nav.Link as={Link} to="Searchproduct"><i style={{fontSize:"25px"}} class="fa-solid fa-magnifying-glass"></i></Nav.Link>
            <Nav.Link as={Link} to="Cart" style={{ position: 'relative', padding: '0' }}>
              <FaShoppingCart onClick={goCart} size={25} />
              <p style={aa}>{cnt}</p>
              
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

