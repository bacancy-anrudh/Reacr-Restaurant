import React, { useEffect } from 'react';

const Title = ({ title }) => {
  useEffect(() => {
    // Set the title immediately
    document.title = `${title} | Restaurant Name`;
    
    // Cleanup function to reset title when component unmounts
    return () => {
      document.title = 'Restaurant Name';
    };
  }, [title]);

  // Return null since this is a utility component
  return null;
};

export default Title; 