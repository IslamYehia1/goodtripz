import Modal from "./Modal";
import { LeftArrow } from "../Icons";
import { FiltersModalType } from "./types";
import Button from "../Button/Button";
const FiltersModal = (props: FiltersModalType) => {
    return (
        <Modal isOpen={props.isOpen} className={props.className}>
            {props.isOpen && (
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

export default FiltersModal;
