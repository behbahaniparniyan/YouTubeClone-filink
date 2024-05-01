import { SET_TOKEN } from "./action-types";

export const watch = (payload) => {
  return {
    type: SET_TOKEN,
    payload: payload,
  };
};
