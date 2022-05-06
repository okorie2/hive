import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
// import _ from 'lodash'
import { ButtonHighlight } from "../../../styles/components/buttons/buttonHiglight";
import { ErrorStyle } from "../../../styles/components/Error";
import { RootState } from "../../../redux/reducers";
import { SignInBtn } from "../../../styles/pages/signinStyles";
import { useRouter } from "next/router";
import { handleForgotPassword } from "../../../redux/actions/auth/forgotPassword";
// import FormController from "../../../component/formHandler/formController";

export default function ForgotPasswordForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setEmail(data.email);
    dispatch(handleForgotPassword(data.email));
    console.log(data);
  };

  const { data, loading, error } = useSelector(
    (state: RootState) => state.forgotPassword
  );

  const router = useRouter();

  const alert = () => {
    if (data?.status === 200) {
      router.push(
        {
          pathname: "/auth/checkEmail/checkemail",
          query: {
            email: email,
          },
        },
        "/auth/checkemail"
      );
    } else if (error.status) {
      toast.warn(error && error?.data?.data?.message, { autoClose: 4000 });
    }
  };
  console.log(data.status, loading);
  useEffect(() => {
    if (!loading) {
      console.log("not empty");
      alert();
    }
  }, [data, error.status]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <FormController
        control="input"
        name="email"
        label="email"
        register={register}
        placeholder="ekejohn123@gmail.com"
        border={errors.email && "1px solid red"}
        required={true}
      /> */}
      {errors.email && <ErrorStyle>This field is required</ErrorStyle>}

      <SignInBtn>
        <ButtonHighlight type="submit" padding={"2.5% 9%"}>
          send{" "}
        </ButtonHighlight>
      </SignInBtn>
    </form>
  );
}
