import React, { useReducer } from 'react';
import useCounter from '../HookCounter/useCounter';

function ReducerCounter() {
  const { count, increment, decrement, setValue, reset } = useCounter();

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="text-3xl font-bold">{count}</div>
      <div className="flex space-x-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={decrement}
        >
          Decrement
        </button>
      </div>
      <div className="flex space-x-4">
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-48 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          type="number"
          value={count}
          onChange={(event) => setValue(event.target.value)}
        />
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={(event) => setValue(event.target.value)}
        >
          Set
        </button>
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default ReducerCounter;
