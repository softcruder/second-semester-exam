import React from 'react';
import useCounter from './useCounter';

/**
 * A component that displays a counter and provides buttons to increment,
 * decrement, reset, and set the value of the counter.
 *
 * This component uses the custom `useCounter` hook to manage the state
 * of the counter.
 */
function HookCounter() {
  // Use the `useCounter` hook to get the current count value and the
  // four functions we need to update the count
  const [count, increment, decrement, reset, set] = useCounter();

  // Handle the "set" button click by getting the value from the input
  // field and calling the `set` function with that value
  const handleSetClick = () => {
    const input = document.getElementById('set-input');
    set(input.value);
  };

  return (
    <div>
      <h2>Hook Counter</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <br />
      <input id="set-input" type="text" />
      <button onClick={handleSetClick}>Set</button>
    </div>
  );
}

export default HookCounter;