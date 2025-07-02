import React from 'react';
import { Container, Breadcrumb } from 'react-bootstrap';
import PageTitle from '../component/PageTitle';
import Title from '../component/Title';
import Footer from '../component/Footer';
const Payment = () => (
  <>
    <section className="section-spacing bg-dark">
      <Container>
        <Breadcrumb className="mb-3">
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Payment & Tax</Breadcrumb.Item>
        </Breadcrumb>
        <h1 className="display-4 text-white fw-bold mb-2">Payment & Tax</h1>
      </Container>
    </section>
    <Footer />
  </>
);

export default Payment; 