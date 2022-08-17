import React from "react";
import { useSelector } from "react-redux";

const FirstRedux = () => {
  const count = useSelector((state) => state.counterReducer.value   );
 
  return <div>FirstRedux</div>;
};

export default FirstRedux;
