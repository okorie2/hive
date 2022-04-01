import {
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} from "../../actions/actionTypes";

REGISTER;
var registered;
if (typeof window !== "undefined") {
  registered = JSON.parse(localStorage.getItem("hasBeenAuthenticated"));
}

const initialState = {
  loading: false,
  error: null,
  data: {},
  register: registered ? true : false,
};
export const register = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        register: true,
      };
    case REGISTER_ERROR:
      return {
        ...state,
        loading: false,
        data: action.payload,
        register: false,
      };
    default:
      return state;
  }
};
