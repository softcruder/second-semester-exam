import React from 'react';

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <Fragment role="alert" className="error">
      <h2>
        Oops! Something went wrong. <br /> See more details below{' '}
      </h2>
      <p style="red">{error.message}</p>
      <button onClick={resetErrorBoundary}>Go Home</button>
    </Fragment>
  );
};
export default ErrorFallback;
