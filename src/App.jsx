import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/NotFound/ErrorFallback';
import HookCounter from './components/HookCounter/HookCounter';
import ReducerCounter from './components/ReducerCounter/ReducerCounter';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import './style.css';

export default function App() {
  //const [count, useCount] = useState(0);
  const navigate = useNavigate();

  return (
    <>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          navigate('/');
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/custom" element={<HookCounter />} />
          <Route path="/reducer" element={<ReducerCounter />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </>
  );
}
