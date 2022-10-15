import Button from "../../Button/Button";
import { SearchIcon } from "../../Icons";
import React, { useState, useReducer, useEffect } from "react";
import { useRouter } from "next/router";
import style from "../../HomeSearchForm/SearchForm.module.scss";
import { useHotelsContext } from "../../CommonContexts/HotelsContext";
import PlaceSearchField from "./PlaceSearchField";
import HotelDateField from "./HotelDateField";
import TravellersOptions from "./TravellersOptions";
import { useUIContext } from "../../UI";
import useIsMobile from "../../../utils/useIsMobile";
// import TravellersOptions from "./TravellersOptions";
const HotelSearchFields = () => {
  const history = useRouter();
  const isMobile = useIsMobile();
  const { place, checkIn, checkOut, adults, children, setActiveField, activeField } =
    useHotelsContext();
  const { openModal, isModalOn, currentModal, closeModal } = useUIContext();
  function searchHandler(e: React.SyntheticEvent) {
    e.preventDefault();
    history.push(`/searchResults/hotels?place=${place}&checkIn=${checkIn}&checkOut=${checkOut}`);
  }
  function handleOutsideClick(e: React.FocusEvent<Element>) {
    if (!e.relatedTarget || !(e.relatedTarget as HTMLElement).closest(`.${style.optionsWindow}`)) {
      setActiveField("");
    }
  }
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
    <form onSubmit={searchHandler} className={style.hotelSearchFields}>
      <div className={style.options}>
        <TravellersOptions />
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
