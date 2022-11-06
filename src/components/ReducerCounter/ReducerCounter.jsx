import React, { useState, useReducer, Fragment } from 'react';
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
          console.log(state, action);
          return { ...state, count: action.payload };
        }
        break;
      case 'count':
        {
          console.log(state, action);
          return { ...state, value: action.payload };
        }
        break;
      default: {
        return state;
      }
    }
  }

  return (
    <Fragment className="App">
      <Fragment className="main-card">
        <button
          className="main-btn-d"
          onClick={() => {
            dispatch({ type: 'decrement' });
            // console.log("here")
          }}
        >
          -
        </button>
        <Fragment className="counter">{state.count}</Fragment>
        <button
          className="main-btn-i"
          onClick={() => {
            dispatch({ type: 'increment' });
            // console.log("here")
          }}
        >
          +
        </button>
        <Fragment className="extra">
          <button
            className="btn"
            onClick={() => {
              dispatch({ type: 'reset', payload: state.value });
            }}
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
        </Fragment>
      </Fragment>
    </Fragment>
  );
};

export default ReducerCounter;
