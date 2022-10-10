import DateInput from "../../RangeDatePicker";
import { useHotelsContext } from "../../CommonContexts/HotelsContext";
import { useUIContext } from "../../UI";
import useIsMobile from "../../../utils/useIsMobile";
import { DateIcon } from "../../Icons";
import style from "../../HomeSearchForm/SearchForm.module.scss";
const HotelDateField = () => {
  const { activeField, setActiveField, setCheckInDate, setCheckOutDate, checkIn, checkOut } =
    useHotelsContext();
  const { isModalOn, openModal, closeModal } = useUIContext();
  const isMobile = useIsMobile();
  return (
    <DateInput
      activeField={activeField}
      onActivate={(field) => {
        if (isMobile) openModal("hotelDates");
        setActiveField(field);
      }}
      onDeActivate={() => {
        if (isModalOn) closeModal();
        setActiveField("");
      }}
      setFromDate={(date) => setCheckInDate(date.toISOString().substring(0, 10))}
      setToDate={(date) => setCheckOutDate(date.toISOString().substring(0, 10))}
      fromLabel="Check in"
      toLabel="Check out"
      range={true}
      icon={DateIcon}
      textFieldClass={style.textField}
      className={`${style.aSearchField} ${style.flightSearchField} ${style.dateSearchField}`}
      wrapperClass={style.textFieldWrapper}
      fromDate={checkIn}
      toDate={checkOut}
    />
  );
};

export default HotelDateField;
