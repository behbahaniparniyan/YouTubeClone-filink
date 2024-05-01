import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import store, { Persistor } from "./store/store";
import App from "./views/APP";
import ThemeModeProvider from "./context/themeMode";

import "./index.css";

const AppProvided = () => {
  return (
    <Provider store={store}>
      <ThemeModeProvider>
        <PersistGate loading={null} persistor={Persistor}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PersistGate>
      </ThemeModeProvider>
    </Provider>
  );
};

ReactDOM.render(<AppProvided />, document.getElementById("root"));
