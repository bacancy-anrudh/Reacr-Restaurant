import React from 'react';
import PageTitle from '../component/PageTitle';
import Title from '../component/Title';
import Footer from '../component/Footer';

const TermsCondition = () => {
  return (
    <>
      <Title title="Card" />
      <PageTitle 
        title="Card" 
        subtitle="Latest news, recipes, and stories from our kitchen"
      />
      <div className="container py-5">
        <p>Terms Condition here</p>
      </div>
      <Footer />
    </>
  );
};

export default TermsCondition; 