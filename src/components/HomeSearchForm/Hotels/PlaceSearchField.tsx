import SearchField from "../SearchField";
import style from "../SearchForm.module.scss";
import Suggestions from "../../Suggestions/HotelPlaceSuggestions";
import { useHotelsContext } from "../HotelsContext";
import { useUIContext } from "../../UI";
import useIsMobile from "../../../utils/useIsMobile";
const PlaceSearchField = (props: any) => {
  const { setHotelPlace, setActiveField, activeField } = useHotelsContext();
  const { isModalOn, openModal, closeModal } = useUIContext();
  const isMobile = useIsMobile();
  return (
    <SearchField
      isActive={activeField === "hotelPlace"}
      className={`${style.aSearchField} ${style.hotelSearchField}`}
      wrapperClass={style.textFieldWrapper}
      inputClass={style.textField}
      label={"Going to"}
      placeholder="Hotel location"
      name={"hotelLocation"}
      suggestions={Suggestions}
      onChange={(place: string) => {
        setHotelPlace(place);
      }}
      onSuggestionSelect={({ suggestion }: { suggestion: string }) => {
        setHotelPlace(suggestion);
      }}
      onActivate={() => {
        console.log("SHOULD OPEN");
        if (isMobile) openModal("hotelPlaceSearch");
        setActiveField("hotelPlace");
      }}
      onDeactivate={() => {
        if (isModalOn) closeModal();
        setActiveField("");
      }}
    />
  );
};
export default PlaceSearchField;
