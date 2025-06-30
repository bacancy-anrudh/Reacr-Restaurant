import React from 'react';
import PageTitle from '../component/PageTitle';
import Title from '../component/Title';
import Footer from '../component/Footer';

const Contact = () => {
  return (
    <>
      <Title title="Contact" />
      <PageTitle 
        title="Contact Us" 
        subtitle="Browse our selection of premium ingredients and cooking essentials"
      />
      <div className="container py-5">
        <p>Contact will be displayed here</p>
      </div>
      <Footer />
    </>
  );
};

export default Contact; 