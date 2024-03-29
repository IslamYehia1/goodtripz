import style from "./Button.module.scss";
// import Image from "next/image";
import { propsType } from "./types";
const Button = (props: propsType) => {
  return (
    <button
      onClick={props.handleClick}
      id={props.id}
      className={`${props.className} ${style.button}`}
      type={props.type || "button"}
      tabIndex={props.tabIndex}
      onBlur={props.onBlur}
    >
      {/* {props.tempIcon && <img alt={props.alt} src={props.icon} />} */}
      {props.icon && <props.icon />}
      <span>{props.children}</span>
    </button>
  );
};

export default Button;
