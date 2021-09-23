import React, { useState } from "react";
import ReactDOM from "react-dom";
import Button from "../Button/Button";
import { ReactComponent as leftArrowIcon } from "../../icons/leftArrow.svg";
import "./modal.scss";
const modalRoot = document.getElementById("modalRoot");

type modalProps = {
    isOpen?: Boolean;
    className: string;
    onFocus?: () => void;
    onClick?: () => void;
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
    onFocus: () => void;
};
type FiltersModalType = {
    closeModal: () => void;
    children: React.ReactNode;
    isOpen: Boolean;
    className: string;
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
const FiltersModal = (props: FiltersModalType) => {
    return (
        <Modal isOpen={props.isOpen} className={props.className}>
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
export { SearchModal, Modal, FiltersModal };
