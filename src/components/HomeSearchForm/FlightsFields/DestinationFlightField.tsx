import style from "../../HomeSearchForm/SearchForm.module.scss";
import {FlyToIcon} from "../../Icons"; //prettier-ignore
import SearchField from "../SearchField";
import AirportsSuggestions from "../../Suggestions/AirportSuggestions";
import { useFlightContext } from "../../CommonContexts/FlightsContext";
import { useUIContext } from "../../UI";
import { useEffect, useState } from "react";
import useIsMobile from "../../../utils/useIsMobile";
const OriginFlightField = () => {
  const { setFlightDestination, to, activeField, setActiveField } = useFlightContext();
  const { isModalOn, openModal, closeModal } = useUIContext();
  const isMobile = useIsMobile();
  return (
    <SearchField
      className={`${style.aSearchField} ${style.flightSearchField} ${
        isModalOn ? style.inModal : ""
      } `}
      inputClass={style.textField}
      wrapperClass={style.textFieldWrapper}
      suggestions={AirportsSuggestions}
      onSuggestionSelect={({ suggestion, IATA }: any) => {
        setFlightDestination(suggestion, IATA);
      }}
      onChange={(value: any) => {
        setFlightDestination(value);
      }}
      isActive={activeField === "destination"}
      onActivate={() => {
        setActiveField("destination");
        if (isMobile) openModal("destinationFlightSearch");
      }}
      onDeactivate={() => {
        if (isModalOn) closeModal();
        setActiveField("");
      }}
      value={to.name}
      label="Flying to"
      placeholder="Destination airport"
      name="flightOrigin"
      icon={FlyToIcon}
    />
  );
};

export default OriginFlightField;
