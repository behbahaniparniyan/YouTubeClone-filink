import * as types from "./action-types";
import initialState from "./initialState";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USERNAME:
      return {
        ...state,
        username: action.payload.username,
      };
    case types.SET_EMAIL:
      return {
        ...state,
        email: action.payload.email,
      };
    default:
      return state;
  }
};

export default rootReducer;
