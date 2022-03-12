import React from "react";
import Inputs, { Checkbox } from "./Inputs";

export default function FormController(props) {
  const { control, src, ...rest } = props;
  switch (control) {
    case "input":
      return <Inputs src={src} {...rest} />;
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
