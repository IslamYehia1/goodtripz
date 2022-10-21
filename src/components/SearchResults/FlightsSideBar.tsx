import SearchField from "../HomeSearchForm/SearchField";
import DateInput from "../RangeDatePicker";
import InputField from "../../components/InputField/InputField";
import { flightsSideBarT } from "./types";
import style from "../../../styles/SearchResults.module.scss";
import { useFlightContext } from "../CommonContexts/FlightsContext";
import AirportsSuggestions from "../Suggestions/AirportSuggestions";
import { useUIContext } from "../UI";
import useIsMobile from "../../utils/useIsMobile";
import SidebarSections from "./SidebarSections";
import { useEffect } from "react";
const FlightsSideBar = (props: flightsSideBarT) => {
  const {
    from,
    to,
    setFlightOrigin,
    setFlightDestination,
    adults,
    children,
    activeField,
    setActiveField,
    type,
    setFlightDate,
    setReturnDate,
    date,
    returnDate,
  } = useFlightContext();
  const { isModalOn, openModal, closeModal } = useUIContext();
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
          className={`${style.lilSearchField}`}
          inputClass={style.textField}
          wrapperClass={style.textFieldWrapper}
          suggestions={AirportsSuggestions}
          onSuggestionSelect={({ suggestion, IATA }: any) => {
            setFlightOrigin(suggestion, IATA);
          }}
          onChange={(value: any) => {
            setFlightOrigin(value);
          }}
          isActive={activeField === "originFlightSearch"}
          onActivate={() => {
            if (setActiveField) setActiveField("originFlightSearch");
            // if (isMobile) openModal("originFlightSearch");
          }}
          onDeactivate={() => {
            if (setActiveField) setActiveField("");
            // if (isModalOn) closeModal();
          }}
          value={from.name}
          label="Flying from"
          placeholder="Origin airport"
          name="flightDestination"
          // icon={FlyFromIcon}
        />
        <SearchField
          className={`${style.lilSearchField}`}
          inputClass={style.textField}
          wrapperClass={style.textFieldWrapper}
          suggestions={AirportsSuggestions}
          onSuggestionSelect={({ suggestion, IATA }: any) => {
            setFlightDestination(suggestion, IATA);
          }}
          onChange={(value: any) => {
            setFlightDestination(value);
          }}
          isActive={activeField === "destinationFlightSearch"}
          onActivate={() => {
            if (setActiveField) setActiveField("destinationFlightSearch");
            // if (isMobile) openModal("destinationFlightSearch");
          }}
          onDeactivate={() => {
            if (setActiveField) setActiveField("");
            // if (isModalOn) closeModal();
          }}
          value={to.name}
          label="Flying from"
          placeholder="Origin airport"
          name="flightDestination"
          // icon={FlyFromIcon}
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
      {!isMobile && <SidebarSections />}
      {/* </FiltersModal> */}
    </>
  );
};

export default FlightsSideBar;
