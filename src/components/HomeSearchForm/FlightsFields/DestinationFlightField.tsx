import style from "../../HomeSearchForm/SearchForm.module.scss";
import {FlyToIcon} from "../../Icons"; //prettier-ignore
import SearchField from "../../SearchField/SearchField";
import AirportsSuggestions from "../../Suggestions/AirportSuggestions";
import { useFlightContext } from "../../CommonContexts/FlightsContext";
import { useUIContext } from "../../UI";
import { useEffect, useState } from "react";
import useIsMobile from "../../../utils/useIsMobile";
import HomeSearchField from "../SearchField";
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
  }, [isMobile, activeField]);
  return (
    <HomeSearchField
      label="Flying to"
      placeholder="Destination airport"
      icon={FlyToIcon}
      value={to.name}
      setValue={({ suggestion, id }: any) => {
        setFlightDestination(suggestion, id);
      }}
      Suggestions={AirportsSuggestions}
      fieldName={"destinationFlightSearch"}
    />
  );
};

export default OriginFlightField;
