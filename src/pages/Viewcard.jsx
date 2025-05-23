import React from 'react';
import PageTitle from '../component/PageTitle';
import Title from '../component/Title';

const ViewCard = () => {
  return (
    <>
      <Title title="Card" />
      <PageTitle 
        title="Card" 
        subtitle="Latest news, recipes, and stories from our kitchen"
      />
      <div className="container py-5">
        <p>Blog posts will be displayed here</p>
      </div>
    </>
  );
};

export default ViewCard; 