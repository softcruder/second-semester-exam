import React, { useState, useReducer, div } from 'react';
import './ReducerCounter.css';

const ReducerCounter = () => {
  const [value, setValue] = useState(0);
  const [state, dispatch] = useReducer(reducer, 0);

  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        {
          return state + 1;
        }
        break;
      case 'decrement':
        {
          return state - 1;
        }
        break;
      case 'reset':
        {
          return (state = 0);
        }
        break;
      case 'set':
        {
          return (state = action.payload);
        }
        break;
      default: {
        return state;
      }
    }
  }

  const handleIncrement = (e) => {
    e.preventDefault();
    dispatch({ type: 'increment' });
  };

  const handleDecreament = (e) => {
    e.preventDefault();
    dispatch({ type: 'decrement' });
  };

  const handleReset = (e) => {
    e.preventDefault();
    dispatch({ type: 'reset' });
  };

  const handleSet = () => {
    dispatch({ type: 'set', payload: +value });
    setValue(0);
  };

  return (
    <>
      <div className="container">
        <div className="main-card">
          <button
            className="main-btn-d"
            onClick={handleDecreament}
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
            <input
              type="number"
              value={state.value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
            <button className="extra-btn-se" onClick={handleSet}>
              Set Counter
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReducerCounter;
