import {
  SIGNIN,
  SIGNIN_ERROR,
  SIGNIN_SUCCESS,
} from "../../actions/actionTypes";

const initialState = {
  loading: false,
  data: {},
  error: null,
};

export const signin = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN:
      return {
        ...state,
        loading: true,
      };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case SIGNIN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
