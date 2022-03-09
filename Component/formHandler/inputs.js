import React from "react";
import { Field, ErrorMessage } from "formik";

export default function Inputs(props) {
  const { name, label, ...rest } = props;
  return (
    <div>
      <label htmlFor={name}> {label}</label>
      <Field name={name} {...rest} />
      <ErrorMessage name={name} />
    </div>
  );
}

export function TextArea(props) {
  const { name, label, ...rest } = props;

  return (
    <>
      <div>
        <label htmlFor={name}>{label}</label>
        <Field as="textarea" id={name} name={name} {...rest} />
        <ErrorMessage name={name} />
      </div>
    </>
  );
}

export function Select(props) {
  const { name, labl, options, ...rest } = props;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field as="select" id={name} name={name} {...rest}>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} />
    </div>
  );
}

export function RadioButtons(props) {
  const { name, label, options, ...rest } = props;
  return (
    <div>
      <label>{label}</label>
      <Field name={name}>
        {(formik) => {
          const { field } = formik;
          return options.map((option) => {
            return (
              <div key={option.key}>
                <input
                  type="radio"
                  id={option.value}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </div>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} />
    </div>
  );
}

export function Checkboxes(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div>
      <label>{label}</label>
      <Field name={name}>
        {(formik) => {
          const { field } = formik;
          return options.map((option) => {
            return (
              <div key={option.key}>
                <input
                  type="checkbox"
                  id={option.value}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field.value.includes(option.value)}
                />
                <label>{option.key}</label>
              </div>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} />
    </div>
  );
}
