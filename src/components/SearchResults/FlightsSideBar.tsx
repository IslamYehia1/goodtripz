import SearchField from "../SearchField/SearchField";
import DateInput from "../RangeDatePicker";
import InputField from "../../components/InputField/InputField";
import { flightsSideBarT } from "./types";
import style from "../../../styles/SearchResults.module.scss";
import { useFlightContext } from "../CommonContexts/FlightsContext";
import AirportsSuggestions from "../Suggestions/AirportSuggestions";
import { useUIContext } from "../UI";
import useIsMobile from "../../utils/useIsMobile";
import SidebarSections from "./SideSections";
import { useEffect } from "react";
import ResultsSearchField from "./SearchField";
const FlightsSideBar = (props: flightsSideBarT) => {
  const {
    from,
    to,
    setFlightOrigin,
    setFlightDestination,
    adults,
    children,
    type,
    setFlightDate,
    setReturnDate,
    date,
    returnDate,
  } = useFlightContext();
  const { isModalOn, openModal, closeModal, activeField, setActiveField } = useUIContext();
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
          label="Flying From"
          placeholder="Origin Airport"
          fieldName="pickUpLocation"
          value={from.name}
          setValue={(value: any) => {
            setFlightOrigin(value);
          }}
        />
        <ResultsSearchField
          label="Flying To"
          placeholder="Destination Airport"
          fieldName="dropOffLocation"
          value={to.name}
          setValue={(value: any) => {
            setFlightDestination(value);
          }}
        />

        <DateInput
          isActive={activeField === "flightDates"}
          fromLabel="Date"
          toLabel="Return date"
          range={type === "roundTrip"}
          // icon={DateIcon}
          singleDateFieldClass={style.singleDateField}
          textFieldClass={style.textField}
          className={`${style.dateRangeWrapper}`}
          wrapperClass={`${style.lilSearchField} ${style.dateRangeWrapper}`}
          overlayClass={style.dateOverlay}
          fromDate={date}
          toDate={returnDate}
          onActivate={(field: string) => {
            // if (isMobile) openModal("flightDates");
            setActiveField("flightDates");
          }}
          onDeactivate={() => {
            setActiveField("");
            // if (isModalOn) closeModal();
          }}
          setFromDate={(date: Date) => {
            setFlightDate(date.toISOString().substring(0, 10));
          }}
          setToDate={(date: Date) => {
            setReturnDate(date.toISOString().substring(0, 10));
          }}
        />

        <div className={style.lilSearchField}>
          <InputField
            className={style.textField}
            wrapperClass={style.textFieldWrapper}
            value={`${adults} adults, ${children} children`}
            label="Travellers"
            name="travellers"
          />
        </div>
        <div className={style.lilSearchField}>
          <InputField
            className={style.textField}
            wrapperClass={style.textFieldWrapper}
            value="Economy"
            label="Tier"
            name="tier"
          />
        </div>
      </div>
      {/* <FiltersModal
        closeModal={() => {
          props.closeModal();
        }}
        isOpen={props.isFullScreen}
        className={style.modal}
      > */}
      {<SidebarSections />}
      {/* </FiltersModal> */}
    </>
  );
};

export default FlightsSideBar;
