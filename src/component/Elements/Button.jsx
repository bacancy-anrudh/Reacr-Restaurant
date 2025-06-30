import React from "react";
import { Button } from "react-bootstrap";
import angleRight from '../../assets/angle-right.svg';

const ButtonComponent = ({ variant, size, className, children, ...props }) => {
  return (
    <Button
      variant={variant}
      size={size}
      className={`btn ${className} banner-btn-arrow`}
      {...props}
    >
      {children}
      {children && (
        <img 
          src={angleRight} 
          alt="Right Arrow" 
          className="arrow-img ms-2"
        />
      )}
    </Button>
  );
}
export default ButtonComponent;