import { Reducer } from "redux";
import {
  GetUsersActionState,
  GET_USERS,
  GET_USERS_ERROR,
  GET_USERS_SUCCESS,
} from "../../actions/actionTypes";

const initialState: GetUsersActionState = {
  loading: false,
  data: {
    data: [],
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

export const getUsers: Reducer<GetUsersActionState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        loading: true,
      };

    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GET_USERS_ERROR:
      return {
        ...state,
        loading: false,
        error: { ...state.error, status: true, data: action.payload },
      };

    default:
      return state;
  }
};
