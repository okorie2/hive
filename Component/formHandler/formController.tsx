import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import Inputs, { Checkbox } from "./inputs";
interface IFormController{
  control: string,
  defaultValue?: string,
  placeholder?: string,
  label?:string,
  border?:string,
  register?:UseFormRegister<FieldValues>,
  required?: boolean,
  minLength?: number,
  checked?: boolean,
  onChange?: (checked: React.SetStateAction<boolean>) => void,
 children?: JSX.Element,
  type?: string

}
export default function FormController(props:IFormController) {
  const { control,  ...rest } = props;
  switch (control) {
    case "input":
      return <Inputs  {...rest} />;
    case "checkbox":
      return <Checkbox {...rest} />;
    // case "textArea":
    //   return <TextArea {...rest} />;
    // case "select":
    //   return <Select {...rest} />;
    // case "radio":
    //   return <RadioButtons {...rest} />;
    default:
      return null;
  }
}
