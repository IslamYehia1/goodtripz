import DateInput from "../../RangeDatePicker";
import style from "../../../styles/SearchResults.module.scss";
import { hotelsSideBarT } from "../types";
import { useUIContext } from "../../UI";
import { useCarsContext } from "../../CommonContexts/CarsContext";
import useIsMobile from "../../../utils/useIsMobile";
import ResultsSearchField from "../SearchField";
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
        <ResultsSearchField
          label="Pick-up Location"
          placeholder="Search the place"
          fieldName="pickUpLocation"
          value={pickUpLocation}
          setValue={(value: any) => {
            setPickUpLocation(value);
          }}
        />
        <ResultsSearchField
          label="Drop-Off Location"
          placeholder="Search the place"
          fieldName="dropOffLocation"
          value={dropOffLocation}
          setValue={(value: any) => {
            setDropOffLocation(value);
          }}
        />

        <DateInput
          setFromDate={(date: any) => setPickUpDate(date.toISOString().substring(0, 10))}
          setToDate={(date: any) => setDropOffDate(date.toISOString().substring(0, 10))}
          fromLabel="Pick-up"
          toLabel="Drop-off"
          range={true}
          singleDateFieldClass={style.singleDateField}
          textFieldClass={style.textField}
          className={`${style.dateRangeWrapper}`}
          wrapperClass={`${style.lilSearchField} ${style.dateRangeWrapper}`}
          overlayClass={`${style.dateOverlay}`}
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
