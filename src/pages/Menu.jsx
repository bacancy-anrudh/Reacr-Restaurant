import React from 'react';
import PageTitle from '../component/PageTitle';
import Title from '../component/Title';

const Menu = () => {
  return (
    <>
      <Title title="Menu" />
      <PageTitle 
        title="Our Menu" 
        subtitle="Discover our carefully crafted dishes made with the finest ingredients"
      />
      <div className="container py-5">
        <p>Menu content will go here</p>
      </div>
    </>
  );
};

export default Menu; 