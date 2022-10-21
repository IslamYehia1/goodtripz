import React, { useState } from "react";
import Button from "../Button/Button";
import FlightSearchFields from "./FlightsFields/FlightSearchFields";
import HotelSearchFields from "./HotelsFileds/HotelSearchFields";
import style from "./SearchForm.module.scss";
import homeStyle from "../../../styles/Home.module.scss";
import { SearchModal } from "../Modal";
import CarsFields from "./CarsFields";
import { CarsSearchProvider } from "../CommonContexts/CarsContext";
import { FlightsProvider } from "../CommonContexts/FlightsContext";
import { HotelSearchProvider } from "../CommonContexts/HotelsContext";
const SearchForm = () => {
  const [formState, setFormState] = useState("flight");
  return (
    <>
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
                  setFormState("cars");
                }}
                className={style.button}
                id={formState === "cars" ? style.active : ""}
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
            <FlightsProvider>
              {formState === "flight" && (
                <>
                  <SearchModal />
                  <FlightSearchFields />
                </>
              )}
            </FlightsProvider>
            <HotelSearchProvider>
              {formState === "hotel" && (
                <>
                  <SearchModal />
                  <HotelSearchFields />
                </>
              )}
            </HotelSearchProvider>
            <CarsSearchProvider>
              {formState === "cars" && (
                <>
                  <SearchModal />
                  <CarsFields />
                </>
              )}
            </CarsSearchProvider>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchForm;
