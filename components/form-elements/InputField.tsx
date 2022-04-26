import React from "react";

interface InputFieldPropsI {
  label?: string;
  labelId?: string;
  name?: string;
  inputId?: string;
  className?: string;
  containerStyles?: string;
  placeHolder?: string;
  labelStyles?: string;
  type?: string;
  onChange?: any;

  value?: any;
}

function InputField({
  label,
  labelId,
  className,
  inputId,
  name,
  placeHolder,
  containerStyles,
  labelStyles,
  type,
  onChange,

  value,
}: InputFieldPropsI) {
  return (
    <div className={containerStyles}>
      <label className={labelStyles} htmlFor={labelId}>
        {label}
      </label>
      <input
        placeholder={placeHolder}
        name={name}
        id={inputId}
        className={className}
        type={type}
        required
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default InputField;
