import { createStore } from "redux";

//No need of this, we will use the function directly in the cakeContainer component
// const buyCake = () => {
//   return {
//     type: "BUY_CAKE",
//   };
// };

const initialState = {
  numOfCakes: 10,
  flavor: "chocolate",
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BUY_CAKE":
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };
    default:
      return state;
  }
};
const store = createStore(cakeReducer);

export default store;
