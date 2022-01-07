import React, { useState, useContext } from "react";
import {SearchIcon,ExpandIcon} from "../../Icons"; //prettier-ignore
import Button from "../../Button/Button";
import { useRouter } from "next/router";
import style from "../SearchForm.module.scss";
import { flightsContext } from "../FlightsContext";
import OriginFlightField from "./OriginFlightField";
import DestinationFlightField from "./DestinationFlightField";
import FlightDateField from "./FlightDateFIeld";
import FlightTypeOptions from "./FlightTypeOptions";
import TravellersOptions from "./TravellersOptions";
import SearchModal from "../../Modal/SearchModal";

type ACTIVE_FIELD =
  | "departure"
  | "arrival"
  | "date"
  | "returnDate"
  | "travellersFilter"
  | "flightTypeFilter"
  | "";

const FlightSearchFields = () => {
  let history = useRouter();
  const context = useContext(flightsContext);
  const searchTerms: any = context;

  const [activeField, setActiveField] = useState<ACTIVE_FIELD>("");
  // Only one filter window can be open at once, hence the lefted state
  function handleSearch(e: React.SyntheticEvent) {
    e.preventDefault();
    history.push(
      `/searchResults/flights?from=${searchTerms.from.IATA}&to=${searchTerms.to.IATA}&date=${searchTerms.date}&returnDate=${searchTerms.returnDate}&adults=${searchTerms.adults}&children=${searchTerms.children}`
    );
  }
  function toggleField(field: ACTIVE_FIELD) {
    if (activeField === field) setActiveField("");
    else setActiveField(field);
  }
  return (
    <>
      {/* <FlightsProvider> */}
      <SearchModal />

      <form onSubmit={handleSearch} className={style.flightSearchFields}>
        <div className={style.options}>
          <div className={style.filterButtonWrapper}>
            <Button
              icon={ExpandIcon}
              className={style.button}
              handleClick={() => toggleField("flightTypeFilter")}
              type="button"
            >
              {searchTerms.type === "oneWay" ? "One way" : "Round trip"}
            </Button>
          </div>
          {activeField === "flightTypeFilter" && <FlightTypeOptions />}

          <div className={style.filterButtonWrapper}>
            <Button
              icon={ExpandIcon}
              className={style.button}
              handleClick={() => toggleField("travellersFilter")}
              type="button"
            >
              {`${parseInt(searchTerms.adults) + parseInt(searchTerms.children)} Travellers`}
            </Button>
          </div>
          {activeField === "travellersFilter" && <TravellersOptions />}
        </div>
        <div className={style.fields}>
          {/* -------- Departure airport search field -------- */}
          <OriginFlightField />
          {/* -------- Destination airport search field -------- */}
          <DestinationFlightField />
          {/* -------- Date picker search field -------- */}
          <FlightDateField />

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
      {/* </FlightsProvider> */}
    </>
  );
};

export default FlightSearchFields;
