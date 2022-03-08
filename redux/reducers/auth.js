import { AUTH, AUTH_ERROR, AUTH_SUCCESS } from "../actions/actionTypes";
var authenticated;
if (typeof window !== "undefined") {
  authenticated = JSON.parse(localStorage.getItem("hasBeenAuthenticated"));
}

const initialState = {
  loading: false,
  error: null,
  data: {},
  auth: authenticated ? true : false,
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
        auth: true,
      };
    case AUTH_ERROR:
      return {
        ...state,
        loading: false,
        data: action.payload,
        auth: false,
      };
    default:
      return state;
  }
};
