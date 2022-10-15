import style from "../../HomeSearchForm/SearchForm.module.scss";
import {FlyToIcon} from "../../Icons"; //prettier-ignore
import SearchField from "../SearchField";
import AirportsSuggestions from "../../Suggestions/AirportSuggestions";
import { useFlightContext } from "../../CommonContexts/FlightsContext";
import { useUIContext } from "../../UI";
import { useEffect, useState } from "react";
import useIsMobile from "../../../utils/useIsMobile";
const OriginFlightField = () => {
  const { setFlightDestination, to, activeField, setActiveField } = useFlightContext();
  const { isModalOn, openModal, closeModal, currentModal } = useUIContext();
  const isMobile = useIsMobile();
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    if (activeField === "destinationFlightSearch") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [isMobile]);
  return (
    <SearchField
      className={`${style.aSearchField} ${style.flightSearchField} ${
        isActive && isModalOn ? style.inModal : ""
      } `}
      animate={{ flexGrow: isActive ? 5 : 2 }}
      inputClass={style.textField}
      wrapperClass={style.textFieldWrapper}
      suggestions={AirportsSuggestions}
      onSuggestionSelect={({ suggestion, IATA }: any) => {
        setFlightDestination(suggestion, IATA);
      }}
      onChange={(value: any) => {
        setFlightDestination(value);
      }}
      isActive={isActive}
      onActivate={() => {
        setActiveField("destinationFlightSearch");
        // if (isMobile) openModal("destinationFlightSear ch");
      }}
      onDeactivate={() => {
        // if (isModalOn) closeModal();
        setActiveField("");
      }}
      value={to.name}
      label="Flying to"
      placeholder="Destination airport"
      name="flightOrigin"
      icon={FlyToIcon}
    />
  );
};

export default OriginFlightField;
