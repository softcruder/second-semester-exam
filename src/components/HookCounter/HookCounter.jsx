import React from 'react';
import useCounter from './useCounter';

const HookCounter = () => {
  const [count, increment, decrement, reset, set] = useCounter(0, 1);

  return (
    <div className="Counter">
      <button onClick={increment}>+</button>
      <div> {count} </div>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
      <input
        type="number"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button onClick={setValue} Set Count></button>
    </div>
  );
};

export default HookCounter;
