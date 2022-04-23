import { Reducer } from "redux";
import {
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  ActionState,
} from "../../actions/actionTypes";

const initialState: ActionState = {
  loading: false,
  error: {
    data: {
      message: "",
    },
  },
  data: {
    status: 0,
    data: {
      message: "",
    },
  },
};
export const register: Reducer<ActionState> = (
  state = initialState,
  action
) => {
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
      };
    case REGISTER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
