import React from 'react';
import PageTitle from '../component/PageTitle';
import Title from '../component/Title';
import Footer from '../component/Footer';

const Blog = () => {
  return (
    <>
      <Title title="Blog" />
      <PageTitle 
        title="Our Blog" 
        subtitle="Latest news, recipes, and stories from our kitchen"
      />
      <div className="container py-5">
        <p>Blog posts will be displayed here</p>
      </div>
      <Footer />
    </>
  );
};

export default Blog; 