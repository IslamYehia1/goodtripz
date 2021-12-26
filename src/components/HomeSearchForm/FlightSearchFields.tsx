import React, { useState, useEffect, useReducer } from "react";
import {SearchIcon,ExpandIcon,FlyToIcon,FlyFromIcon,DateIcon} from "../Icons"; //prettier-ignore
import DateInput from "../SearchFields/RangeDatePicker";
import Button from "../Button/Button";
import AirportSearch from "../SearchFields/FlightAirportSearch/AirportSearch";
import { useRouter } from "next/router";
import style from "./SearchForm.module.scss";
import { PlusIcon, MinusIcon } from "../Icons";
import reducer from "../SearchResults/flightsReducer";
import SearchFilter from "./SearchFilter";
const FlightSearchFields = () => {
  let history = useRouter();

  const initial = {
    type: "roundTrip",
    from: { name: "", IATA: "" },
    to: { name: "", IATA: "" },
    date: "",
    returnDate: "",
    adults: "1",
    children: "0",
  };
  // Note: the reducer is in a standalone file as it is shared
  //between this component and the flight search fields in the
  //search results to keep the state between two pages independent
  const [searchTerms, dispatch] = useReducer(reducer, initial);
  const [activeField, setActiveField] = useState<
    "departure" | "arrival" | "date" | "returnDate" | "travellersFilter" | "flightTypeFilter" | ""
  >("");
  // Only one filter window can be open at once, hence the lefted state

  function handleSearch(e: React.SyntheticEvent) {
    e.preventDefault();
    history.push(
      `/searchResults/flights?from=${searchTerms.from.IATA}&to=${searchTerms.to.IATA}&date=${searchTerms.date}&returnDate=${searchTerms.returnDate}&adults=${searchTerms.adults}&children=${searchTerms.children}`
    );
  }

  return (
    <form onSubmit={handleSearch} className={style.flightSearchFields}>
      <div className={style.options}>
        <SearchFilter
          label={searchTerms.type === "oneWay" ? "One way" : "Round trip"}
          expand={() => setActiveField("flightTypeFilter")}
          shrink={() => setActiveField("")}
          isExpanded={activeField === "flightTypeFilter"}
        >
          <ul>
            <li
              onClick={() => {
                dispatch({ type: "flightType", val: "oneWay" });
              }}
            >
              One Way
            </li>
            <li
              onClick={() => {
                dispatch({ type: "flightType", val: "roundTrip" });
              }}
            >
              Round Trip
            </li>
          </ul>
        </SearchFilter>

        <SearchFilter
          label={`${parseInt(searchTerms.adults) + parseInt(searchTerms.children)} Travellers`}
          expand={() => setActiveField("travellersFilter")}
          shrink={() => setActiveField("")}
          isExpanded={activeField === "travellersFilter"}
        >
          <ul>
            <li>
              <Button handleClick={() => dispatch({ type: "addAdult", val: "" })} icon={PlusIcon} />
              <span>{`${searchTerms.adults} Adults`}</span>
              <Button handleClick={(e) => dispatch({ type: "removeAdult", val: "" })} type="button" icon={MinusIcon} />
            </li>
            <li>
              <Button
                handleClick={(e) => {
                  dispatch({ type: "addChild", val: "" });
                }}
                icon={PlusIcon}
                type="button"
              />
              {`${searchTerms.children} Children`}
              <Button
                handleClick={(e) => {
                  dispatch({ type: "removeChild", val: "" });
                }}
                type="button"
                icon={MinusIcon}
              />
            </li>
          </ul>
        </SearchFilter>
      </div>
      <div className={style.fields}>
        {/* -------- Departure airport search field -------- */}

        <AirportSearch
          isActive={activeField === "departure"}
          activate={() => {
            setActiveField("departure");
          }}
          deactivate={() => {
            setActiveField("");
          }}
          label="Flying from"
          className={`${style.aSearchField} ${style.flightSearchField}`}
          inputClass={style.textField}
          wrapperClass={style.textFieldWrapper}
          suggestionsClass={style.suggestions}
          icon={FlyFromIcon}
          placeholder="Departure airport"
          dispatch={({ val, IATA }) => dispatch({ type: "from", val: val, IATA: IATA })}
          searchTerm={searchTerms.from.name}
        />
        {/* -------- Destination airport search field -------- */}

        <AirportSearch
          isActive={activeField === "arrival"}
          activate={() => {
            setActiveField("arrival");
          }}
          deactivate={() => {
            setActiveField("");
          }}
          label="Flying to"
          className={`${style.aSearchField} ${style.flightSearchField}`}
          icon={FlyToIcon}
          inputClass={style.textField}
          wrapperClass={style.textFieldWrapper}
          suggestionsClass={style.suggestions}
          placeholder="Destination airport"
          dispatch={({ val, IATA }) => dispatch({ type: "to", val: val, IATA: IATA })}
          searchTerm={searchTerms.to.name}
        />
        {/* -------- Date picker search field -------- */}

        <DateInput
          isActive={activeField}
          setActiveField={setActiveField}
          fromLabel="Date"
          toLabel="Return date"
          range={searchTerms.type === "roundTrip"}
          icon={DateIcon}
          textFieldClass={style.textField}
          className={`${style.aSearchField} ${style.flightSearchField} ${style.dateSearchField}`}
          wrapperClass={style.textFieldWrapper}
          dispatch={({ from, to }) => {
            if (from) dispatch({ type: "date", val: from });
            if (to) dispatch({ type: "returnDate", val: to });
          }}
        />

        <Button
          className={`${style.button} ${style.searchButton}`}
          type="submit"
          icon={SearchIcon}
          handleClick={handleSearch}
        >
          <SearchIcon />
        </Button>
      </div>
    </form>
  );
};

export default FlightSearchFields;
