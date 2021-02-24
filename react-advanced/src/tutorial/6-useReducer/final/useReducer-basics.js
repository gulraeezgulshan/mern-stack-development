import React, { useState, useReducer } from "react";

const UseReducerBasics = () => {
  const initialState = {
    counter1: 0,
    counter2: 0,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "inc1":
        return { ...state, counter1: state.counter1 + action.payload };
      case "inc2":
        return { ...state, counter2: state.counter2 + action.payload };
      case "dec1":
        return { ...state, counter1: state.counter1 - action.payload };
      case "dec2":
        return { ...state, counter2: state.counter2 - action.payload };
      case "res1":
      case "res2":
        return initialState;

      default:
        return state;
    }
  };

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>Use Reducer Basics</h1>
      <h3>{count.counter1}</h3>
      <button onClick={() => dispatch({ type: "inc1", payload: 2 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "dec1", payload: 2 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "res1", payload: 2 })}>
        Reset
      </button>

      <br />

      <h3>{count.counter2}</h3>
      <button onClick={() => dispatch({ type: "inc2", value: 2 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "dec2", value: 2 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "res2", value: 2 })}>
        Reset
      </button>
    </>
  );
};

export default UseReducerBasics;
