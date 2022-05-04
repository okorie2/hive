import { Reducer } from "redux";
import {
  AddFriendsActionState,
  ADD_FRIENDS,
  ADD_FRIENDS_ERROR,
  ADD_FRIENDS_SUCCESS,
} from "../../actions/actionTypes";

const initialState: AddFriendsActionState = {
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

export const addFriends: Reducer<AddFriendsActionState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ADD_FRIENDS:
      return {
        ...state,
        loading: true,
      };

    case ADD_FRIENDS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case ADD_FRIENDS_ERROR:
      return {
        ...state,
        loading: false,
        error: { ...state.error, status: true, data: action.payload },
      };

    default:
      return state;
  }
};
