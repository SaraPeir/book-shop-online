import { GET_LOADING, GET_ERROR, GET_DATA } from "../types";

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_DATA:
      return {
        ...state,
        ...payload,
      };
    case GET_ERROR:
      return {
        ...state,
        ...payload,
      };
      case GET_LOADING:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};