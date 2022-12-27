import React from 'react';
import CounterComponent from './CounterComponent';

function HookCounter() {
  return (
    <div className="max-w-sm mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Counter</h1>
      <CounterComponent />
    </div>
  );
}

export default HookCounter;
