import Modal from "./Modal";
import { searchModalProps } from "./types";
import Button from "../Button/Button";
import { useState } from "react";
import { LeftArrow } from "../Icons";
import style from "./Modal.module.scss";
const SearchModal = (props: searchModalProps) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Modal
            onFocus={() => {
                if (window.innerWidth <= 650) setIsOpen(true);
            }}
            onClick={() => {
                if (window.innerWidth <= 650) setIsOpen(true);
            }}
            className={props.className}
            isOpen={isOpen}
            altClassName={props.altClassName}
        >
            {isOpen && (
                <Button
                    handleClick={() => setIsOpen(false)}
                    className={style.modalCloseBtn}
                    icon={LeftArrow}
                />
            )}
            {props.children}
        </Modal>
    );
};
export default SearchModal;
