import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="notfound-page">
      <h3>404 Page</h3>
      <p>Page not found</p>
      <button
        className="error-btn"
        onClick={() => {
          navigate('/');
        }}
      >
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
