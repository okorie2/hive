import {
    FORGOT_PASSWORD,
    FORGOT_PASSWORD_ERROR,
    FORGOT_PASSWORD_SUCCESS,
  } from "../../actions/actionTypes";
  
  const initialState = {
    loading: false,
    data: {},
    error: null
  };
  export const forgotPassword = (state = initialState, action) => {
    switch (action.type) {
      case FORGOT_PASSWORD:
        return {
          ...state,
          loading: true,
        };
  
      case FORGOT_PASSWORD_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload,
        };
      case FORGOT_PASSWORD_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  