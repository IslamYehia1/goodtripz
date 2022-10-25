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
import SidebarSections from "../SearchResults/SideSections";
import PlaceSearchField from "../HomeSearchForm/HotelsFileds/PlaceSearchField";
import HotelDateField from "../HomeSearchForm/HotelsFileds/HotelDateField";
import TravellersOptions from "../HomeSearchForm/FlightsFields/TravellersOptions";
import FlightTypeOptions from "../HomeSearchForm/FlightsFields/FlightTypeOptions";
import HotelsTravellersOptions from "../HomeSearchForm/HotelsFileds/TravellersOptions";
import PickUpPlace from "../HomeSearchForm/CarsFields/PickUpPlace";
import DropOffPlace from "../HomeSearchForm/CarsFields/DropOffPlace";
import CarsDates from "../HomeSearchForm/CarsFields/CarsDates";
const SearchModal = (props: searchModalProps) => {
  const { isModalOn, currentModal, closeModal } = useUIContext();

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
      {currentModal === "sidebarSections" && <SidebarSections />}
      {currentModal === "hotelPlaceSearch" && <PlaceSearchField />}
      {currentModal === "hotelsDates" && <HotelDateField />}
      {currentModal === "flightTravellersOptions" && <TravellersOptions />}
      {currentModal === "hotelsTravellersOptions" && <HotelsTravellersOptions />}
      {currentModal === "flightTypeOptions" && <FlightTypeOptions />}
      {currentModal === "pickUpLocation" && <PickUpPlace />}
      {currentModal === "dropOffLocation" && <DropOffPlace />}
      {currentModal === "carsDates" && <CarsDates />}
    </Modal>
  );
};
export default SearchModal;
