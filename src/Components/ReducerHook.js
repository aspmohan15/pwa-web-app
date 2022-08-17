import React, { useReducer } from "react";
import { Button } from "react-bootstrap";

const reducer = (state, action) => {
  switch (action.type) {
    case "clickOne":
      return { ...state, count: state.count + 1 };
    case "clickTwo":
      return { ...state, count: state.count + 2 };
    case "clickThree":
      return { ...state, count: state.count + 3 };
    default:
      return state;
  }
};

export const ReducerHook = () => {
  const [sate, dispatch] = useReducer(reducer, { count: 0 });
  const clickHandlerOne = () => {
    dispatch({ type: "clickOne" });
  };
  const clickHandlerTwo = () => {
    dispatch({ type: "clickTwo" });
  };
  const clickHandlerThree = () => {
    dispatch({ type: "clickThree" });
  };
  return (
    <div>
      <Button onClick={clickHandlerOne}>One</Button>
      <Button onClick={clickHandlerTwo}>Two</Button>
      <Button onClick={clickHandlerThree}>Three</Button>

      <h1>{sate.count}</h1>
    </div>
  );
};
