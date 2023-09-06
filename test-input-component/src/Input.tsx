import { ChangeEvent } from "react";
import "./input.css";

interface InputProps {
  type?: "text" | "email" | "password";
  placeholder: string;
  oninput?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  onfocus?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  type = "text",
  placeholder,
  oninput,
  value,
  onfocus,
}: InputProps) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        onInput={oninput}
        value={value}
        onFocus={onfocus}
      />
    </>
  );
};
