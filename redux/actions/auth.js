import useAxios from "../../hooks/UseAxios";
import { AUTH, AUTH_ERROR, AUTH_SUCCESS } from "./actionTypes";

const getAuth = () => ({
  type: AUTH,
});

const getAuthSuccess = (data) => ({
  type: AUTH_SUCCESS,
  payload: data,
});

const getAuthError = (error) => ({
  type: AUTH_ERROR,
  payload: error,
});

export const handleAuth = (body) => async (dispatch) => {
  dispatch(getAuth());
  try {
    const response = await useAxios("POST", "/v1/auth/register", body);
    console.log(response);
    dispatch(getAuthSuccess(response));
  } catch (error) {
    dispatch(getAuthError(error));
  }
};
