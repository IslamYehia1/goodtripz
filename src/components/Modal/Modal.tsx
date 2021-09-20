import React, { useState } from "react";
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
    onFocus?: any;
    onClick?: any;
    altClassName?: string;
};
type searchModalProps = {
    // isOpen?: Boolean;
    className: string;
    children: React.ReactNode;
    altClassName?: string;
    // closeModal: () => void;
};
type modalState = {
    el: HTMLDivElement;
    onFocus: any;
};

const SearchModal = (props: searchModalProps) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Modal
            onFocus={() => {
                if (window.screen.width <= 650) setIsOpen(true);
            }}
            onClick={() => {
                if (window.screen.width <= 650) setIsOpen(true);
            }}
            className={props.className}
            isOpen={isOpen}
            altClassName={props.altClassName}
        >
            {isOpen && (
                <Button
                    handleClick={() => setIsOpen(false)}
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
    altClassName: any;
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
                onFocus={() => this.props.onFocus()}
                onClick={() => this.props.onClick()}
            >
                {this.props.children}
            </div>
        );
    }
}
export default SearchModal;
