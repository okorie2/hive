import { REGISTER, REGISTER_ERROR, REGISTER_SUCCESS } from "../actionTypes";
import useAxios from "../../../hooks/UseAxios";
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
    const response = await useAxios("POST", "/v1/auth/register", body);

    dispatch(
      RegisterSuccess({
        status: true,
        response,
      })
    );

    if (typeof window !== "undefined") {
      localStorage.setItem("user", JSON.stringify(response));
      localStorage.setItem("hasBeenRegistered", true);
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
