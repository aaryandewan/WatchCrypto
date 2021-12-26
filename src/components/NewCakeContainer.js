import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const buyCake = (num = 1) => {
  return {
    type: "BUY_CAKE",
    payload: num,
  };
};

function HooksCakeContainer() {
  const [number, setNumer] = useState(1);

  const numOfCakes = useSelector((state) => state.numOfCakes);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of cakes - {numOfCakes}</h2>
      <h3>IT's flavor!</h3>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumer(e.target.value)}
      ></input>
      <button onClick={() => dispatch(buyCake(number))}>Buy cake</button>
    </div>
  );
}

export default HooksCakeContainer;
