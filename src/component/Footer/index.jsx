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
          <p className="footer-desc mb-4">Lorem ipsum dolor sit amet consectetur. Tristique cursus morbi nibh nec et vulputate. Turpis tortor nisi imperdiet quis accumsan. Ligula netus amet leo ultricies. Neque venenatis magnis amet eget sagittis leo enim.</p>
          <Nav className="footer-social d-flex gap-3 mb-3">
            <Nav.Link to="/" className='rounded-circle d-flex align-items-center justify-content-center'><FaFacebookF /></Nav.Link>
            <Nav.Link to="/" className='rounded-circle d-flex align-items-center justify-content-center'><FaTwitter /></Nav.Link>
            <Nav.Link to="/" className='rounded-circle d-flex align-items-center justify-content-center'><FaInstagram /></Nav.Link>
            <Nav.Link to="/" className='rounded-circle d-flex align-items-center justify-content-center'><FaLinkedinIn /></Nav.Link>
          </Nav>
        </Col>
        <Col md={3}>
          <h5 className="fw-bold mb-3" style={{color: '#fff'}}>Opening Restaurant</h5>
          <div className="footer-opening">
            <p className='section-description mb-0'>Sa - We: 09:00am - 10:00pm</p>
            <p className='section-description mb-0'>Thu - We: 09:00am - 10:00pm</p>
            <p className='section-description mb-0'>Friday Closed</p>
          </div>
        </Col>
        <Col md={2}>
          <h5 className="fw-bold mb-3" style={{color: '#fff'}}>User Link</h5>
          <Nav className="list-unstyled footer-links">
            <Nav.Link as={NavLink} to="/" className='px-0'>About Us</Nav.Link>
            <Nav.Link as={NavLink} to="/" className='px-0'>Contact Us</Nav.Link>
            <Nav.Link as={NavLink} to="/" className='px-0'>Order Delivery</Nav.Link>
            <Nav.Link as={NavLink} to="/" className='px-0'>Payment & Tax</Nav.Link>
            <Nav.Link as={NavLink} to="/" className='px-0'>Terms of Services</Nav.Link>
          </Nav>
        </Col>
        <Col md={3}>
          <h5 className="fw-bold mb-3" style={{color: '#fff'}}>Contact Us</h5>
          <Nav className="footer-contact flex-column mb-3">
            <p className='mb-0'>543 Country Club Ave, <br /> NC 27587, London, UK</p>
            <li className='d-block'>
              <Nav.Link as={NavLink} to="tel:+1257 6541120" className='px-0'>+1257 6541120</Nav.Link>
            </li>
          </Nav>
        </Col>
      </Row>
      <hr className="my-4" style={{borderColor: '#333', opacity: 0.2}} />
      <Row className="align-items-center">
        <Col md={6} className="text-center text-md-start text-secondary small">©2025 ARR, All right reserved</Col>
        <Col md={6} className="text-center text-md-end">
          <a href="/privacy" className="text-secondary small me-3">Privacy Policy</a>
          <a href="/termscondition" className="text-secondary small">Terms of Use</a>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer; 