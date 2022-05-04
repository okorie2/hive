import axios, { AxiosResponse } from "axios";

import config from "../../../config/index";
import useAxios from "../../../hooks/UseAxios";
import { AppDispatch } from "../../store/store";
import { GET_USERS, GET_USERS_ERROR, GET_USERS_SUCCESS } from "../actionTypes";

const getUsers = () => ({
  type: GET_USERS,
});

const getUsersSuccess = (users: AxiosResponse) => ({
  type: GET_USERS_SUCCESS,
  payload: users,
});

const getUsersError = (error: AxiosResponse) => ({
  type: GET_USERS_ERROR,
  payload: error,
});

export const handleGetUsers =
  (query: string) => async (dispatch: AppDispatch) => {
    dispatch(getUsers());
    try {
      const response = await useAxios({
        method: "GET",
        url: `${config.API_BASE_URL}/v1/people?search=${query}`,
      });
      console.log(response);
      dispatch(getUsersSuccess(response));
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        dispatch(getUsersError(error.response));
      } else console.log(String(error), "error");
    }
  };
