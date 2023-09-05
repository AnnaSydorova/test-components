declare module "@assessment-input" {
  import React, { ChangeEvent } from "react";

  interface InputProps {
    type?: "text" | "email" | "password";
    placeholder: string;
    oninput?: (event: ChangeEvent<HTMLInputElement>) => void;
  }

  const Input: React.FC<InputProps>;

  export default Input;
}
