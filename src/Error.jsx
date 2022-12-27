import React, { ErrorInfo } from 'react';
import ErrorFallback from './components/NotFound/ErrorFallback';

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center space-y-4">
          <div className="text-3xl font-bold text-red-500">Error</div>
          <div className="text-xl">An error has occurred.</div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
