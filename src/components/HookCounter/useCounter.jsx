import { useState } from 'react';

function useCounter(initialCount = 0, value) {
  const [count, setCount] = useState(initialCount);
  //const [value, setValue] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + value);
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - value);
  };
  const reset = () => {
    setCount(initialCount);
  };
  const set = () => {
    setCount(input.value);
  };
  return [count, increment, decrement, reset, set];
}

export default useCounter;
