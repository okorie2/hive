import { FORGOT_PASSWORD, FORGOT_PASSWORD_ERROR, FORGOT_PASSWORD_SUCCESS } from "../actionTypes"
import config from '../../../config/index'
import useAxios from "hooks/UseAxios"
import axios, { AxiosResponse } from "axios"
import { AppDispatch } from "redux/store/store"
const forgotPassword = ()=>({
    type: FORGOT_PASSWORD,
    
})
const forgotPasswordSuccess = (data: AxiosResponse)=>({
    type: FORGOT_PASSWORD_SUCCESS,
    payload: data
    
})
const forgotPasswordError = (error: AxiosResponse)=>({
    type: FORGOT_PASSWORD_ERROR,
    payload: error
    
})

export const handleForgotPassword = (email:string )=> async(dispatch:AppDispatch)=>{
dispatch(forgotPassword())
try {
    const response = await useAxios({method:"POST", url: `${config.API_BASE_URL}/v1/auth/forgot-password/${email}`});
    console.log(response);
    dispatch(forgotPasswordSuccess(response));
  } catch (error) {
    console.log(error)
    if (axios.isAxiosError(error) && error.response) {
      dispatch(forgotPasswordError(error.response))
    } else console.log(String(error), 'error');
  }
}