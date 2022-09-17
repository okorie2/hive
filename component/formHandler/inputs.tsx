import React from "react";
import {
  AuthInput,
  AuthInputContainer,
  InputContainer,
} from "../../styles/components/inputs/authInput";
import { UseFormRegister, FieldValues } from "react-hook-form";

interface Iinputs {
  label?: string;
  required?: boolean;
  border?: string;
  children?: JSX.Element;
  name?: string;
  register?: UseFormRegister<FieldValues>;
}
export default function Inputs(props: Iinputs) {
  const {
    label,
    register,
    required,
    border = "",
    children,
    name = "",
    ...rest
  } = props;

  return (
    <AuthInputContainer>
      <label htmlFor={label}> {label}</label>
      <InputContainer border={border}>
        <AuthInput {...register?.(name, { required })} {...rest} />
        {children}
      </InputContainer>
    </AuthInputContainer>
  );
}

export function Checkbox(props: Iinputs) {
  const { ...rest } = props;
  return <input {...rest} type="checkbox" />;
}
