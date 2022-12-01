import DateInput from "../../RangeDatePicker";
import style from "../SearchResults.module.scss";
import { hotelsSideBarT } from "../types";
import { useUIContext } from "../../UI";
import { useHotelsContext } from "../../CommonContexts/HotelsContext";
import useIsMobile from "src/utils/useIsMobile";
import { useEffect } from "react";
import ResultsSearchField from "../SearchField";
import SidebarSections from "../SideSections";
import { useRouter } from "next/router";
const HotelsSideBar = (props: hotelsSideBarT) => {
  const { setHotelPlace, place, checkIn, checkOut, setCheckInDate, setCheckOutDate } =
    useHotelsContext();
  const isMobile = useIsMobile();
  const router = useRouter();
  const query = router.query;
  useEffect(() => {
    if (router.query.place) setHotelPlace(router.query.place);
  }, [query]);
  return (
    <>
      <div className={`${style.sideSection} ${style.searchTerms}`}>
        <ResultsSearchField
          label="Going to"
          placeholder="Hotel place"
          fieldName="hotelPlaceSearch"
          value={place}
          setValue={(value: any) => {
            setHotelPlace(value);
          }}
        />

        <DateInput
          setFromDate={(date: any) => setCheckInDate(date.toISOString().substring(0, 10))}
          setToDate={(date: any) => setCheckOutDate(date.toISOString().substring(0, 10))}
          fromLabel="Check in"
          toLabel="Check out"
          range={true}
          textFieldClass={style.textField}
          className={style.dateRangeWrapper}
          wrapperClass={`${style.lilSearchField} ${style.dateRangeWrapper}`}
          singleDateFieldClass={style.singleDateField}
          // activeField == "flightDates" && isModalOn ? style.inModal : ""
          overlayClass={`${style.dateOverlay}`}
          // className={`${style.dateRangeWrapper}`}
          fromDate={checkIn}
          toDate={checkOut}
        />
      </div>
      {/* {!isMobile && (
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
              <label htmlFor="addCar">Add car</label>
            </div>
          </div>
        </>
      )} */}
      <SidebarSections />
    </>
  );
};
export default HotelsSideBar;
