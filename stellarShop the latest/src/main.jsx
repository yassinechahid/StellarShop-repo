import React from "react";
import ReactDOM from "react-dom/client"; // Correct import for React 18
import App from "./App";
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./redux/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
