import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducer";
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

const persistConfig = {
  key: "main-root",
  storage,
  // whitelist: ["playlist"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  // composeWithDevTools(applyMiddleware(...middleware))
  // applyMiddleware()
  composeWithDevTools(applyMiddleware(routerMiddleware(history), thunk))
);

const Persistor = persistStore(store);

export { Persistor };
export default store;
