import FormController from "component/formHandler/formController";
import React, { useEffect } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorStyle } from "styles/components/Error";
import { SignInBtn } from "pages/auth/signIn/signinStyles";
import { ButtonHighlight } from "styles/components/buttons/buttonHiglight";
import { useDispatch, useSelector } from "react-redux";
import { handleresetPassword } from "redux/actions/auth/resetPassword";
import { toast } from "react-toastify";
import { RootState } from "redux/reducers";
import { useRouter } from "next/router";

const formSchema = Yup.object().shape({
  password: Yup.string()
    .required("Password is mandatory")
    .min(3, "Password must be at 3 char long"),
  confirmPassword: Yup.string()
    .required("Password is mandatory")
    .oneOf([Yup.ref("password")], "Passwords does not match"),
});
const formOptions = { mode: "onTouched", resolver: yupResolver(formSchema) };

interface IToken {
  token: string;
}

export default function Signin({ token }: IToken) {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>(formOptions);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    dispatch(handleresetPassword(token, data));
  };

  const { data, loading, error } = useSelector(
    (state: RootState) => state.resetPassword
  );
  const router = useRouter();
  const formAlert = () => {
    if (data?.status) {
      router.push("/auth/resetSuccessful/resetsuccessful");
    } else if (error.status) {
      toast.warn(error && error?.data?.data?.message, { autoClose: 4000 });
    }
  };

  useEffect(() => {
    if (!loading) {
      formAlert();
    }
  }, [data, error.status]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormController
          control="input"
          label="Password"
          name="password"
          placeholder="Enter Passwrd"
          register={register}
          border={errors.password && "1px solid red"}
          required={true}
        />
        {errors.password && <ErrorStyle>{errors.password?.message}</ErrorStyle>}

        <FormController
          control="input"
          placeholder="Re-enter Password"
          label="Confirm Password"
          register={register}
          name="confirmPassword"
          border={errors.confirmPassword && "1px solid red"}
          required={true}
        />
        {errors.confirmPassword && (
          <ErrorStyle>{errors.confirmPassword?.message}</ErrorStyle>
        )}
        <SignInBtn>
          <ButtonHighlight type="submit">Reset </ButtonHighlight>
        </SignInBtn>
      </form>
    </>
  );
}
