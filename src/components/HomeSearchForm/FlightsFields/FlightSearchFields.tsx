import React, { useState, useContext, useEffect } from "react";
import {SearchIcon,ExpandIcon} from "../../Icons"; //prettier-ignore
import Button from "../../Button/Button";
import { useRouter } from "next/router";
import style from "../SearchForm.module.scss";
import { flightsContext } from "../../CommonContexts/FlightsContext";
import OriginFlightField from "./OriginFlightField";
import DestinationFlightField from "./DestinationFlightField";
import FlightDateField from "./FlightDateFIeld";

import SearchModal from "../../Modal/SearchModal";
import { useFlightContext } from "../../CommonContexts/FlightsContext";
import useIsMobile from "../../../utils/useIsMobile";
import { useUIContext } from "../../UI";
import { motion } from "framer-motion";
import SearchOptions from "./SearchOptions";
type ACTIVE_FIELD =
  | "departure"
  | "arrival"
  | "date"
  | "returnDate"
  | "travellersOptions"
  | "flightTypeOptions"
  | "";

const FlightSearchFields = () => {
  let history = useRouter();
  const isMobile = useIsMobile();
  const { activeField, setActiveField, from, to, date, returnDate, adults, children, type } =
    useFlightContext();
  const { openModal, isModalOn, currentModal, closeModal } = useUIContext();
  // Only one filter window can be open at once, hence the lefted state
  function handleSearch(e: React.SyntheticEvent) {
    e.preventDefault();
    history.push(
      `/searchResults/flights?from=${from.IATA}&to=${to.IATA}&date=${date}&returnDate=${returnDate}&adults=${adults}&children=${children}`
    );
  }
  function toggleField(field: ACTIVE_FIELD) {
    if (isMobile) openModal(field);
    if (activeField === field) setActiveField("");
    else setActiveField(field);
  }
  function handleOutsideClick(e: React.FocusEvent<Element>) {
    if (!e.relatedTarget || !(e.relatedTarget as HTMLElement).closest(`.${style.optionsWindow}`)) {
      setActiveField("");
    }
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
      onSubmit={handleSearch}
      className={style.flightSearchFields}
    >
      <div className={style.options}>
        <SearchOptions />
      </div>
      <div className={style.fields}>
        {/* -------- Departure airport search field -------- */}
        <OriginFlightField />
        {/* -------- Destination airport search field -------- */}
        <DestinationFlightField />
        {/* -------- Date picker search field -------- */}
        <FlightDateField />

        <Button
          className={`${style.button} ${style.searchButton}`}
          type="submit"
          icon={SearchIcon}
          handleClick={handleSearch}
        >
          <SearchIcon />
        </Button>
      </div>
    </motion.form>
  );
};

export default FlightSearchFields;
