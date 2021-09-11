import React from "react";
import ReactDOM from "react-dom";
import Button from "../Button/Button";
import leftArrowIcon from "../../icons/leftArrow.svg";

// import "./modal.scss";
const modalRoot = document.getElementById("modalRoot");

type modalProps = {
    isOpen?: Boolean;
    className: string;
    isFullScreen?: {
        [key: string]: Boolean;
    };
};
type searchModalProps = {
    isOpen?: Boolean;
    className: string;
    children: React.ReactNode;
    closeModal: () => void;
};
type modalState = {
    el: HTMLDivElement;
};

const SearchModal = (props: searchModalProps) => {
    return (
        <Modal className={props.className} isOpen={props.isOpen}>
            {props.isOpen && (
                <Button
                    handleClick={() => props.closeModal()}
                    className="button modalCloseBtn"
                    icon={leftArrowIcon}
                />
            )}
            {props.children}
        </Modal>
    );
};

class Modal extends React.Component<modalProps, modalState> {
    el: HTMLDivElement;
    constructor(props: modalProps) {
        super(props);
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
        return <>{this.props.children}</>;
    }
}
export default SearchModal;
