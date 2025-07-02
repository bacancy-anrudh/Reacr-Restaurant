import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import HeaderLogo from '../../assets/logo.svg';
import './Footer.css';

const Footer = () => (
  <footer className="footer bg-dark text-white pt-5 pb-3">
    <Container>
      <Row className="gy-4 align-items-start">
        <Col md={4}>
          <div className="mb-3 d-flex align-items-center gap-2">
            <Link as={Link} to="/">
                <img src={HeaderLogo} alt="Logo" className="header-logo" />{' '}
            </Link>
          </div>
          <p className="mb-4">Lorem ipsum dolor sit amet consectetur. Tristique cursus morbi nibh nec et vulputate.</p>
          <h5 className="fw-semibold text-uppercase mb-3">Opening Restaurant</h5>
          <div className="footer-opening">
            <p className='text-default mb-2'>Sa - We: 09:00am - 10:00pm</p>
            <p className='text-default mb-2'>Thu - We: 09:00am - 10:00pm</p>
            <p className='text-default mb-2'>Friday Closed</p>
          </div>
        </Col>
        <Col md={3}>
          <h5 className="fw-semibold text-uppercase mb-3">Navigation</h5>
          <ul className="footer-links list-unstyled">
            <li className='nav-item'><NavLink to="/" end className={({ isActive }) => 'nav-link px-0 text-decoration-none' + (isActive ? ' active' : '')}>Home</NavLink></li>
            <li className='nav-item'><NavLink to="/about" end className={({ isActive }) => 'nav-link px-0 text-decoration-none' + (isActive ? ' active' : '')}>About Us</NavLink></li>
            <li className='nav-item'><NavLink to="/menu" className={({ isActive }) => 'nav-link px-0 text-decoration-none' + (isActive ? ' active' : '')}>Menu</NavLink></li>
            <li className='nav-item'><NavLink to="/order" className={({ isActive }) => 'nav-link px-0 text-decoration-none' + (isActive ? ' active' : '')}>Order Delivery</NavLink></li>
            <li className='nav-item'><NavLink to="/blog" className={({ isActive }) => 'nav-link px-0 text-decoration-none' + (isActive ? ' active' : '')}>Blog</NavLink></li>
          </ul>
        </Col>
        <Col md={2}>
          <h5 className="fw-semibold text-uppercase mb-3">User Link</h5>
          <ul className="footer-links list-unstyled">
            <li className='nav-item'><NavLink to="/recipe" className={({ isActive }) => 'nav-link px-0 text-decoration-none' + (isActive ? ' active' : '')}>Recipe</NavLink></li>
            <li className='nav-item'><NavLink to="/shop" className={({ isActive }) => 'nav-link px-0 text-decoration-none' + (isActive ? ' active' : '')}>Shop</NavLink></li>
            <li className='nav-item'><NavLink to="/contact" className={({ isActive }) => 'nav-link px-0 text-decoration-none' + (isActive ? ' active' : '')}>Contact Us</NavLink></li>
            <li className='nav-item'><NavLink to="/payment" className={({ isActive }) => 'nav-link px-0 text-decoration-none' + (isActive ? ' active' : '')}>Payment & Tax</NavLink></li>
            <li className='nav-item'><NavLink to="/terms" className={({ isActive }) => 'nav-link px-0 text-decoration-none' + (isActive ? ' active' : '')}>Terms of Services</NavLink></li>
          </ul>
        </Col>
        <Col md={3}>
          <h5 className="fw-semibold text-uppercase mb-3">Contact Us</h5>
          <Nav className="footer-contact flex-column mb-3">
            <p className='mb-0'>543 Country Club Ave, <br /> NC 27587, London, UK</p>
            <li className='d-block'>
              <Nav.Link as={NavLink} to="tel:+1257 6541120" className='footer-desc text-decoration-underline text-primary px-0'>+1257 6541120</Nav.Link>
            </li>
          </Nav>
          <Nav className="footer-social d-flex gap-3 mb-3">
            <Nav.Link to="/" className='rounded-circle d-flex align-items-center justify-content-center'><FaFacebookF /></Nav.Link>
            <Nav.Link to="/" className='rounded-circle d-flex align-items-center justify-content-center'><FaTwitter /></Nav.Link>
            <Nav.Link to="/" className='rounded-circle d-flex align-items-center justify-content-center'><FaInstagram /></Nav.Link>
            <Nav.Link to="/" className='rounded-circle d-flex align-items-center justify-content-center'><FaLinkedinIn /></Nav.Link>
          </Nav>
        </Col>
      </Row>
      <hr className="my-4"/>
      <Row className="align-items-center">
        <Col md={6} className="footer-desc text-center text-md-start">©2025 ARR, All right reserved</Col>
        <Col md={6} className="text-center text-md-end">
         <ul className="footer-links list-unstyled">
            <li className='nav-item'><NavLink to="/Privacy" className={({ isActive }) => 'nav-link px-0 text-decoration-none' + (isActive ? ' active' : '')}>Privacy Policy</NavLink></li>
            <li className='nav-item'><NavLink to="/termscondition" className={({ isActive }) => 'nav-link px-0 text-decoration-none' + (isActive ? ' active' : '')}>Terms of Use</NavLink></li>
         </ul>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer; 