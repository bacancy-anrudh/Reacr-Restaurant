import React from 'react';
import './HorizontalContentImages.css';
import { Row } from 'react-bootstrap';

const HorizontalContentImages = ({
  title,
  subtitle,
  description,
  buttonText,
  buttonIcon,
  buttonLink,
  imageSrc,
  imageAlt,
  reverse = false,
  className = '',
}) => {
  return (
    <Row className={`${className}`}>
      <div className={`col-md-6 d-flex align-items-center py-4 py-xl-5 ${reverse ? 'order-md-2' : 'order-md-1'}`}>
        <div className="section-content text-white">
          <h2 className="title-category">
            {subtitle}
            <span className="title-underline"></span>
          </h2>
          <h3 className='title'>{title}</h3>
          <p className="section-description">{description}</p>
          {buttonText && (
            <a href={buttonLink} className="btn btn-primary rounded-pill px-4 py-2">
              {buttonText}
              {buttonIcon}
            </a>
          )}
        </div>
      </div>
      <div className={`col-md-6 ${reverse ? 'order-md-1' : 'order-md-2'}`}>
        <div className="section-image h-100">
          <img src={imageSrc} alt={imageAlt} className="img-fluid rounded-4 w-100 h-100 object-fit-cover" />
        </div>
      </div>
    </Row>
  );
};

export default HorizontalContentImages; 