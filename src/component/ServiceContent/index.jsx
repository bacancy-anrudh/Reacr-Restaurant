import React from 'react';
import './ServiceContent.css';
import { Row } from 'react-bootstrap';

const ServiceContent = ({
  title,
  description,
  className = '',
}) => {
  return (
      <div className="border-gradient rounded-5 text-white text-center px-3 px-lg-4 py-4 py-lg-5">
        <h3 className='fw-bold mb-3'>{title}</h3>
        <p className="section-description mb-0">{description}</p>
      </div>
  );
};

export default ServiceContent; 