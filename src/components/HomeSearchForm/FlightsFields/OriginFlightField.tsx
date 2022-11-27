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
  const { setFlightOrigin, from } = useFlightContext();
  return (
    <HomeSearchField
      label="Flying from"
      placeholder="Origin airport"
      icon={FlyFromIcon}
      value={`${from.name} (${from.IATA})`}
      Suggestions={AirportsSuggestions}
      fieldName={"originFlightSearch"}
      setValue={({ suggestion, id }: any) => {
        setFlightOrigin(suggestion, id);
      }}
    />
  );
};

export default OriginFlightField;
