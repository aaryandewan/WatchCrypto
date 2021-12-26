import React from "react";
import { connect } from "react-redux";

function cakeContainer(props) {
  return (
    <div>
      <h2>Number of cakes - {props.qqq}</h2>
      <h3>IT's {props.aaa} flavor!</h3>
      <button onClick={props.zzz}>Buy cake</button>
    </div>
  );
}

export const buyCake = () => {
  return {
    type: "BUY_CAKE",
  };
};

//step 1
const mapStateToProps = (state) => {
  return {
    qqq: state.numOfCakes,
    aaa: state.flavor,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    zzz: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(cakeContainer);
