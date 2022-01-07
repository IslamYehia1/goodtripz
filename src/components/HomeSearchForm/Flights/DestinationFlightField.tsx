import style from "../../HomeSearchForm/SearchForm.module.scss";
import {FlyToIcon} from "../../Icons"; //prettier-ignore
import SearchField from "../../HomeSearchForm/SearchField";
import AirportsSuggestions from "../../Suggestions/AirportSuggestions";
import { useFlightContext } from "../../HomeSearchForm/FlightsContext";
import { useEffect, useState } from "react";
const OriginFlightField = () => {
  const { setFlightDestination, to, activeField, setActiveField } = useFlightContext();
  return (
    <SearchField
      className={`${style.aSearchField} ${style.flightSearchField}`}
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
      }}
      onDeactivate={() => {
        setActiveField("");
      }}
      value={to.name}
      label="Flying from"
      placeholder="Departure airport"
      name="flightOrigin"
      icon={FlyToIcon}
    />
  );
};

export default OriginFlightField;
