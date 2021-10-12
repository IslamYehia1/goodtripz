import { ButtonHTMLAttributes } from "react";
export type propsType = {
  children?: React.ReactNode;
  type?: "submit" | "button";
  icon?: string;
  className?: string;
  alt?: string;
  id?: string;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
};
