import React from "react";
import store from "./redux/store";

import { Provider } from "react-redux";

import HooksCakeContainer from "./components/HooksCakeContainer";
import CakeContainer from "./components/cakeContainer";
import NewCakeContainer from "./components/NewCakeContainer";

function App() {
  return (
    <Provider store={store}>
      <div>
        {/* <HooksCakeContainer /> */}
        <NewCakeContainer />
        {/* <CakeContainer /> */}
      </div>
    </Provider>
  );
}

export default App;
