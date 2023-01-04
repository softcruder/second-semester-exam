import React, { useState, useEffect } from 'react';
import ErrorFallback from './ErrorFallback';

function MyComponent() {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const onError = (error) => {
      setHasError(true);
      logErrorToMyService(error);
    };

    window.addEventListener('error', onError);

    return () => {
      window.removeEventListener('error', onError);
    };
  }, []);

  if (hasError) {
    return <ErrorFallback />;
  }

  return this.props.children;
}
