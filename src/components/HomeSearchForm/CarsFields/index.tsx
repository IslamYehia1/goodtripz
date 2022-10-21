import { motion } from "framer-motion";
import style from "../SearchForm.module.scss";
import PickUpPlace from "./PickUpPlace";
import DropOffPlace from "./DropOffPlace";
import CarsDates from "./CarsDates";
import { useCarsContext } from "../../CommonContexts/CarsContext";
import Button from "../../Button/Button";
import {SearchIcon,ExpandIcon} from "../../Icons"; //prettier-ignore
import CarsTime from "./CarsTime";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import useIsMobile from "../../../utils/useIsMobile";
import { useUIContext } from "../../UI";

function CarsFields() {
  const { activeField, setActiveField, dropOffLocation, pickUpLocation, pickUpDate, dropOffDate } =
    useCarsContext();
  const history = useRouter();
  const { openModal, isModalOn, currentModal, closeModal } = useUIContext();
  const isMobile = useIsMobile();

  function searchHandler(e: React.SyntheticEvent) {
    e.preventDefault();
    history.push(
      `/searchResults/cars?pickUp=${pickUpLocation}&dropOff=${dropOffLocation}&pickUpDate=${pickUpDate}&dropOffDate=${dropOffDate}`
    );
  }

  useEffect(() => {
    if (activeField && isMobile) {
      openModal(activeField);
    } else {
      closeModal();
    }
  }, [isMobile, activeField]);
  useEffect(() => {
    if (isMobile && !isModalOn) {
      setActiveField("");
    }
  }, [isMobile, isModalOn]);

  return (
    <motion.form
      initial={{ scale: 0.6 }}
      animate={{ scale: 1 }}
      onSubmit={searchHandler}
      className={style.carsSearchFields}
    >
      <div className={style.fields}>
        <PickUpPlace />
        <DropOffPlace />
        <CarsDates />
        <Button
          className={`${style.button} ${style.searchButton}`}
          type="submit"
          icon={SearchIcon}
          handleClick={searchHandler}
        >
          <SearchIcon />
        </Button>
      </div>
    </motion.form>
  );
}

export default CarsFields;
