import { REGISTER, REGISTER_ERROR, REGISTER_SUCCESS } from "../actionTypes";
import useAxios from "../../../hooks/UseAxios";
import config from "../../../config";
const Register = () => ({
  type: REGISTER,
});

const RegisterSuccess = (data) => ({
  type: REGISTER_SUCCESS,
  payload: data,
});

const RegisterError = (error) => ({
  type: REGISTER_ERROR,
  payload: error,
});

export const handleRegister = (body) => async (dispatch) => {
  dispatch(Register());
  try {
    const response = await useAxios({method:"POST", url: `${config.API_BASE_URL}/v1/auth/register`, data:body});

    dispatch(
      RegisterSuccess({
        status: true,
        response,
      })
    );

    if (typeof window !== "undefined") {
      localStorage.setItem("user", JSON.stringify(response));
      localStorage.setItem("hasBeenRegistered", 'true');
    }
  } catch (error) {
    dispatch(
      RegisterError({
        status: false,
        response: error.response,
      })
    );
  }
};
