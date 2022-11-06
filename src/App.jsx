import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import Navbar from './components/Navbar/Navbar';
import ErrorFallback from './components/NotFound/ErrorFallback';
import HookCounter from './components/HookCounter/HookCounter';
import ReducerCounter from './components/ReducerCounter/ReducerCounter';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import Error from './Error';
import './style.css';

function App() {
  const navigate = useNavigate();

  return (
    <>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          navigate('/');
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="custom" element={<HookCounter />} />
          <Route path="reducer" element={<ReducerCounter />} />
          <Route path="error" element={<NotFound />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </ErrorBoundary>
    </>
  );
}

export default App;
