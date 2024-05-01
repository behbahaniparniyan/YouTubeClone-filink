import * as types from "./action-types";

export const setMode = (payload) => {
  return {
    type: types.SET_MODE,
    payload: payload,
  };
};
