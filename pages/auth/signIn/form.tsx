import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

import { useForm } from "react-hook-form";
import { ButtonHighlight } from "../../../styles/components/buttons/buttonHiglight";
import { InputIcon } from "../../../styles/components/inputs/authInput";
import Image from "next/image";
import { SignInBtn } from "./signinStyles";
import { ErrorStyle } from "../../../styles/components/Error";
import { handleSignin } from "../../../redux/actions/auth/signin";
import FormController from "../../../component/formHandler/formController";
import { RootState } from "../../../redux/reducers";

interface IsignInForm {
  username: string;
  password: string;
}
export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const onSubmit = (data: IsignInForm) => {
    dispatch(handleSignin(data));
    console.log(data);
  };
  const [visibility, setVisibility] = useState(false);

  const toggleVisibility = () => {
    setVisibility(!visibility);
  };

  const { data, loading, error } = useSelector(
    (state: RootState) => state.signin
  );

  const alert = () => {
    if (data?.status) {
      toast.success(data && data?.response?.data?.message, { autoClose: 4000 });
    } else if (error) {
      toast.warn(error && error?.data?.message, { autoClose: 4000 });
    }
  };

  useEffect(() => {
    if (!loading) {
      alert();
    }
  }, [data, error]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ToastContainer autoClose={8000} />

      <FormController
        control="input"
        defaultValue="test"
        label="username"
        register={register}
        border={errors.username && "1px solid red"}
        required={true}
      />
      {errors.username && <ErrorStyle>This field is required</ErrorStyle>}

      <FormController
        control="input"
        defaultValue="test"
        label="password"
        type={visibility ? "text" : "password"}
        border={errors.password && "1px solid red"}
        register={register}
        required
      >
        <InputIcon onClick={toggleVisibility}>
          <Image src={"/svgs/eye.svg"} width={25} height={25} alt="eye" />
        </InputIcon>
      </FormController>

      {errors.password && <ErrorStyle>This field is required</ErrorStyle>}

      <SignInBtn>
        <ButtonHighlight type="submit">submit </ButtonHighlight>
      </SignInBtn>
    </form>
  );
}
