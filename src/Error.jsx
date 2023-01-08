import React, { useState, useEffect } from 'react';
import ErrorFallback from './ErrorFallback';

// Custom error boundary component to handle errors in the application
function ErrorBoundary(props) {
  // State to track if an error has occurred
  const [hasError, setHasError] = useState(false);

  // Use effect hook to add a global error event listener
  useEffect(() => {
    const onError = (error) => {
      // Set state to true to show the fallback UI
      setHasError(true);
      // Log the error to an error tracking service
      logErrorToMyService(error);
    };

    // Add global error event listener
    window.addEventListener('error', onError);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('error', onError);
    };
  }, []);

  // If an error has occurred, show the fallback UI
  if (hasError) {
    return <ErrorFallback />;
  }

  // Otherwise, render the children components
  return props.children;
}
