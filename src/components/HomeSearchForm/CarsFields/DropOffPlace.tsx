import style from "../SearchForm.module.scss";
import { useUIContext } from "../../UI";
import { useCarsContext } from "../../CommonContexts/CarsContext";
import { useEffect, useState } from "react";
import { LocationIcon } from "../../Icons";
import SearchField from "../SearchField";
// import CarsSuggestions from "../../Suggestions/CarsSuggestions";
import CarsSuggestions from "../../Suggestions/HotelPlaceSuggestions";

function DropOffPlace() {
  const { activeField, setActiveField, setDropOffLocation, dropOffLocation } = useCarsContext();
  const { isModalOn } = useUIContext();
  const [isActive, setIsActive] = useState(false);

  return (
    <SearchField
      className={`${style.aSearchField} ${style.flightSearchField} ${
        isActive && isModalOn ? style.inModal : ""
      } `}
      inputClass={style.textField}
      wrapperClass={style.textFieldWrapper}
      suggestions={CarsSuggestions}
      onSuggestionSelect={({ suggestion, IATA }: any) => {
        setDropOffLocation(suggestion, IATA);
      }}
      onChange={(value: any) => {
        setDropOffLocation(value);
      }}
      isActive={activeField === "dropOffLocation"}
      onActivate={() => {
        if (setActiveField) setActiveField("dropOffLocation");
        // if (isMobile) openModal("originFlightSearch");
      }}
      onDeactivate={() => {
        if (setActiveField) setActiveField("");
        // if (isModalOn) closeModal();
      }}
      animate={{ flexGrow: activeField === "dropOffLocation" ? 5 : 2 }}
      value={dropOffLocation}
      label="Drop-off Location"
      placeholder="Where will you drop the car off?"
      name="flightDestination"
      icon={LocationIcon}
    />
  );
}
export default DropOffPlace;
