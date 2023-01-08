import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  // Hook to navigate to the home page
  const navigate = useNavigate();
  return (
    <div className="error-page">
      {/* Page to display when a page is not found */}
      <div className="error-container">
        <h3>404 Page</h3>
        <p>Page not found</p>
        {/* Button to navigate to the home page */}
        <button
          className="error-btn"
          onClick={() => {
            navigate('/');
          }}
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
