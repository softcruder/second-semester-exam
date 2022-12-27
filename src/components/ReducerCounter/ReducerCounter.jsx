import { useReducer } from 'react';
import CounterComponent from '../HookCounter/CounterComponent'

function ReducerCounter(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    case 'setValue':
      return { count: action.value };
    default:
      throw new Error();
  }
}

function CounterComponent() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  function increment() {
    dispatch({ type: 'increment' });
  }

  function decrement() {
    dispatch({ type: 'decrement' });
  }

  function reset() {
    dispatch({ type: 'reset' });
  }
  
  function setValue(value) {
    dispatch({ type: 'setValue', value });
  }
  
  return (
    <div className="flex justify-between items-center">
      <button className="px-4 py-2 rounded-lg bg-blue-500 text-white" onClick={increment}>+</button>
      <button className="px-4 py-2 rounded-lg bg-blue-500 text-white" onClick={decrement}>-</button>
      <button className="px-4 py-2 rounded-lg bg-gray-400" onClick={reset}>Reset</button>
      <input className="px-4 py-2 rounded-lg bg-gray-200" type="text" onChange={e => setValue(e.target.value)} />
      <p className="px-4 py-2 rounded-lg bg-gray-200">Count: {state.count}</p>
    </div>
  );
  }
  
export default ReducerCounter;