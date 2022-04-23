export const REGISTER = "REGISTER";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_ERROR = "REGISTER_ERROR";

export const SIGNIN = "SIGNIN";
export const SIGNIN_SUCCESS = "SIGNIN_SUCCESS";
export const SIGNIN_ERROR = "SIGNIN_ERROR";

export const CONFIRM_MAIL = "CONFIRM_MAIL";
export const CONFIRM_MAIL_SUCCESS = "CONFIRM_MAIL_SUCCESS";
export const CONFIRM_MAIL_ERROR = "CONFIRM_MAIL_ERROR";

export const FORGOT_PASSWORD = "FORGOT_PASSWORD";
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_ERROR = "FORGOT_PASSWORD_ERROR";

type data = {
  status: number | boolean;
  data: {
    message: string;
  };
};

type error = {
  data: {
    message: string;
  };
};
export interface ActionState {
  loading: boolean;
  data: data;
  error: error;
  register?: boolean;
}
