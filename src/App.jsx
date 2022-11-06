import React, { Fragment } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/NotFound';
import HookCounter from './components/HookCounter/HookCounter.jsx';
import ReducerCounter from './components/ReducerCounter';
import NotFound from './components/NotFound';
import Home from './components/Home';
import './style.css';

export default function App() {
  const [count, useCount] = useState(0);
  const navigate = useNavigate();

  return (
    <Fragment className="App">
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          navigate('/');
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="hookcounter" element={<HookCounter />} />
          <Route path="reducercounter" element={<ReducerCounter />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </Fragment>
  );
}
