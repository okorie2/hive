import axios, { AxiosResponse } from "axios";
import useAxios from "hooks/UseAxios";
import { IFriends } from "pages/onboarding/addFriends";
import { AppDispatch } from "redux/store/store";
import config from "../../../config/index";
import {
  ADD_FRIENDS,
  ADD_FRIENDS_ERROR,
  ADD_FRIENDS_SUCCESS,
} from "../actionTypes";

const addFriends = () => ({
  type: ADD_FRIENDS,
});

const addFriendsSuccess = (users: AxiosResponse) => ({
  type: ADD_FRIENDS_SUCCESS,
  payload: users,
});

const addFriendsError = (error: AxiosResponse) => ({
  type: ADD_FRIENDS_ERROR,
  payload: error,
});

export const handleaddFriends =
  (body: IFriends) => async (dispatch: AppDispatch) => {
    dispatch(addFriends());
    try {
      const response = await useAxios({
        method: "POST",
        url: `${config.API_BASE_URL}/v1/user/friends`,
        data: body,
      });
      console.log(response);
      dispatch(addFriendsSuccess(response));
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        dispatch(addFriendsError(error.response));
      } else {
        console.log(String(error), "error");
      }
    }
  };
