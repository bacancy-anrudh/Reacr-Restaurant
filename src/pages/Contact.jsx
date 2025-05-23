import React from 'react';
import PageTitle from '../component/PageTitle';
import Title from '../component/Title';

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
    </>
  );
};

export default Contact; 