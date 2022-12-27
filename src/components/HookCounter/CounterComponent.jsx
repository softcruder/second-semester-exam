import React from 'react';
import { useCounter } from './useCounter';

function CounterComponent() {
  const { count, increment, decrement, reset, setValue } = useCounter();

  return (
    <div className="flex justify-between items-center">
      <button
        aria-label="increment"
        className="px-4 py-2 rounded-lg bg-blue-500 text-white"
        onClick={increment}
      >
        +
      </button>
      <button
        aria-label="decrement"
        className="px-4 py-2 rounded-lg bg-blue-500 text-white"
        onClick={decrement}
      >
        -
      </button>
      <button
        aria-label="reset"
        className="px-4 py-2 rounded-lg bg-gray-400"
        onClick={reset}
      >
        Reset
      </button>
      <label className="block mb-2 text-sm font-bold text-gray-700">
        Set value:
        <input
          aria-label="set value"
          className="px-4 py-2 rounded-lg bg-gray-200"
          type="text"
          onChange={(e) => setValue(e.target.value)}
        />
      </label>
      <p className="px-4 py-2 rounded-lg bg-gray-200">Count: {count}</p>
    </div>
  );
}
export default CounterComponent;
