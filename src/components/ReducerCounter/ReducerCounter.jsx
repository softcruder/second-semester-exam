import React, { useState, useReducer, div } from 'react';
import './ReducerCounter.css';

const ReducerCounter = () => {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, { count: 0, value: 0 });

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
          return state.count === 0;
        }
        break;
      case 'setValue':
        {
          return { ...state, count: action.payload };
        }
        break;
      case 'count':
        {
          return { ...state, value: action.payload };
        }
        break;
      default: {
        return state;
      }
    }
  }

  return (
    <>
      <div className="container">
        <div className="main-card">
          <button
            className="main-btn-d"
            onClick={() => {
              dispatch({ type: 'decrement' });
            }}
            disabled={count === 0}
          >
            -
          </button>
          <div className="counter">{state.count}</div>
          <button
            className="main-btn-i"
            onClick={() => {
              dispatch({ type: 'increment' });
            }}
            disabled={count === 0}
          >
            +
          </button>
          <div className="extra">
            <button
              className="btn"
              onClick={() => {
                dispatch({ type: 'reset', payload: state.value });
              }}
              disabled={count === 0}
            >
              Reset
            </button>
            <input
              type="number"
              value={state.value}
              onChange={(e) => {
                // console.log(e.target.value);
                dispatch({ type: 'count', payload: e.target.value });
              }}
            />
            <button
              className="btn"
              onClick={() => {
                dispatch({ type: 'setValue', payload: +value });
              }}
            >
              Set Counter
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReducerCounter;
