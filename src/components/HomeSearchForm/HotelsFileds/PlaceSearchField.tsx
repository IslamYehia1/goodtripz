import Suggestions from "../../Suggestions/HotelPlaceSuggestions";
import { useHotelsContext } from "../../CommonContexts/HotelsContext";
import { HotelIcon } from "../../Icons";
import HomeSearchField from "../SearchField";
const PlaceSearchField = (props: any) => {
  const { setHotelPlace, setActiveField, activeField, place } = useHotelsContext();

  return (
    <HomeSearchField
      label="Going to"
      placeholder="Destination airport"
      icon={HotelIcon}
      value={place}
      Suggestions={Suggestions}
      fieldName={"hotelPlaceSearch"}
      setValue={({ suggestion, id }: any) => {
        setHotelPlace(suggestion);
      }}
    />
  );
};
export default PlaceSearchField;
