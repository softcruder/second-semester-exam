import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="error-page">
      <div className="max-w-sm mx-auto p-4 text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl mb-4">The requested page was not found.</p>
        <p className="text-lg">
          <a href="/" aria-label="go back to homepage" className="underline text-blue-500">Go back to the homepage</a>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
