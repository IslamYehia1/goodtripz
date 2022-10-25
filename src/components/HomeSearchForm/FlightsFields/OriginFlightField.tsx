import style from "../../HomeSearchForm/SearchForm.module.scss";
import {FlyFromIcon} from "../../Icons"; //prettier-ignore
import SearchField from "../../SearchField/SearchField";
import AirportsSuggestions from "../../Suggestions/AirportSuggestions";
import { useFlightContext } from "../../CommonContexts/FlightsContext";
import { useEffect, useState } from "react";
import useIsMobile from "../../../utils/useIsMobile";
import { useUIContext } from "../../UI";
import HomeSearchField from "../SearchField";
const OriginFlightField = () => {
  const { setFlightOrigin, from, activeField, setActiveField } = useFlightContext();
  const { openModal, closeModal, isModalOn } = useUIContext();
  const isMobile = useIsMobile();
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    if (activeField === "originFlightSearch") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [activeField, setActiveField]);
  useEffect(() => {}, [isModalOn, isActive]);
  return (
    <HomeSearchField
      label="Flying from"
      placeholder="Origin airport"
      icon={FlyFromIcon}
      value={from.name}
      Suggestions={AirportsSuggestions}
      fieldName={"originFlightSearch"}
      setValue={({ suggestion, id }: any) => {
        setFlightOrigin(suggestion, id);
      }}
    />
    // <SearchField
    //   // ${style.aSearchField}
    //   className={`${style.searchFragment} ${style.flightSearchField} ${
    //     isActive && isModalOn ? style.inModal : ""
    //   } `}
    //   inputClass={style.textField}
    //   wrapperClass={style.textFieldWrapper}
    //   suggestions={AirportsSuggestions}
    //   suggestionsClass={style.suggestions}
    //   onSuggestionSelect={({ suggestion, IATA }: any) => {
    //     setFlightOrigin(suggestion, IATA);
    //   }}
    //   onChange={(value: any) => {
    //     setFlightOrigin(value);
    //   }}
    //   isActive={isActive}
    //   onActivate={() => {
    //     if (setActiveField) setActiveField("originFlightSearch");
    //     // if (isMobile) openModal("originFlightSearch");
    //   }}
    //   onDeactivate={() => {
    //     if (setActiveField) setActiveField("");
    //     // if (isModalOn) closeModal();
    //   }}
    //   animate={{ flexGrow: isActive ? 5 : 2 }}
    //   value={from.name}
    //   label="Flying from"
    //   placeholder="Origin airport"
    //   icon={FlyFromIcon}
    //   name="flightDestination"
    // />
  );
};

export default OriginFlightField;
