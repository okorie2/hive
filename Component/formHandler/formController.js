import React from "react";
import Inputs, { Checkboxes, RadioButtons, Select, TextArea } from "./Inputs";

export default function FormController(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Inputs {...rest} />;
    case "textArea":
      return <TextArea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <RadioButtons {...rest} />;
    case "checkbox":
      return <Checkboxes {...rest} />;
    default:
      return null;
  }
}
