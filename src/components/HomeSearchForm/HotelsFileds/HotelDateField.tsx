import DateInput from "../../RangeDatePicker";
import { useHotelsContext } from "../../CommonContexts/HotelsContext";
import { useUIContext } from "../../UI";
import useIsMobile from "../../../utils/useIsMobile";
import { DateIcon } from "../../Icons";
import style from "../../HomeSearchForm/SearchForm.module.scss";
import useOutsideClick from "../../../utils/useOutsideClick";
const HotelDateField = () => {
  const { activeField, setActiveField, setCheckInDate, setCheckOutDate, checkIn, checkOut } =
    useHotelsContext();
  const { isModalOn, openModal, closeModal } = useUIContext();
  const isMobile = useIsMobile();
  // const fieldRef: any = useOutsideClick(activeField == "hotelsDates", () => {
  //   setActiveField("");
  // });
  return (
    // <div ref={fieldRef}>
    <DateInput
      isActive={activeField == "hotelsDates"}
      overlayClass={`${style.dateOverlay} ${
        activeField == "hotelsDates" && isModalOn ? style.inModal : ""
      }`}
      className={`${style.searchFragment} ${style.dateSearchField} ${
        activeField == "hotelsDates" && isModalOn ? style.inModal : ""
      }`}
      singleDateFieldClass={style.singleDateField}
      onActivate={(field: any) => {
        // if (isMobile) openModal("hotelDates");
        setActiveField("hotelsDates");
      }}
      onDeactivate={() => {
        // if (isModalOn) closeModal();
        setActiveField("");
      }}
      setFromDate={(date: any) => setCheckInDate(date.toISOString().substring(0, 10))}
      setToDate={(date: any) => setCheckOutDate(date.toISOString().substring(0, 10))}
      fromLabel="Check in"
      toLabel="Check out"
      range={true}
      icon={DateIcon}
      textFieldClass={style.textField}
      // className={`${style.aSearchField} ${style.flightSearchField} ${style.dateSearchField} ${
      //   activeField == "hotelsDates" && isModalOn ? style.inModal : ""
      // }`}
      wrapperClass={style.textFieldWrapper}
      fromDate={checkIn}
      toDate={checkOut}
    />
    // </div>
  );
};

export default HotelDateField;
