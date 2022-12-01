import { SearchModal } from "../Modal";
import style from "./style.module.scss";
import { useEffect, useState } from "react";
import useIsMobile from "src/utils/useIsMobile";
import useOutsideClick from "src/utils/useOutsideClick";
import {ExpandIcon} from "src/components/Icons"; //prettier-ignore
import Button from "../Button/Button";
import { AnimatePresence, motion } from "framer-motion";

function SearchOption(props: any) {
  const [isActive, setIsActive] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const isMobile = useIsMobile();
  const flightOptionsRef = useOutsideClick(isActive, () => {
    props.onDeactivate();
  });
  //   useEffect(() => {
  //     if (props.isActive) setIsActive(true);
  //     else setIsActive(false);
  //   }, [props.isActive]);
  useEffect(() => {
    if (props.isActive && isMobile) {
      setIsModal(true);
    } else setIsModal(false);
  }, [props.isActive, isMobile]);
  //   useEffect(() => {
  //     if (isModal) setIsActive(true);
  //     else setIsActive(false);
  //   }, [isModal]);
  return (
    <SearchModal
      onClose={() => {
        props.onDeActivate();
      }}
      className={style.modal}
      isOpen={isModal}
    >
      <>
        <div
          ref={flightOptionsRef as any}
          tabIndex={0}
          className={`${style.filterButtonWrapper} ${isModal ? style.inModal : ""}`}
        >
          <Button
            icon={ExpandIcon}
            className={style.button}
            handleClick={() => {
              props.onActivate();
              // if (isMobile) openModal("flightTypeOptions");
            }}
            type="button"
          >
            {props.btnValue}
          </Button>
        </div>
        {props.isActive && (
          <motion.div
            initial={{ scaleY: 0, transformOrigin: "bottom center" }}
            animate={{ scaleY: 1 }}
            tabIndex={0}
            className={`${style.optionsWindow}`}
          >
            {props.children}
          </motion.div>
        )}
      </>
    </SearchModal>
  );
}

export default SearchOption;
