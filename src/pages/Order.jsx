import React from 'react';
import PageTitle from '../component/PageTitle';
import Title from '../component/Title';
import Footer from '../component/Footer';

const Order = () => {
  return (
    <>
      <Title title="Order" />
      <PageTitle 
        title="Place Your Order" 
        subtitle="Order your favorite dishes online and enjoy them at home"
      />
      <div className="container py-5">
        <p>Order form will go here</p>
      </div>
      <Footer />
    </>
  );
};

export default Order; 