import { useCarsContext } from "../../CommonContexts/CarsContext";
import SearchField from "../../SearchField/SearchField";
import style from "../SearchForm.module.scss";
import { useUIContext } from "../../UI";
import { useEffect, useState } from "react";
import { LocationIcon } from "../../Icons";

// import CarTimeSuggestions from "../../Suggestions/CarTimeSuggestions";
import CarTimeSuggestions from "../../Suggestions/HotelPlaceSuggestions";
function CarsTime() {
  const { pickUpTime, setPickUpTime, activeField, setActiveField } = useCarsContext();

  return (
    <SearchField
      className={`${style.aSearchField} ${style.flightSearchField} `}
      inputClass={style.textField}
      wrapperClass={style.textFieldWrapper}
      suggestions={CarTimeSuggestions}
      onSuggestionSelect={({ suggestion, IATA }: any) => {
        setPickUpTime(suggestion, IATA);
      }}
      onChange={(value: any) => {
        setPickUpTime(value);
      }}
      //   animate={{ flexGrow: activeField === "carPickupTime" ? 5 : 2 }}
      value={pickUpTime}
      label="Drop-off Location"
      placeholder="Enter location"
      name="flightDestination"
      icon={LocationIcon}
    />
  );
}

export default CarsTime;
