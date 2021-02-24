import React, { useReducer } from "react";

const UserReducerBasics = () => {
  const initialState = {
    firstCounter: 0,
  };

  const reducer = (currentState, action) => {
    switch (action.type) {
      case "increment":
        return { firstCounter: currentState.firstCounter + action.value };
      case "decrement":
        return { firstCounter: currentState.firstCounter - action.value };
      case "reset":
        return initialState;
      default:
        return currentState;
    }
  };

  const [currentState, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>Use Reducers</h1>
      <div>{currentState.firstCounter}</div>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
};

export default UserReducerBasics;
