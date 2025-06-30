import React from 'react';
import PageTitle from '../component/PageTitle';
import Title from '../component/Title';
import Footer from '../component/Footer';

const SignIn = () => {
  return (
    <>
      <Title title="Sign In" />
      <PageTitle 
        title="Sign In" 
        subtitle="Access your account or create a new one."
      />
      <div className="container py-5">
        <p>Sign in form will go here.</p>
      </div>
      <Footer />
    </>
  );
};

export default SignIn; 