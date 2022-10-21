import SearchField from "../SearchField";
import style from "../SearchForm.module.scss";
import Suggestions from "../../Suggestions/HotelPlaceSuggestions";
import { useHotelsContext } from "../../CommonContexts/HotelsContext";
import { useUIContext } from "../../UI";
import useIsMobile from "../../../utils/useIsMobile";
import { HotelIcon } from "../../Icons";
const PlaceSearchField = (props: any) => {
  const { setHotelPlace, setActiveField, activeField } = useHotelsContext();
  const { isModalOn, openModal, closeModal } = useUIContext();
  const isMobile = useIsMobile();
  return (
    <SearchField
      isActive={activeField === "hotelPlaceSearch"}
      // ${style.aSearchField}
      className={`${style.searchFragment} ${style.hotelSearchField} ${
        activeField == "hotelPlaceSearch" && isModalOn ? style.inModal : ""
      }`}
      wrapperClass={style.textFieldWrapper}
      inputClass={style.textField}
      icon={HotelIcon}
      label={"Going to"}
      placeholder="Hotel location"
      name={"hotelLocation"}
      // animate={{ flexGrow: activeField === "destination" ? 5 : 2 }}
      suggestions={Suggestions}
      onChange={(place: string) => {
        setHotelPlace(place);
      }}
      onSuggestionSelect={({ suggestion }: { suggestion: string }) => {
        setHotelPlace(suggestion);
      }}
      onActivate={() => {
        if (isMobile) openModal("hotelPlaceSearch");
        setActiveField("hotelPlaceSearch");
      }}
      onDeactivate={() => {
        // if (isModalOn) closeModal();
        setActiveField("");
      }}
    />
  );
};
export default PlaceSearchField;
