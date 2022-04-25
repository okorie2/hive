import { combineReducers } from "redux";
import { confirmMail } from "./auth/confirm-email";
import { forgotPassword } from "./auth/forgot-password";
import { register } from "./auth/register";
import { resetPassword } from "./auth/resetPassword";
import { signin } from "./auth/signin";

export const rootReducer = combineReducers({
  register: register,
  signin: signin,
  confirmMail: confirmMail,
  forgotPassword: forgotPassword,
  resetPassword: resetPassword,
});

export type RootState = ReturnType<typeof rootReducer>;
