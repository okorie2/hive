import axios, { AxiosResponse } from "axios";
import { FieldValues } from "react-hook-form";
import { AppDispatch } from "redux/store/store";
import config from "../../../config";
import useAxios from "../../../hooks/UseAxios";
import { SIGNIN, SIGNIN_ERROR, SIGNIN_SUCCESS } from "../actionTypes";

const signIn = () => ({
  type: SIGNIN,
});

const signInSuccess = (userData: AxiosResponse) => ({
  type: SIGNIN_SUCCESS,
  payload: userData,
});

const signinError = (error: AxiosResponse) => ({
  type: SIGNIN_ERROR,
  payload: error,
});

export const handleSignin =
  (body: FieldValues) => async (dispatch: AppDispatch) => {
    dispatch(signIn());
    try {
      const response = await useAxios({
        method: "POST",
        url: `${config.API_BASE_URL}/v1/auth/login`,
        data: body,
      });
      console.log(response);
      dispatch(signInSuccess(response));

      if (typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(response));

        localStorage.setItem("hasBeenRegistered", "true");
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        dispatch(signinError(error.response));
      } else console.log(String(error), "error");
    }
  };
