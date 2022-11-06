import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Fragment className="notfound-page">
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
    </Fragment>
  );
};

export default NotFound;
