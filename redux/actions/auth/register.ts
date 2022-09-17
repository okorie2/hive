import { REGISTER, REGISTER_ERROR, REGISTER_SUCCESS } from "../actionTypes";
import useAxios from "../../../hooks/UseAxios";
import config from "../../../config";
import axios, { AxiosResponse } from "axios";
import { FieldValues } from "react-hook-form";
import { AppDispatch } from "../../store/store";
const Register = () => ({
  type: REGISTER,
});

const RegisterSuccess = (data: AxiosResponse) => ({
  type: REGISTER_SUCCESS,
  payload: data,
});

const RegisterError = (error: AxiosResponse) => ({
  type: REGISTER_ERROR,
  payload: error,
});

export const handleRegister =
  (body: FieldValues) => async (dispatch: AppDispatch) => {
    dispatch(Register());
    try {
      const response = await useAxios({
        method: "POST",
        url: `${config.API_BASE_URL}/v1/auth/register`,
        data: body,
      });

      dispatch(RegisterSuccess(response));
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        dispatch(RegisterError(error.response));
      } else console.log(String(error), "error");
    }
  };
