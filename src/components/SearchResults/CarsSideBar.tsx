import DateInput from "../RangeDatePicker";
import style from "../../../styles/SearchResults.module.scss";
import { hotelsSideBarT } from "./types";
import { useUIContext } from "../UI";
import { useCarsContext } from "../CommonContexts/CarsContext";
import SearchField from "../HomeSearchForm/SearchField";
import useIsMobile from "../../utils/useIsMobile";
import Suggestions from "../Suggestions/HotelPlaceSuggestions";
import { useEffect } from "react";
const CarsSideBar = (props: hotelsSideBarT) => {
  const { isModalOn, openModal, closeModal } = useUIContext();
  const {
    activeField,
    setActiveField,
    setPickUpLocation,
    pickUpLocation,
    setDropOffLocation,
    dropOffLocation,
    setPickUpDate,
    setDropOffDate,
    pickUpDate,
    dropOffDate,
  } = useCarsContext();

  const isMobile = useIsMobile();

  useEffect(() => {
    if (activeField && isMobile) {
      openModal(activeField);
    } else {
      closeModal();
    }
  }, [isMobile, activeField]);
  useEffect(() => {
    if (isMobile && !isModalOn) {
      setActiveField("");
    }
  }, [isMobile, isModalOn]);

  return (
    <>
      <div className={`${style.sideSection} ${style.searchTerms}`}>
        <SearchField
          value={pickUpLocation}
          label="Drop Off Location"
          placeholder={"Hotel place"}
          name={"pickUpLocation"}
          className={`${style.lilSearchField} ${style.lilHotelField}`}
          wrapperClass={style.textFieldWrapper}
          inputClass={style.searchInput}
          isActive={activeField === "pickUpLocation"}
          suggestions={Suggestions}
          onSuggestionSelect={({ suggestion, IATA }: any) => {
            setPickUpLocation(suggestion, IATA);
          }}
          onChange={(value: any) => {
            setPickUpLocation(value);
          }}
          onActivate={() => {
            if (setActiveField) setActiveField("pickUpLocation");
            // if (isMobile) openModal("originFlightSearch");
          }}
          onDeactivate={() => {
            if (setActiveField) setActiveField("");
            // if (isModalOn) closeModal();
          }}
        />
        <SearchField
          value={dropOffLocation}
          label="Drop Off Location"
          placeholder={"Hotel place"}
          name={"dropOffLocation"}
          className={`${style.lilSearchField} ${style.lilHotelField}`}
          wrapperClass={style.textFieldWrapper}
          inputClass={style.searchInput}
          isActive={activeField === "dropOffLocation"}
          suggestions={Suggestions}
          onSuggestionSelect={({ suggestion, IATA }: any) => {
            setDropOffLocation(suggestion, IATA);
          }}
          onChange={(value: any) => {
            setDropOffLocation(value);
          }}
          onActivate={() => {
            if (setActiveField) setActiveField("dropOffLocation");
            // if (isMobile) openModal("originFlightSearch");
          }}
          onDeactivate={() => {
            if (setActiveField) setActiveField("");
            // if (isModalOn) closeModal();
          }}
        />
        <DateInput
          isActive={activeField === "carsDates"}
          onActivate={(field: any) => {
            if (setActiveField) setActiveField("carsDates");
          }}
          onDeactivate={() => {
            if (setActiveField) setActiveField("");
          }}
          setFromDate={(date: any) => setPickUpDate(date.toISOString().substring(0, 10))}
          setToDate={(date: any) => setDropOffDate(date.toISOString().substring(0, 10))}
          fromLabel="Pick-up"
          toLabel="Drop-off"
          range={true}
          singleDateFieldClass={style.singleDateField}
          textFieldClass={style.textField}
          className={`${style.dateRangeWrapper}`}
          wrapperClass={`${style.lilSearchField} ${style.dateRangeWrapper}`}
          fromDate={pickUpDate}
          toDate={dropOffDate}
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
