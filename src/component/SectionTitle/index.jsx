import React from 'react';
import './SectionTitle.css';
import { Row } from 'react-bootstrap';

const SectionTitle = ({
  title,
  subtitle,
  description,
}) => {
  return (
    <div className="text-center">
      <h2 className="title-category">
        {subtitle}
        <span className="title-underline bg-primary-hover start-50 translate-middle"></span>
      </h2>
      <h3 className='title'>{title}</h3>
      <p className="section-description">{description}</p>
    </div>
  );
};

export default SectionTitle; 