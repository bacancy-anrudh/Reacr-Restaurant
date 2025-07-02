import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import '../../styles/custom-variants.css';
import HeaderLogo from '../../assets/logo.svg';
import HeaderCart from '../../assets/cart.svg';

const MainNavbar = () => {
  return (
    <Navbar expand="lg" variant="light" fixed="top" className='navbar-custom py-3'>
      <Container>
        <Navbar.Brand as={Link} to="/" className='order-0 py-0'>
          <img src={HeaderLogo} alt="Logo" className="header-logo" />{' '}
        </Navbar.Brand>
        <nav className='order-1 order-lg-2 border-0 ms-auto ms-lg-3 py-0'>
          <Nav className="ms-auto flex-row align-items-center">
            <Nav as={NavLink} to="/viewcard" className='px-0 cart-icon'>
              <img src={HeaderCart} alt="Cart" className="w-100" />{' '}
            </Nav>
            <Button as={NavLink} to="/signin" variant="tertiary" className="rounded-pill mx-3 me-lg-0">Sign In</Button>
          </Nav>
        </nav>
        <Navbar.Toggle className='border-0 p-0 order-2 ms-1' aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav" className='order-3 order-lg-1 justify-content-lg-center'>
          <Nav className="ms-auto mx-lg-auto">
            <Nav.Link as={NavLink} to="/" className='px-lg-3'>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about" className='px-lg-3'>About Us</Nav.Link>
            <Nav.Link as={NavLink} to="/menu" className='px-lg-3'>Menu</Nav.Link>
            <Nav.Link as={NavLink} to="/order" className='px-lg-3'>Order</Nav.Link>
            <Nav.Link as={NavLink} to="/blog" className='px-lg-3'>Blog</Nav.Link>
            <Nav.Link as={NavLink} to="/recipe" className='px-lg-3'>Recipe</Nav.Link>
            <Nav.Link as={NavLink} to="/shop" className='px-lg-3'>Shop</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className='px-lg-3'>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;