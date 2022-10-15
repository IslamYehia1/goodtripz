import style from "../../HomeSearchForm/SearchForm.module.scss";
import {FlyFromIcon} from "../../Icons"; //prettier-ignore
import SearchField from "../SearchField";
import AirportsSuggestions from "../../Suggestions/AirportSuggestions";
import { useFlightContext } from "../../CommonContexts/FlightsContext";
import { useEffect, useState } from "react";
import useIsMobile from "../../../utils/useIsMobile";
import { useUIContext } from "../../UI";
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
  }, [activeField]);
  return (
    <SearchField
      className={`${style.aSearchField} ${style.flightSearchField} ${
        isActive && isModalOn ? style.inModal : ""
      } `}
      inputClass={style.textField}
      wrapperClass={style.textFieldWrapper}
      suggestions={AirportsSuggestions}
      onSuggestionSelect={({ suggestion, IATA }: any) => {
        setFlightOrigin(suggestion, IATA);
      }}
      onChange={(value: any) => {
        setFlightOrigin(value);
      }}
      isActive={activeField === "originFlightSearch"}
      onActivate={() => {
        if (setActiveField) setActiveField("originFlightSearch");
        // if (isMobile) openModal("originFlightSearch");
      }}
      onDeactivate={() => {
        if (setActiveField) setActiveField("");
        // if (isModalOn) closeModal();
      }}
      animate={{ flexGrow: activeField === "originFlightSearch" ? 5 : 2 }}
      value={from.name}
      label="Flying from"
      placeholder="Origin airport"
      name="flightDestination"
      icon={FlyFromIcon}
    />
  );
};

export default OriginFlightField;
