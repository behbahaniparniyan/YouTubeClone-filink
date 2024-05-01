import * as types from "./action-types";
import initialState from "./initialState";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_MODE:
      return {
        ...state,
        light: action.payload.light,
      };
    default:
      return state;
  }
};

export default rootReducer;
