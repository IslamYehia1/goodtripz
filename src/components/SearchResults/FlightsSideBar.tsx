import AirportSearch from "../../components/SearchFields/FlightAirportSearch/AirportSearch";
import DateInput from "../../components/SearchFields/RangeDatePicker";
import { FiltersModal } from "../../components/Modal";
import InputField from "../../components/InputField/InputField";
import Button from "../../components/Button/Button";
import { flightsSideBarT } from "./types";
import { SearchIcon } from "../../components/Icons";
import style from "../../../styles/SearchResults.module.scss";
import { useState } from "react";

const FlightsSideBar = (props: flightsSideBarT) => {
  const [activeField, setActiveField] = useState<
    "departure" | "arrival" | "date" | "returnDate" | "travellersFilter" | "flightTypeFilter" | ""
  >("");
  return (
    <>
      <div className={`${style.sideSection} ${style.searchTerms}`}>
        <AirportSearch
          isActive={activeField === "departure"}
          activate={() => {
            setActiveField("departure");
          }}
          deactivate={() => {
            setActiveField("");
          }}
          label="From"
          className={style.lilSearchField}
          inputClass={style.textField}
          wrapperClass={style.textFieldWrapper}
          suggestionsClass={style.suggestions}
          placeholder="Departure"
          searchTerm={`${props.searchQuery.from.name}`}
          dispatch={({ val, IATA }) => {
            props.dispatch({
              type: "from",
              val: val,
              IATA: IATA || props.searchQuery.from.IATA,
            });
          }}
        />

        <AirportSearch
          isActive={activeField === "arrival"}
          activate={() => {
            setActiveField("arrival");
          }}
          deactivate={() => {
            setActiveField("");
          }}
          label="To"
          className={style.lilSearchField}
          inputClass={style.textField}
          wrapperClass={style.textFieldWrapper}
          suggestionsClass={style.suggestions}
          placeholder="Destination"
          searchTerm={`${props.searchQuery.to.name}`}
          dispatch={({ val, IATA }) => {
            props.dispatch({
              type: "to",
              val: val,
              IATA: IATA || props.searchQuery.to.IATA,
            });
          }}
        />

        <DateInput
          className={`${style.dateRangeWrapper} `}
          isActive={activeField}
          setActiveField={setActiveField}
          wrapperClass={style.lilSearchField}
          textFieldClass={style.textField}
          fromVal={props.searchQuery.date}
          toVal={props.searchQuery.returnDate}
          range={true}
          fromLabel="Date"
          toLabel="Return date"
          dispatch={({ from, to }) => {
            if (from) props.dispatch({ type: "from", val: from });
            if (to) props.dispatch({ type: "to", val: to });
          }}
        />
        <div className={style.lilSearchField}>
          <InputField
            className={style.textField}
            wrapperClass={style.textFieldWrapper}
            value={`${props.searchQuery.adults} adults, ${props.searchQuery.children} children`}
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
      <FiltersModal
        closeModal={() => {
          props.closeModal();
        }}
        isOpen={props.isFullScreen}
        className={style.modal}
      >
        {(!props.isMobile || props.isFullScreen) && (
          <>
            <div className={`${style.sideSection} ${style.priceRange}`}>
              <span>Price range</span>
              <input type="range" min="1" max="100" className={style.priceSlider} />
            </div>
            <div className={`${style.sideSection} ${style.addExtra}`}>
              <div className={`${style.addHotel}`}>
                <input type="checkbox" name="addHotel" />
                <label htmlFor="addHotel">Add hotel</label>
              </div>
              <div className={`${style.addCar}`}>
                <input type="checkbox" name="addCar" />
                <label htmlFor="addCar">Add car</label>
              </div>
            </div>
            <div>
              <Button handleClick={() => {}} className={`${style.button} ${style.updateSearchBtn}`} icon={SearchIcon}>
                Update
              </Button>
            </div>
          </>
        )}
      </FiltersModal>
    </>
  );
};

export default FlightsSideBar;
