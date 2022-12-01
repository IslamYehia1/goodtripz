import {FlyToIcon} from "../../Icons"; //prettier-ignore
import AirportsSuggestions from "../../Suggestions/AirportSuggestions";
import { useFlightContext } from "../../CommonContexts/FlightsContext";

import HomeSearchField from "../SearchField";
const OriginFlightField = () => {
  const { setFlightDestination, to } = useFlightContext();

  return (
    <HomeSearchField
      label="Flying to"
      placeholder="Destination airport"
      icon={FlyToIcon}
      value={to.name && to.IATA && `${to.name} (${to.IATA})`}
      setValue={({ suggestion, id }: any) => {
        setFlightDestination(suggestion, id);
      }}
      Suggestions={AirportsSuggestions}
      fieldName={"destinationFlightSearch"}
    />
  );
};

export default OriginFlightField;
