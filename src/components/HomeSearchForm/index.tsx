import React, { useState } from "react";
import Button from "../Button/Button";
import FlightSearchFields from "./Flights/FlightSearchFields";
import HotelSearchFields from "./Hotels/HotelSearchFields";
import style from "./SearchForm.module.scss";
import homeStyle from "../../../styles/Home.module.scss";
import { FlightsProvider } from "./FlightsContext";
import { HotelSearchProvider } from "./HotelsContext";
const SearchForm = () => {
  const [formState, setFormState] = useState("flight");
  return (
    <div id={homeStyle.searchForm}>
      <div className={style.form}>
        <div className={style.searchTabs}>
          <span className={style.searchTab}>
            <Button
              handleClick={(e) => {
                setFormState("flight");
              }}
              id={formState === "flight" ? style.active : ""}
              className={style.button}
            >
              Flights
            </Button>
          </span>
          <span className={style.searchTab}>
            <Button
              handleClick={(e) => {
                setFormState("hotel");
              }}
              className={style.button}
              id={formState === "hotel" ? style.active : ""}
            >
              Hotels
            </Button>
          </span>
          <span className={style.searchTab}>
            <Button
              handleClick={(e) => {
                setFormState("car");
              }}
              className={style.button}
              id={formState === "car" ? style.active : ""}
            >
              Cars
            </Button>
          </span>
          <span className={style.searchTab}>
            <Button
              handleClick={(e) => {
                setFormState("package");
              }}
              className={style.button}
              id={formState === "package" ? style.active : ""}
            >
              Packages
            </Button>
          </span>
        </div>
        <div className={style.searchFields}>
          {formState === "flight" && (
            <FlightsProvider>
              <FlightSearchFields />
            </FlightsProvider>
          )}
          {formState === "hotel" && (
            <HotelSearchProvider>
              <HotelSearchFields />
            </HotelSearchProvider>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
