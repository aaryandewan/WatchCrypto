import React from "react";
import { useSelector, useDispatch } from "react-redux";

const buyCake = () => {
  return {
    type: "BUY_CAKE",
  };
};

function HooksCakeContainer() {
  const numOfCakes = useSelector((state) => state.numOfCakes);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of cakes - {numOfCakes}</h2>
      <h3>IT's flavor!</h3>
      <button onClick={() => dispatch(buyCake())}>Buy cake</button>
    </div>
  );
}

export default HooksCakeContainer;
