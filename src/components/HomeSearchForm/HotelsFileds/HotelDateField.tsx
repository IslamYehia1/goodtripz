import DateInput from "../../RangeDatePicker";
import { useHotelsContext } from "../../CommonContexts/HotelsContext";
import { DateIcon } from "../../Icons";
import style from "../../HomeSearchForm/SearchForm.module.scss";
const HotelDateField = () => {
  const { setCheckInDate, setCheckOutDate, checkIn, checkOut } = useHotelsContext();

  return (
    // <div ref={fieldRef}>
    <DateInput
      overlayClass={`${style.dateOverlay}`}
      className={`${style.searchFragment} ${style.dateSearchField}`}
      singleDateFieldClass={style.singleDateField}
      setFromDate={(date: any) => setCheckInDate(date.toISOString().substring(0, 10))}
      setToDate={(date: any) => setCheckOutDate(date.toISOString().substring(0, 10))}
      fromLabel="Check in"
      toLabel="Check out"
      range={true}
      icon={DateIcon}
      textFieldClass={style.textField}
      wrapperClass={style.textFieldWrapper}
      fromDate={checkIn}
      toDate={checkOut}
    />
    // </div>
  );
};

export default HotelDateField;
