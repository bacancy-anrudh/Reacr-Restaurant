import React from 'react';
import { Container, Breadcrumb } from 'react-bootstrap';
import Footer from '../component/Footer';

const Privacy = () => (
  <>
    <section className="section-spacing bg-dark">
      <Container>
        <Breadcrumb className="mb-3">
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Privacy Policy</Breadcrumb.Item>
        </Breadcrumb>
        <h1 className="display-4 text-white fw-bold mb-2">Privacy Policy</h1>
      </Container>
    </section>
    <Footer />
  </>
);

export default Privacy; 