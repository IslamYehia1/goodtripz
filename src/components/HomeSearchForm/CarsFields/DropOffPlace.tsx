import style from "../SearchForm.module.scss";
import { useUIContext } from "../../UI";
import { useCarsContext } from "../../CommonContexts/CarsContext";
import { useEffect, useState } from "react";
import { LocationIcon } from "../../Icons";
import SearchField from "../../SearchField/SearchField";
// import CarsSuggestions from "../../Suggestions/CarsSuggestions";
import CarsSuggestions from "../../Suggestions/HotelPlaceSuggestions";
import HomeSearchField from "../SearchField";

function DropOffPlace() {
  const { setDropOffLocation, dropOffLocation } = useCarsContext();

  return (
    <HomeSearchField
      label="Drop-off place "
      placeholder="Going to"
      icon={LocationIcon}
      value={dropOffLocation}
      Suggestions={CarsSuggestions}
      fieldName={"dropOffLocation"}
      setValue={({ suggestion, id }: any) => {
        setDropOffLocation(suggestion, id);
      }}
    />
  );
}
export default DropOffPlace;
