import { ButtonHTMLAttributes } from "react";
export type propsType = {
  children?: React.ReactNode;
  type?: "submit" | "button";
  icon?: string;
  className?: string;
  alt?: string;
  id?: string;
  tabIndex?: number;
  onBlur?: any;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
};
