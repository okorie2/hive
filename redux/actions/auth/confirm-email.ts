import axios, { AxiosResponse } from "axios";
import config from "../../../config";
import useAxios from "../../../hooks/UseAxios";
import { AppDispatch } from "../../store/store";
import {
  CONFIRM_MAIL,
  CONFIRM_MAIL_ERROR,
  CONFIRM_MAIL_SUCCESS,
} from "../actionTypes";

const confirmMail = () => ({
  type: CONFIRM_MAIL,
});

const confirmMailSuccess = (data: AxiosResponse) => ({
  type: CONFIRM_MAIL_SUCCESS,
  payload: data,
});

const confirmMailError = (error: AxiosResponse) => ({
  type: CONFIRM_MAIL_ERROR,
  payload: error,
});

export const handleConfirmMail =
  (token: string) => async (dispatch: AppDispatch) => {
    dispatch(confirmMail());
    try {
      const response = await useAxios({
        method: "GET",
        url: `${config.API_BASE_URL}/v1/auth/verify-email/${token}`,
      });
      console.log(response);
      dispatch(confirmMailSuccess(response));
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        dispatch(confirmMailError(error.response));
      } else console.log(String(error), "error");
    }
  };
