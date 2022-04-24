import { Reducer } from "redux";
import {
  ActionState,
  RESET_PASSWORD,
  RESET_PASSWORD_ERROR,
  RESET_PASSWORD_SUCCESS,
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
    status: false,
    data: {
      data: {
        message: "",
      },
    },
  },
};
export const resetPassword: Reducer<ActionState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case RESET_PASSWORD:
      return {
        ...state,
        loading: true,
      };

    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case RESET_PASSWORD_ERROR:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    default:
      return state;
  }
};
