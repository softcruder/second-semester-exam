import React from 'react';

function ErrorThrowingComponent() {
  throw new Error('This is a test error');
  return null;
}

function ErrorBoundaryComponent() {
  return (
    <ErrorBoundary>
      <ErrorThrowingComponent />
    </ErrorBoundary>
  );
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="max-w-sm mx-auto p-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Error</h1>
          <p className="text-xl mb-4">
            An error occurred while rendering the component.
          </p>
          <p className="text-lg">
            <button
              aria-label="reset"
              onClick={this.props.onReset}
              className="px-4 py-2 rounded-lg bg-gray-400"
            >
              Reset
            </button>
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundaryComponent;