import React from "react";
import {
  AuthInput,
  AuthInputContainer,
  InputContainer,
} from "../../styles/components/inputs/authInput";
import {UseFormRegister, FieldValues} from 'react-hook-form'

interface Props{
  label: string,
  required: boolean,
  border: string,
 children: JSX.Element,
 register:   UseFormRegister<FieldValues>
}
export default function Inputs(props) {
  const { label, register, required, border, children, ...rest }: Props = props;

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
  const { ...rest }:Props = props;
  return <input {...rest} type="checkbox" />;
}
