import React from 'react';
import './HorizontalContentImages.css';
import { Row } from 'react-bootstrap';
import angleRight from '../../assets/angle-right.svg';

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
  className = 'gx-0 gy-4 mt-5',
}) => {
  return (
    <Row className={`${className}`}>
      <div className={`col-lg-6 d-flex align-items-center py-4 py-xl-5 ${reverse ? 'order-lg-2 ps-lg-5' : 'order-lg-1 pe-lg-5'}`}>
        <div className="section-content text-white">
          <h2 className="title-category">
            {subtitle}
            <span className="title-underline bg-primary-hover"></span>
          </h2>
          <h3 className='title'>{title}</h3>
          <p className="section-description">{description}</p>
          {buttonText && (
            <a href={buttonLink} className="btn btn-primary rounded-pill px-4 py-2 banner-btn-arrow">
              {buttonText}
              <img 
                src={angleRight} 
                alt="Right Arrow" 
                className="arrow-img ms-2"
              />
            </a>
          )}
        </div>
      </div>
      <div className={`col-lg-6 ${reverse ? 'order-lg-1' : 'order-lg-2'}`}>
        <div className="section-image h-100">
          <img src={imageSrc} alt={imageAlt} className="img-fluid w-100 h-100 object-fit-cover rounded-5" />
        </div>
      </div>
    </Row>
  );
};

export default HorizontalContentImages; 