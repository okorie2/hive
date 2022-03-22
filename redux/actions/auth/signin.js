import useAxios from "../../../hooks/UseAxios";
import { SIGNIN, SIGNIN_ERROR, SIGNIN_SUCCESS } from "../actionTypes";

const signIn = () => ({
  type: SIGNIN,
});

const signInSuccess = (userData) => ({
  type: SIGNIN_SUCCESS,
  payload: userData,
});

const signinError = (error) => ({
  type: SIGNIN_ERROR,
  payload: error,
});

export const handleSignin = (body) => async (dispatch) => {
  dispatch(signIn());
  try {
    const response = await useAxios("POST", "/v1/auth/login", body);
    console.log(response);
    dispatch(signInSuccess(response));
  } catch (error) {
    dispatch(signinError(error.response));
  }
};
