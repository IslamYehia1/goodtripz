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
  const { isModalOn, activeField } = useUIContext();
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {}, [isActive]);
  useEffect(() => {
    if (activeField === "pickUpLocation") setIsActive(true);
    else setIsActive(false);
  }, [activeField]);
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
    // <SearchField
    //   className={`${style.searchFragment} ${style.aSearchField} ${style.flightSearchField} ${
    //     isActive && isModalOn ? style.inModal : ""
    //   } `}
    //   inputClass={style.textField}
    //   wrapperClass={style.textFieldWrapper}
    //   suggestionsClass={style.suggestions}
    //   suggestions={CarsSuggestions}
    //   onSuggestionSelect={({ suggestion, IATA }: any) => {
    //     setPickUpLocation(suggestion, IATA);
    //   }}
    //   onChange={(value: any) => {
    //     setPickUpLocation(value);
    //   }}
    //   isActive={activeField === "pickUpLocation"}
    //   onActivate={() => {
    //     if (setActiveField) setActiveField("pickUpLocation");
    //     // if (isMobile) openModal("originFlightSearch");
    //   }}
    //   onDeactivate={() => {
    //     if (setActiveField) setActiveField("");
    //     // if (isModalOn) closeModal();
    //   }}
    //   animate={{ flexGrow: activeField === "pickUpLocation" ? 5 : 2 }}
    //   value={pickUpLocation}
    //   label="Pick-up Location"
    //   placeholder="Search the place"
    //   name="flightDestination"
    //   icon={LocationIcon}
    // />
  );
}
export default PickUpPlace;
