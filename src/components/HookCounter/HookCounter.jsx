import { Fragment } from 'react';
import useCounter from './useCounter';

const HookCounter = () => {
  const [count, increment, decrement, reset, set] = useCounter(0, 1);

  return (
    <Fragment className="Counter">
      <button onClick={increment} disabled={count === 0}>
        +
      </button>
      <Fragment> {count} </Fragment>
      <button onClick={decrement} disabled={count === 0}>
        -
      </button>
      <button onClick={reset} disabled={count === 0}>
        Reset
      </button>
      <input type="number" placeholder="Value" value={value} />
      <button onClick={set} Set Count></button>
    </Fragment>
  );
};

export default HookCounter;
