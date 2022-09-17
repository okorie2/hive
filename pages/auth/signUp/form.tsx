import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import FormController from "../../../component/formHandler/formController";
import { ErrorStyle } from "../../../styles/components/Error";
import { SignUpBtn, Terms } from "../../../styles/pages/signUpStyles";
import Link from "next/link";
import { ButtonHighlight } from "../../../styles/components/buttons/buttonHiglight";
import { ButtonFade } from "../../../styles/components/buttons/buttonFade";
import { InputIcon } from "../../../styles/components/inputs/authInput";
import Image from "next/image";
import { handleRegister } from "../../../redux/actions/auth/register";
import { RootState } from "../../../redux/reducers";

export default function FormWrapper() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    dispatch(handleRegister(data));
    console.log(data);
  };
  const [visibility, setVisibility] = useState(false);
  const [checked, setChecked] = useState(false);

  const toggleVisibility = () => {
    setVisibility(!visibility);
  };

  const { data, loading, error } = useSelector(
    ({ register }: RootState) => register
  );

  const alert = () => {
    if (data?.status) {
      toast.success(data && data?.data?.message, { autoClose: 4000 });
    } else if (error.status) {
      toast.warn(error && error?.data?.data?.message, { autoClose: 4000 });
    }
  };

  useEffect(() => {
    if (!loading) {
      alert();
    }
  }, [data, error.status]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ToastContainer autoClose={8000} />

      <FormController
        control="input"
        placeholder="username"
        label="username"
        name="username"
        border={errors.username && "1px solid red"}
        register={register}
        required={true}
        minLength={3}
      />
      {errors.username && <ErrorStyle>This field is required</ErrorStyle>}

      <FormController
        control="input"
        placeholder="email"
        label="email"
        name="email"
        register={register}
        border={errors.email && "1px solid red"}
        required={true}
      />
      {errors.email && <ErrorStyle>This field is required</ErrorStyle>}

      <FormController
        control="input"
        placeholder="first name"
        label="first Name"
        name="first_name"
        border={errors.first_name && "1px solid red"}
        register={register}
        required
      />
      {errors.first_name && <ErrorStyle>This field is required</ErrorStyle>}

      <FormController
        control="input"
        placeholder="last name"
        label="last Name"
        name="last_name"
        register={register}
        border={errors.last_name && "1px solid red"}
        required
      />
      {errors.last_name && <ErrorStyle>This field is required</ErrorStyle>}

      <FormController
        control="input"
        placeholder="password"
        label="password"
        name="password"
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
      <Terms>
        <FormController
          control="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <div className="termstxt">
          <span>
            Creating an account means you agree with our{" "}
            <Link href="#">Terms of Service</Link> and{" "}
            <Link href="#">Privacy Policy</Link>
          </span>
        </div>
      </Terms>
      <SignUpBtn>
        {checked ? (
          <ButtonHighlight type="submit" disabled={checked ? false : true}>
            submit{" "}
          </ButtonHighlight>
        ) : (
          <ButtonFade disabled={checked ? false : true}>submit</ButtonFade>
        )}
      </SignUpBtn>
    </form>
  );
}
