import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Banner.css';

const Banner = ({ 
  title, 
  subtitle, 
  image, 
  buttonText, 
  buttonLink, 
  variant = 'primary',
  align = 'left',
  overlay = true,
  height = 'medium',
  className = ''
}) => {
  const bannerStyle = {
    backgroundImage: image ? `url(${image})` : 'none',
    textAlign: align
  };

  return (
    <div className={`banner-wrapper rounded-4 ${height} ${variant} ${className}`} style={bannerStyle}>
      {overlay && <div className="banner-overlay" />}
        <div className={`${align === 'center' ? 'mx-auto' : 'col-12 d-flex flex-column justify-content-between h-100'}`}>
            <div className="banner-content">
                {title && <h2 className="banner-title">{title}</h2>}
                {subtitle && <p className="banner-subtitle">{subtitle}</p>}
            </div>
            <div className="banner-content">
                {buttonText && (
                    <Button
                        href={buttonLink} 
                        variant={variant === 'primary' ? 'dark' : 'primary'}
                        className='rounded-pill px-3 px-lg-4'
                    >
                        {buttonText}
                    </Button>
                )}
            </div>
        </div>
    </div>
  );
};

export default Banner; 