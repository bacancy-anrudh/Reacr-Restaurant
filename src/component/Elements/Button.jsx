import React from "react";
import { Button } from "react-bootstrap";
const ButtonComponent = ({ variant, size, className, children, ...props }) => {
  return (
    <Button
      variant={variant}
      size={size}
      className={`btn ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
}
export default ButtonComponent;