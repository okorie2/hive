import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { FieldValues, useForm } from "react-hook-form";
// import _ from 'lodash'
import { ButtonHighlight } from "../../../styles/components/buttons/buttonHiglight";
import { ErrorStyle } from "../../../styles/components/Error";
import FormController from "../../../component/formHandler/formController";
import { RootState } from "../../../redux/reducers";
import { SignInBtn } from "../signIn/signinStyles";
import { handleForgotPassword } from "redux/actions/auth/forgotPassword";
import _ from "lodash";

export interface IForgotPasswordForm {
  email?: string | undefined;
}
export default function ForgotPasswordForm() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues, IForgotPasswordForm>();

  const onSubmit = (data: IForgotPasswordForm) => {
    if (data === undefined) {
      return;
    }
    dispatch(handleForgotPassword(data && data?.email));
    console.log(data);
  };

  const { data, loading, error } = useSelector(
    (state: RootState) => state.forgotPassword
  );

  const alert = () => {
    if (data?.status) {
      toast.success(data && data?.data?.message, { autoClose: 4000 });
    } else if (error) {
      toast.warn(error && error?.data?.message, { autoClose: 4000 });
    }
  };
  console.log(data, loading);
  useEffect(() => {
    if (!loading) {
      console.log("not empty");
      alert();
    }
  }, [data, error]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormController
        control="input"
        label="email"
        register={register}
        placeholder="ekejohn123@gmail.com"
        border={errors.email && "1px solid red"}
        required={true}
      />
      {errors.email && <ErrorStyle>This field is required</ErrorStyle>}

      <SignInBtn>
        <ButtonHighlight type="submit" padding={"2.5% 9%"}>
          send{" "}
        </ButtonHighlight>
      </SignInBtn>
    </form>
  );
}
