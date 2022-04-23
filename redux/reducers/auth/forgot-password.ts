import { Reducer } from "redux";
import {
  ActionState,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_ERROR,
  FORGOT_PASSWORD_SUCCESS,
} from "../../actions/actionTypes";

const initialState: ActionState = {
  loading: false,
  data: {
    status: 0,
    data: {
      message: "",
    },
  },
  error: {
    data: {
      message: "",
    },
  },
};
export const forgotPassword: Reducer<ActionState> = (
  state = initialState,
  action
) => {
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
