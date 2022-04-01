import {
  CONFIRM_MAIL,
  CONFIRM_MAIL_ERROR,
  CONFIRM_MAIL_SUCCESS,
} from "../../actions/actionTypes";

const initialState = {
  loading: false,
  data: {},
};
export const confirmMail = (state = initialState, action) => {
  switch (action.type) {
    case CONFIRM_MAIL:
      return {
        ...state,
        loading: true,
      };

    case CONFIRM_MAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case CONFIRM_MAIL_ERROR:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    default:
      return state;
  }
};
