import Modal from "./Modal";
import { searchModalProps } from "./types";
import Button from "../Button/Button";
import { useEffect, useState } from "react";
import { LeftArrow } from "../Icons";
import style from "./Modal.module.scss";

const SearchModal = (props: searchModalProps) => {
  // const { isModalOn, currentModal, closeModal } = useUIContext();

  return (
    <Modal className={props.className} isOpen={props.isOpen}>
      {props.isOpen && (
        <Button
          handleClick={() => {
            props.onClose && props.onClose();
          }}
          className={style.modalCloseBtn}
          icon={LeftArrow}
        />
      )}
      {props.children}
    </Modal>
  );
};
export default SearchModal;
