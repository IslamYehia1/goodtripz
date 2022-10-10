import Button from "../../Button/Button";
import { SearchIcon } from "../../Icons";
import React, { useState, useReducer } from "react";
import { ExpandIcon } from "../../Icons";
import { useRouter } from "next/router";
import style from "../../HomeSearchForm/SearchForm.module.scss";
import { useHotelsContext } from "../../CommonContexts/HotelsContext";
import PlaceSearchField from "./PlaceSearchField";
import HotelDateField from "./HotelDateField";
import TravellersOptions from "./TravellersOptions";
// import TravellersOptions from "./TravellersOptions";
const HotelSearchFields = () => {
  const history = useRouter();
  const { place, checkIn, checkOut, adults, children, setActiveField, activeField } =
    useHotelsContext();
  function searchHandler(e: React.SyntheticEvent) {
    e.preventDefault();
    history.push(`/searchResults/hotels?place=${place}&checkIn=${checkIn}&checkOut=${checkOut}`);
  }
  function handleOutsideClick(e: React.FocusEvent<Element>) {
    if (!e.relatedTarget || !(e.relatedTarget as HTMLElement).closest(`.${style.optionsWindow}`)) {
      setActiveField("");
    }
  }

  return (
    <form onSubmit={searchHandler} className={style.hotelSearchFields}>
      <div className={style.options}>
        <div onBlur={handleOutsideClick} className={style.searchFilterWrapper}>
          <Button
            icon={ExpandIcon}
            className={style.button}
            handleClick={() => {
              if (activeField === "travellersOptions") setActiveField("");
              else setActiveField("travellersOptions");
            }}
            type="button"
          >
            {`${parseInt(adults) + parseInt(children)} Travellers`}
          </Button>
          {activeField === "travellersOptions" && <TravellersOptions />}
        </div>
      </div>
      <div className={style.fields}>
        <PlaceSearchField />
        <HotelDateField />
        <Button
          className={`${style.button} ${style.searchButton}`}
          handleClick={searchHandler}
          icon={SearchIcon}
        >
          <SearchIcon />
        </Button>
      </div>
    </form>
  );
};
export default HotelSearchFields;
