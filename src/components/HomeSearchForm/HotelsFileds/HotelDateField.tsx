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
  const fieldRef: any = useOutsideClick(activeField == "date", () => {
    setActiveField("");
  });
  return (
    <div ref={fieldRef} className={`${style.searchFragment} ${style.dateSearchField}`}>
      <DateInput
        activeField={activeField == "date"}
        onActivate={(field: any) => {
          // if (isMobile) openModal("hotelDates");
          setActiveField("date");
        }}
        overlayClass={`${style.dateOverlay} ${
          activeField == "date" && isModalOn ? style.inModal : ""
        }`}
        onDeActivate={() => {
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
        className={`${style.aSearchField} ${style.flightSearchField} ${style.dateSearchField} ${
          activeField == "date" && isModalOn ? style.inModal : ""
        }`}
        wrapperClass={style.textFieldWrapper}
        fromDate={checkIn}
        toDate={checkOut}
      />
    </div>
  );
};

export default HotelDateField;
