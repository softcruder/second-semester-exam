import React, { useReducer } from 'react';
import './ReducerCounter.css';

const initialState = 0;

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    case 'set':
      return action.payload;
    default:
      return state;
  }
}

const ReducerCounter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState('');

  const handleIncrement = () => {
    dispatch({ type: 'increment' });
  };

  const handleDecrement = () => {
    dispatch({ type: 'decrement' });
  };

  const handleReset = () => {
    dispatch({ type: 'reset' });
  };

  const handleSet = (e) => {
    e.preventDefault();
    dispatch({ type: 'set', payload: +input });
    setInput('');
  };

  return (
    <div className="container">
      <div className="main-card">
        <button
          className="main-btn-d"
          onClick={handleDecrement}
          disabled={state === 0}
        >
          -
        </button>
        <div className="counter">{state}</div>
        <button className="main-btn-i" onClick={handleIncrement}>
          +
        </button>
        <div className="extra-card">
          <button className="extra-btn-re" onClick={handleReset}>
            Reset
          </button>
          <form onSubmit={handleSet}>
            <label htmlFor="set-counter">Set Counter:</label>
            <input
              type="number"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
            <button type="submit">Set Counter</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReducerCounter;
