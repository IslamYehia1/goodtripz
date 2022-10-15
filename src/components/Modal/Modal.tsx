import React from "react";
import ReactDOM from "react-dom";
import style from "./Modal.module.scss";
import { modalProps, modalState } from "./types";
import ClientOnlyPortal from "./ClientOnlyPortal";
class Modal extends React.Component<modalProps, modalState> {
  // el: HTMLDivElement;
  altClassName?: string;
  className?: string;
  modalRoot?: HTMLElement;
  constructor(props: modalProps) {
    super(props);
    if (typeof window !== "undefined")
      this.modalRoot = document.getElementById("modalRoot") as HTMLElement;
    this.altClassName = this.props.altClassName;
    this.className = this.props.className;
    // this.el = document.createElement("div");
  }
  componentDidUpdate(prevProps: modalProps) {
    if (typeof window === "undefined") return;
    if (this.props.isOpen !== prevProps.isOpen && this.props.isOpen) {
      document.querySelector("html")!.style.overflow = "hidden";
    }
    if (this.props.isOpen !== prevProps.isOpen && this.props.isOpen === false) {
      document.querySelector("html")!.style.overflow = "auto";
    }
  }

  render() {
    let element;
    if (this.props.isOpen) {
      element = (
        <ClientOnlyPortal selector="#modalRoot">
          <div className={`${style.modal} ${this.props.className}`}>{this.props.children}</div>
        </ClientOnlyPortal>
      );
    } else {
      element =
        // <div
        //     className={this.props.altClassName}
        //     onFocus={() => {
        //         if (this.props.onFocus) this.props.onFocus();
        //     }}
        //     onClick={() => {
        //         if (this.props.onClick) this.props.onClick();
        //     }}
        // >
        this.props.children;
      // </div>
    }
    return <>{element}</>;
  }
}
export default Modal;
