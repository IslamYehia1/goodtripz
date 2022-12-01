import {FlyFromIcon} from "../../Icons"; //prettier-ignore
import AirportsSuggestions from "../../Suggestions/AirportSuggestions";
import { useFlightContext } from "../../CommonContexts/FlightsContext";
import HomeSearchField from "../SearchField";
const OriginFlightField = () => {
  const { setFlightOrigin, from } = useFlightContext();
  return (
    <HomeSearchField
      label="Flying from"
      placeholder="Origin airport"
      icon={FlyFromIcon}
      value={from.name && from.IATA && `${from.name} (${from.IATA})`}
      Suggestions={AirportsSuggestions}
      fieldName={"originFlightSearch"}
      setValue={({ suggestion, id }: any) => {
        setFlightOrigin(suggestion, id);
      }}
    />
  );
};

export default OriginFlightField;
