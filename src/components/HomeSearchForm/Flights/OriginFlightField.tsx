import style from "../../HomeSearchForm/SearchForm.module.scss";
import {FlyFromIcon} from "../../Icons"; //prettier-ignore
import SearchField from "../../HomeSearchForm/SearchField";
import AirportsSuggestions from "../../Suggestions/AirportSuggestions";
import { useFlightContext } from "../../HomeSearchForm/FlightsContext";
import { useEffect, useState } from "react";
import useIsMobile from "../../../utils/useIsMobile";
import { useUIContext } from "../../UI";
const OriginFlightField = () => {
  const { setFlightOrigin, from, activeField, setActiveField } = useFlightContext();
  const { openModal, closeModal, isModalOn } = useUIContext();
  const isMobile = useIsMobile();
  return (
    <SearchField
      className={`${style.aSearchField} ${style.flightSearchField}`}
      inputClass={style.textField}
      wrapperClass={style.textFieldWrapper}
      suggestions={AirportsSuggestions}
      onSuggestionSelect={({ suggestion, IATA }: any) => {
        setFlightOrigin(suggestion, IATA);
      }}
      onChange={(value: any) => {
        setFlightOrigin(value);
      }}
      isActive={activeField === "origin"}
      onActivate={() => {
        if (setActiveField) setActiveField("origin");
        if (isMobile) openModal("FlightOriginSearch");
      }}
      onDeactivate={() => {
        if (setActiveField) setActiveField("");
        if (isModalOn) closeModal();
      }}
      value={from.name}
      label="Flying to"
      placeholder="Destination airport"
      name="flightDestination"
      icon={FlyFromIcon}
    />
  );
};

export default OriginFlightField;
