import DateInput from "../RangeDatePicker";
import style from "../../../styles/SearchResults.module.scss";
import { hotelsSideBarT } from "./types";
import { useUIContext } from "../UI";
import { useHotelsContext } from "../CommonContexts/HotelsContext";
import SearchField from "../HomeSearchForm/SearchField";
import useIsMobile from "../../utils/useIsMobile";
import Suggestions from "../Suggestions/HotelPlaceSuggestions";
const CarsSideBar = (props: hotelsSideBarT) => {
  const { isModalOn, openModal, closeModal } = useUIContext();
  const {
    activeField,
    setActiveField,
    setHotelPlace,
    place,
    checkIn,
    checkOut,
    setCheckInDate,
    setCheckOutDate,
  } = useHotelsContext();
  const isMobile = useIsMobile();
  return (
    <>
      <div className={`${style.sideSection} ${style.searchTerms}`}>
        <SearchField
          value={place}
          label="Pick Up Location"
          placeholder={"Hotel place"}
          suggestions={Suggestions}
          name={"hotelPlaceSearch"}
          className={`${style.lilSearchField} ${style.lilHotelField}`}
          wrapperClass={style.textFieldWrapper}
          inputClass={style.searchInput}
          isActive={activeField === "dropOffLocation"}
          onChange={(place: string) => {
            setHotelPlace(place);
          }}
          onSuggestionSelect={({ suggestion }: { suggestion: string }) => {
            setHotelPlace(suggestion);
          }}
          onActivate={() => {
            if (isMobile) openModal("hotelPlaceSearch");
            if (setActiveField) setActiveField("hotelPlaceSearch");
          }}
          onDeactivate={() => {
            if (isModalOn) closeModal();
            if (setActiveField) setActiveField("");
          }}
        />
        <SearchField
          value={place}
          label="Drop Off Location"
          placeholder={"Hotel place"}
          suggestions={Suggestions}
          name={"dropOffLocation"}
          className={`${style.lilSearchField} ${style.lilHotelField}`}
          wrapperClass={style.textFieldWrapper}
          inputClass={style.searchInput}
          isActive={activeField === "dropOffLocation"}
          onChange={(place: string) => {
            setHotelPlace(place);
          }}
          onSuggestionSelect={({ suggestion }: { suggestion: string }) => {
            setHotelPlace(suggestion);
          }}
          onActivate={() => {
            if (isMobile) openModal("dropOffLocation");
            if (setActiveField) setActiveField("dropOffLocation");
          }}
          onDeactivate={() => {
            if (isModalOn) closeModal();
            if (setActiveField) setActiveField("");
          }}
        />
        <DateInput
          activeField={activeField}
          onActivate={(field: any) => {
            if (isMobile) openModal("carsDates");
            if (setActiveField) setActiveField(field);
          }}
          onDeActivate={() => {
            if (isModalOn) closeModal();
            if (setActiveField) setActiveField("");
          }}
          setFromDate={(date: any) => setCheckInDate(date.toISOString().substring(0, 10))}
          setToDate={(date: any) => setCheckOutDate(date.toISOString().substring(0, 10))}
          fromLabel="Pick-up"
          toLabel="Drop-off"
          range={true}
          textFieldClass={style.textField}
          className={style.dateRangeWrapper}
          wrapperClass={style.lilSearchField}
          fromDate={checkIn}
          toDate={checkOut}
        />
      </div>
      {!isMobile && (
        <>
          <div className={`${style.sideSection} ${style.priceRange}`}>
            <span>Price range</span>
            <input type="range" min="1" max="100" className="priceSlider" />
          </div>
          <div className={`${style.sideSection} ${style.addExtra}`}>
            <div className={style.addHotel}>
              <input type="checkbox" name="addHotel" />
              <label htmlFor="addHotel">Add hotel</label>
            </div>
            <div className={style.addCar}>
              <input type="checkbox" name="addCar" />
              {/* <label htmlFor="addCar">Add car</label> */}
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default CarsSideBar;
