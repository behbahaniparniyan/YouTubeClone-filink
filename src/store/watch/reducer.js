import { SET_TOKEN } from "./action-types";
import initialState from "./initialState";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        watchLater: action.payload.watchLater,
      };
    default:
      return state;
  }
};

export default rootReducer;
