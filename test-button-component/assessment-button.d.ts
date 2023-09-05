declare module "@assessment-button" {
  import React from "react";

  interface ButtonProps {
    primary?: boolean;
    backgroundColor?: string;
    size?: "small" | "medium" | "large";
    label: string;
    onClick?: () => void;
  }

  const Button: React.FC<ButtonProps>;

  export default Button;
}
