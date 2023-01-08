import React from 'react';

const ErrorFallback = ({ error, resetErrorBoundary }) => {
return (
<div role="alert" className="error">
{/* Displays an error message when an error occurs */}
<h2>
Oops! Something went wrong. <br /> See more details below{' '}
</h2>
<pre style={{ color: red }}>{error.message}</pre>
{/* Button to reset the error boundary and navigate to the home page */}
<button onClick={resetErrorBoundary}>Go Home</button>
</div>
);
};
export default ErrorFallback;