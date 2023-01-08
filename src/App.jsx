import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import Navbar from './components/Navbar/Navbar';
import ErrorFallback from './components/NotFound/ErrorFallback';
import HookCounter from './components/HookCounter/HookCounter';
import ReducerCounter from './components/ReducerCounter/ReducerCounter';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import './style.css';

/**
 * The root component for the application, which sets up the router
 * and error handling.
 */

function App() {
  // Get the `useNavigate` hook from `react-router-dom` for use in
  // the error boundary reset handler
  const navigate = useNavigate();

  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    document.body.className = darkTheme ? 'dark-theme' : 'light-theme';
  }, [darkTheme]);

  return (
    <>
      {/*
        Use the `ErrorBoundary` component from `react-error-boundary` to
        catch any errors that occur within the `Routes` component.
        If an error occurs, the `ErrorFallback` component will be displayed.
      */}
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          navigate('/');
        }}
      >
        <div className="toggle-container">
          <label htmlFor="theme-toggle">Toggle Theme</label>
          <input
            id="theme-toggle"
            type="checkbox"
            checked={darkTheme}
            onChange={() => setDarkTheme(!darkTheme)}
          />
        </div>
        <Navbar />
        <Routes>
          {/* Define the routes for the application */}
          <Route path="/" element={<Home />} />
          <Route path="custom" element={<HookCounter />} />
          <Route path="reducer" element={<ReducerCounter />} />
          {/*
            Use the `NotFound` component as the fallback for all
            routes that don't match any of the other routes.
          */}
          <Route path="not-found" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </>
  );
}

export default App;
