import React from 'react';
import PageTitle from '../component/PageTitle';
import Title from '../component/Title';

const Recipe = () => {
  return (
    <>
      <Title title="Recipes" />
      <PageTitle 
        title="Our Recipes" 
        subtitle="Learn to cook our signature dishes with our chef's recipes"
      />
      <div className="container py-5">
        <p>Recipe content will go here</p>
      </div>
    </>
  );
};

export default Recipe; 