import React from 'react';
import PageTitle from '../component/PageTitle';
import Title from '../component/Title';
import Footer from '../component/Footer';

const Privacy = () => {
  return (
    <>
      <Title title="Card" />
      <PageTitle 
        title="Card" 
        subtitle="Latest news, recipes, and stories from our kitchen"
      />
      <div className="container py-5">
        <p>Privacy here</p>
      </div>
      <Footer />
    </>
  );
};

export default Privacy; 