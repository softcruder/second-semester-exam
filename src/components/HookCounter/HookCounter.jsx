import { Fragment } from 'react';
import useCounter from './useCounter';

const HookCounter = () => {
  const [count, increment, decrement, reset, set] = useCounter(0, 1);

  return (
    <Fragment className="Counter">
      <button onClick={increment}>+</button>
      <Fragment> {count} </Fragment>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
      <input type="number" placeholder="Value" value={value} />
      <button onClick={set} Set Count></button>
    </Fragment>
  );
};

export default HookCounter;
