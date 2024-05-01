import * as types from "./action-types";

export const setUsername = (payload) => {
  return {
    type: types.SET_USERNAME,
    payload: payload,
  };
};

export const setEmail = (payload) => {
  return {
    type: types.SET_EMAIL,
    payload: payload,
  };
};
