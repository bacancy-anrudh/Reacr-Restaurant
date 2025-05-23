import React from 'react';
import PageTitle from '../component/PageTitle';
import Title from '../component/Title';

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
    </>
  );
};

export default Blog; 