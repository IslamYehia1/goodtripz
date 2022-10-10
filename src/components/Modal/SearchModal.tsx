import Modal from "./Modal";
import { searchModalProps } from "./types";
import Button from "../Button/Button";
import { useEffect, useState } from "react";
import { LeftArrow } from "../Icons";
import style from "./Modal.module.scss";
import { useUIContext } from "../UI/index";
import OriginFlightField from "../HomeSearchForm/FlightsFields/OriginFlightField";
import DestinationFlightField from "../HomeSearchForm/FlightsFields/DestinationFlightField";
import FlightDateField from "../HomeSearchForm/FlightsFields/FlightDateFIeld";
import PlaceSearchField from "../HomeSearchForm/HotelsFileds/PlaceSearchField";
import HotelDateField from "../HomeSearchForm/HotelsFileds/HotelDateField";
import TravellersOptions from "../HomeSearchForm/FlightsFields/TravellersOptions";
import FlightTypeOptions from "../HomeSearchForm/FlightsFields/FlightTypeOptions";
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

      {currentModal === "originFlightSearch" && <OriginFlightField />}
      {currentModal === "destinationFlightSearch" && <DestinationFlightField />}
      {currentModal === "flightDates" && <FlightDateField />}
      {currentModal === "hotelPlaceSearch" && <PlaceSearchField />}
      {currentModal === "hotelDates" && <HotelDateField />}
      {currentModal === "travellersOptions" && <TravellersOptions />}
      {currentModal === "flightTypeOptions" && <FlightTypeOptions />}
    </Modal>
  );
};
export default SearchModal;
