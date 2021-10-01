import React from "react";
import ReactDOM from "react-dom";
import "./modal.scss";
import { modalProps, modalState } from "./types";

const modalRoot = document.getElementById("modalRoot");

class Modal extends React.Component<modalProps, modalState> {
    el: HTMLDivElement;
    altClassName?: string;
    constructor(props: modalProps) {
        super(props);
        this.altClassName = this.props.altClassName;
        this.el = document.createElement("div");
    }
    componentDidUpdate(prevProps: modalProps) {
        if (this.props.isOpen !== prevProps.isOpen && this.props.isOpen) {
            modalRoot!.appendChild(this.el);
            document.body.style.overflow = "hidden";
            this.el.classList.add(this.props.className);
        }
        if (
            this.props.isOpen !== prevProps.isOpen &&
            this.props.isOpen === false
        ) {
            modalRoot!.removeChild(this.el);
            document.body.style.overflow = "unset";
        }
    }

    render() {
        if (this.props.isOpen) {
            return ReactDOM.createPortal(this.props.children, this.el);
        }
        return (
            <div
                className={this.props.altClassName}
                onFocus={() => {
                    if (this.props.onFocus) this.props.onFocus();
                }}
                onClick={() => {
                    if (this.props.onClick) this.props.onClick();
                }}
            >
                {this.props.children}
            </div>
        );
    }
}
export default Modal;
