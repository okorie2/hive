import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

import { useForm } from "react-hook-form";
import FormController from "../../../component/formHandler/formController";
import { handleAuth } from "../../../redux/actions/auth";
import { ButtonHighlight } from "../../../styles/components/buttons/buttonHiglight";
import { InputIcon } from "../../../styles/components/inputs/authInput";
import Image from "next/image";
import { SignInBtn } from "./signinStyles";
import { ErrorStyle } from "../../../styles/components/Error";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(handleAuth(data));
    console.log(data);
  };
  const [visibility, setVisibility] = useState(false);

  const toggleVisibility = () => {
    setVisibility(!visibility);
  };

  const { data, loading, error } = useSelector(({ auth }) => auth);

  const alert = () => {
    if (data?.status) {
      toast.success(data && data?.response?.data?.message, { autoClose: 4000 });
    } else {
      toast.warn(data && data?.response?.data?.message, { autoClose: 4000 });
    }
  };

  useEffect(() => {
    if (!loading) {
      alert();
    }
  }, [data]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ToastContainer autoClose={8000} />

      <FormController
        control="input"
        defaultValue="test"
        label="email"
        register={register}
        border={errors.email && "1px solid red"}
        required={true}
      />
      {errors.email && <ErrorStyle>This field is required</ErrorStyle>}

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
