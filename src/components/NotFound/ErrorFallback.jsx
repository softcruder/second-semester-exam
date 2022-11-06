import React from 'react';

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert" className="error">
      <h2>
        Oops! Something went wrong. <br /> See more details below{' '}
      </h2>
      <pre style={{ color: red }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Go Home</button>
    </div>
  );
};
export default ErrorFallback;
