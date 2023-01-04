import { useState } from 'react';

/**
 * Custom hook that implements a counter with the following features:
 *  - Increment: increases the count by a specified value
 *  - Decrement: decreases the count by a specified value
 *  - Reset: sets the count to its initial value
 *  - Set: sets the count to a specified value
 *
 * @param {number} initialCount - The initial count value (default: 0)
 * @param {number} value - The increment/decrement value (default: 1)
 * @return {array} An array containing the count value, and the four functions
 */
function useCounter(initialCount = 0, value = 1) {
  const [count, setCount] = useState(initialCount);

  /**
   * Increments the count by the specified value
   */
  const increment = () => {
    setCount((prevCount) => prevCount + value);
  };

  /**
   * Decrements the count by the specified value
   */
  const decrement = () => {
    setCount((prevCount) => prevCount - value);
  };

  /**
   * Resets the count to its initial value
   */
  const reset = () => {
    setCount(initialCount);
  };

  /**
   * Sets the count to the specified value
   *
   * @param {number} inputValue - The value to set the count to
   */
  const set = (inputValue) => {
    const value = Number(inputValue);
    if (isNaN(value)) {
      // Value is not a number, do nothing
      return;
    }
    setCount(value);
  };

  return [count, increment, decrement, reset, set];
}

export default useCounter;

