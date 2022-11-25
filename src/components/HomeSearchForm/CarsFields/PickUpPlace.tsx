import { useCarsContext } from "../../CommonContexts/CarsContext";
import { useUIContext } from "../../UI";
import SearchField from "../../SearchField/SearchField";
import style from "../SearchForm.module.scss";
// import CarsSuggestions from "../../Suggestions/CarsSuggestions";
import CarsSuggestions from "../../Suggestions/HotelPlaceSuggestions";
import { LocationIcon } from "../../Icons";
import { useEffect, useState } from "react";
import HomeSearchField from "../SearchField";
function PickUpPlace() {
  const { setPickUpLocation, pickUpLocation } = useCarsContext();

  return (
    <HomeSearchField
      label="Pick-up place"
      placeholder="Search the place"
      icon={LocationIcon}
      value={pickUpLocation}
      Suggestions={CarsSuggestions}
      fieldName={"pickUpLocation"}
      setValue={({ suggestion, id }: any) => {
        setPickUpLocation(suggestion, id);
      }}
    />
  );
}
export default PickUpPlace;
