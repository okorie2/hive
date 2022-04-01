import { combineReducers } from "redux";
import { confirmMail } from "./auth/confirm-email";
import { register } from "./auth/register";
import { signin } from "./auth/signin";

export const rootReducer = combineReducers({
  register: register,
  signin: signin,
  confirmMail: confirmMail,
});
