import React from "react";
import ReactDOM from "react-dom";
import "./modal.scss";
const modalRoot = document.getElementById("modalRoot");

type modalProps = {
    isOpen?: Boolean;
    className: string;
};
type modalState = {
    el: HTMLDivElement;
};
class Modal extends React.Component<modalProps, modalState> {
    el: HTMLDivElement;
    constructor(props: modalProps) {
        super(props);
        this.el = document.createElement("div");
    }

    componentDidMount() {}
    componentDidUpdate(prevProps: modalProps) {
        if (this.props.isOpen !== prevProps.isOpen && this.props.isOpen) {
            modalRoot!.appendChild(this.el);
            document.body.style.overflow = "hidden";
            this.el.classList.add("modal");
        }
        if (this.props.isOpen !== prevProps.isOpen && !this.props.isOpen) {
            modalRoot!.removeChild(this.el);
            document.body.style.overflow = "unset";
        }
    }

    componentWillUnmount() {}

    render() {
        if (this.props.isOpen) {
            return ReactDOM.createPortal(this.props.children, this.el);
        }
        return <>{this.props.children}</>;
    }
}
export default Modal;
