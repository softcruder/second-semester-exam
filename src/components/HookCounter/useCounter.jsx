import { useState } from 'react';

function useCounter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  function setValue(value) {
    setCount(value);
  }

  return { count, increment, decrement, reset, setValue };
}

export default useCounter;
