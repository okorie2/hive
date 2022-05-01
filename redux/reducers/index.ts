import { combineReducers } from "redux";
import { confirmMail } from "./auth/confirm-email";
import { forgotPassword } from "./auth/forgot-password";
import { register } from "./auth/register";
import { resetPassword } from "./auth/resetPassword";
import { signin } from "./auth/signin";
import { addFriends } from "./friends/addFriends";
import { getUsers } from "./users/getUsers";

export const rootReducer = combineReducers({
  register: register,
  signin: signin,
  confirmMail: confirmMail,
  forgotPassword: forgotPassword,
  resetPassword: resetPassword,
  getUsers: getUsers,
  addFriends: addFriends,
});

export type RootState = ReturnType<typeof rootReducer>;
