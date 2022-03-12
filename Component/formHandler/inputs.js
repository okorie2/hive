import React from "react";
import Image from "next/image";
import {
  AuthInput,
  AuthInputContainer,
  InputContainer,
  InputIcon,
} from "../../styles/components/inputs/authInput";

export default function Inputs(props) {
  const { label, register, required, border, children, ...rest } = props;

  return (
    <AuthInputContainer>
      <label htmlFor={label}> {label}</label>
      <InputContainer border={border}>
        <AuthInput {...register(label, { required })} {...rest} />
        {children}
      </InputContainer>
    </AuthInputContainer>
  );
}

export function Checkbox(props) {
  const { label, register, required, ...rest } = props;
  return <input {...rest} type="checkbox" />;
}
