import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="error-page">
      <div className="flex flex-col items-center space-y-4">
        <div className="text-3xl font-bold text-red-500">Error 404</div>
        <div className="text-xl">
          The page you are looking for could not be found.
        </div>
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
