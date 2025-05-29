import React from 'react';
import './ServiceContent.css';
import { Row } from 'react-bootstrap';

const ServiceContent = ({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  className = '',
}) => {
  return (
    <Row className={`${className}`}>
      <div className='col-lg-4'>
        <div className="section-content text-white text-center">
          <img src={imageSrc} alt={imageAlt} className="img-fluid rounded-4 w-100 h-100 object-fit-cover" />
          <h2 className="title-category">
            {subtitle}
          </h2>
          <h3 className='title'>{title}</h3>
          <p className="section-description">{description}</p>
        </div>
      </div>
    </Row>
  );
};

export default ServiceContent; 