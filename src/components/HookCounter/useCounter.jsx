import { useState } from 'react';

function useCounter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function setValue(value) {
    setCount(value);
  }

  function reset() {
    setCount(0);
  }

  return { count, increment, decrement, setValue, reset };
}

export default useCounter;
