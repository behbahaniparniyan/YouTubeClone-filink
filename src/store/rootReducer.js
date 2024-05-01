import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import watchLaterReducer from "./watch/reducer";
import themeModeReducer from "./themeMode/reducer";

const rootReducer = combineReducers({
  // router: connectRouter(history),
  themeMode: themeModeReducer,
  auth: authReducer,
  playlist: watchLaterReducer,
});
export default rootReducer;
