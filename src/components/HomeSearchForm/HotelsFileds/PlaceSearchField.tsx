import SearchField from "../../SearchField/SearchField";
import style from "../SearchForm.module.scss";
import Suggestions from "../../Suggestions/HotelPlaceSuggestions";
import { useHotelsContext } from "../../CommonContexts/HotelsContext";
import { useUIContext } from "../../UI";
import useIsMobile from "../../../utils/useIsMobile";
import { HotelIcon } from "../../Icons";
import HomeSearchField from "../SearchField";
const PlaceSearchField = (props: any) => {
  const { setHotelPlace, setActiveField, activeField, place } = useHotelsContext();
  const { isModalOn, openModal, closeModal } = useUIContext();
  const isMobile = useIsMobile();
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
    // <SearchField
    //   isActive={activeField === "hotelPlaceSearch"}
    //   // ${style.aSearchField}
    //   className={`${style.searchFragment} ${style.hotelSearchField} ${
    //     activeField == "hotelPlaceSearch" && isModalOn ? style.inModal : ""
    //   }`}
    //   wrapperClass={style.textFieldWrapper}
    //   inputClass={style.textField}
    //   icon={HotelIcon}
    //   label={"Going to"}
    //   placeholder="Hotel location"
    //   name={"hotelLocation"}
    //   // animate={{ flexGrow: activeField === "destination" ? 5 : 2 }}
    //   suggestions={Suggestions}
    //   suggestionsClass={style.suggestions}
    //   onChange={(place: string) => {
    //     setHotelPlace(place);
    //   }}
    //   onSuggestionSelect={({ suggestion }: { suggestion: string }) => {
    //     setHotelPlace(suggestion);
    //   }}
    //   onActivate={() => {
    //     if (isMobile) openModal("hotelPlaceSearch");
    //     setActiveField("hotelPlaceSearch");
    //   }}
    //   onDeactivate={() => {
    //     // if (isModalOn) closeModal();
    //     setActiveField("");
    //   }}
    // />
  );
};
export default PlaceSearchField;
