import React from 'react';
import PageTitle from '../component/PageTitle';
import Title from '../component/Title';

const Shop = () => {
  return (
    <>
      <Title title="Shop" />
      <PageTitle 
        title="Our Shop" 
        subtitle="Browse our selection of premium ingredients and cooking essentials"
      />
      <div className="container py-5">
        <p>Shop products will be displayed here</p>
      </div>
    </>
  );
};

export default Shop; 