import React from 'react';
import { Container } from 'react-bootstrap';
import './PageTitle.css';

const PageTitle = ({ title, subtitle, backgroundImage }) => {
  return (
    <div 
      className="page-title-wrapper" 
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      <div className="page-title-overlay">
        <Container>
          <div className="page-title-content">
            <h1 className="display-4 fw-bold text-white mb-3">{title}</h1>
            {subtitle && <p className="lead text-white-50 mb-0">{subtitle}</p>}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default PageTitle; 