import React from 'react';
import { Container, Breadcrumb } from 'react-bootstrap';
import PageTitle from '../component/PageTitle';
import Title from '../component/Title';
import Footer from '../component/Footer';

const ViewCard = () => {
  return (
    <>
      <section className="section-spacing bg-dark">
        <Container>
          <Breadcrumb className="mb-3">
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>View Card</Breadcrumb.Item>
          </Breadcrumb>
          <h1 className="display-4 text-white fw-bold mb-2">View Card</h1>
        </Container>
      </section>
      <Title title="Card" />
      <PageTitle 
        title="Card" 
        subtitle="Latest news, recipes, and stories from our kitchen"
      />
      <div className="container py-5">
        <p>Blog posts will be displayed here</p>
      </div>
      <Footer />
    </>
  );
};

export default ViewCard; 