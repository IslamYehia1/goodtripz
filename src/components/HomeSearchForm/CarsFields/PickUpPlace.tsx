import { useCarsContext } from "../../CommonContexts/CarsContext";
import { useUIContext } from "../../UI";
import SearchField from "../SearchField";
import style from "../SearchForm.module.scss";
// import CarsSuggestions from "../../Suggestions/CarsSuggestions";
import CarsSuggestions from "../../Suggestions/HotelPlaceSuggestions";
import { LocationIcon } from "../../Icons";
import { useEffect, useState } from "react";

function PickUpPlace() {
  const { activeField, setActiveField, setPickUpLocation, pickUpLocation } = useCarsContext();
  const { isModalOn } = useUIContext();
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    if (activeField === "pickUpLocation") setIsActive(true);
  }, [activeField]);
  return (
    <SearchField
      className={`${style.aSearchField} ${style.flightSearchField} ${
        isActive && isModalOn ? style.inModal : ""
      } `}
      inputClass={style.textField}
      wrapperClass={style.textFieldWrapper}
      suggestions={CarsSuggestions}
      onSuggestionSelect={({ suggestion, IATA }: any) => {
        setPickUpLocation(suggestion, IATA);
      }}
      onChange={(value: any) => {
        setPickUpLocation(value);
      }}
      isActive={activeField === "pickUpLocation"}
      onActivate={() => {
        if (setActiveField) setActiveField("pickUpLocation");
        // if (isMobile) openModal("originFlightSearch");
      }}
      onDeactivate={() => {
        if (setActiveField) setActiveField("");
        // if (isModalOn) closeModal();
      }}
      animate={{ flexGrow: activeField === "pickUpLocation" ? 5 : 2 }}
      value={pickUpLocation}
      label="Pick-up Location"
      placeholder="Where do you want the car from?"
      name="flightDestination"
      icon={LocationIcon}
    />
  );
}
export default PickUpPlace;
