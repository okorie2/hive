import { FORGOT_PASSWORD, FORGOT_PASSWORD_ERROR, FORGOT_PASSWORD_SUCCESS } from "../actionTypes"
import config from '../../../config/index'
const forgotPassword = ()=>({
    type: FORGOT_PASSWORD,
    
})
const forgotPasswordSuccess = (data)=>({
    type: FORGOT_PASSWORD_SUCCESS,
    payload: data
    
})
const forgotPasswordError = (error)=>({
    type: FORGOT_PASSWORD_ERROR,
    payload: error
    
})

export const handleForgotPassword = (email)=> async(dispatch)=>{
dispatch(forgotPassword())
try {
    const response = await useAxios({method:"POST", url: `${config.API_BASE_URL}/v1/auth/forgot-password/${email}`});
    console.log(response);
    dispatch(forgotPasswordSuccess(response));
  } catch (error) {
    dispatch(forgotPasswordError(error.response));
  }
}