import DateInput from "../../RangeDatePicker";
import InputField from "../../InputField/InputField";
import { flightsSideBarT } from "../types";
import style from "/styles/SearchResults.module.scss";
import { useFlightContext } from "../../CommonContexts/FlightsContext";
import SidebarSections from "../SideSections";
import ResultsSearchField from "../SearchField";
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

  return (
    <>
      <div className={`${style.sideSection} ${style.searchTerms}`}>
        <ResultsSearchField
          label="Flying From"
          placeholder="Origin Airport"
          fieldName="originFlightSearch"
          value={from.name}
          setValue={(value: any) => {
            setFlightOrigin(value);
          }}
        />
        <ResultsSearchField
          label="Flying To"
          placeholder="Destination Airport"
          fieldName="destinationFlightSearch"
          value={to.name}
          setValue={(value: any) => {
            setFlightDestination(value);
          }}
        />

        <DateInput
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
