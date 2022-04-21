import config from "../../../config";
import useAxios from "../../../hooks/UseAxios";
import {
  CONFIRM_MAIL,
  CONFIRM_MAIL_ERROR,
  CONFIRM_MAIL_SUCCESS,
} from "../actionTypes";


const confirmMail = () => ({
  type: CONFIRM_MAIL,
});

const confirmMailSuccess = (data) => ({
  type: CONFIRM_MAIL_SUCCESS,
  payload: data,
});

const confirmMailError = (error) => ({
  type: CONFIRM_MAIL_ERROR,
  payload: error,
});

export const handleConfirmMail = (token) => async (dispatch) => {
  dispatch(confirmMail());
  try {
    const response = await useAxios({method:"GET", url:`${config.API_BASE_URL}/v1/auth/verify-email/${token}`});
    console.log(response);
    dispatch(confirmMailSuccess(response));
  } catch (error) {
    dispatch(confirmMailError(error.response));
  }
};
