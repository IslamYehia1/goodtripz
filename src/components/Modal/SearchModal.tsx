import Modal from "./Modal";
import { searchModalProps } from "./types";
import Button from "../Button/Button";
import { useEffect, useState } from "react";
import { LeftArrow } from "../Icons";
import style from "./Modal.module.scss";
import { useUIContext } from "../UI/index";
import AirportSearchTemp from "../HomeSearchForm/Flights/OriginFlightField";
import FlightDateField from "../HomeSearchForm/Flights/FlightDateFIeld";
import PlaceSearchField from "../HomeSearchForm/Hotels/PlaceSearchField";
import HotelDateField from "../HomeSearchForm/Hotels/HotelDateField";
const SearchModal = (props: searchModalProps) => {
  const { isModalOn, currentModal, closeModal } = useUIContext();
  useEffect(() => {
    console.log("WOORKING", currentModal);
  }, [isModalOn, currentModal]);
  return (
    <Modal className={style.modal} isOpen={isModalOn}>
      {isModalOn && (
        <Button
          handleClick={() => {
            closeModal();
          }}
          className={style.modalCloseBtn}
          icon={LeftArrow}
        />
      )}

      {currentModal === "FlightOriginSearch" && <AirportSearchTemp />}
      {currentModal === "flightDates" && <FlightDateField />}
      {currentModal === "hotelPlaceSearch" && <PlaceSearchField />}
      {currentModal === "hotelDates" && <HotelDateField />}
    </Modal>
  );
};
export default SearchModal;
