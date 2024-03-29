import DateInput from "../../RangeDatePicker";
import style from "../SearchResults.module.scss";
import { hotelsSideBarT } from "../types";
import { useUIContext } from "../../UI";
import { useCarsContext } from "../../CommonContexts/CarsContext";
import useIsMobile from "src/utils/useIsMobile";
import ResultsSearchField from "../SearchField";
import { useEffect } from "react";
const CarsSideBar = (props: hotelsSideBarT) => {
  const {
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
