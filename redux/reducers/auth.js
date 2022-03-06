import { AUTH, AUTH_ERROR, AUTH_SUCCESS } from "../actions/actionTypes";

const initialState = {
  loading: false,
  error: null,
  data: [],
};
export const auth = (state = initialState, action) => {
  switch (action.type) {
    case AUTH:
      return {
        ...state,
        loading: true,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case AUTH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
