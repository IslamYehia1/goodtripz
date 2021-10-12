import Modal from "./Modal";
import Button from "../Button/Button";
import { LeftArrow } from "../Icons";
import { useEffect, useState } from "react";

type propsType = {
  isOpen: Boolean;
  className: string;
  children: React.ReactNode;
  closeModal: () => void;
};
const SearchExtraModal = (props: propsType) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 650 && props.isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [props.isOpen]);
  return (
    <Modal isOpen={isOpen} className={props.className}>
      {isOpen && (
        <Button
          handleClick={() => props.closeModal()}
          className="button modalCloseBtn"
          icon={LeftArrow}
        />
      )}
      {props.children}
    </Modal>
  );
};

export default SearchExtraModal;
