import Button from "../../Button/Button";
import { SearchIcon } from "../../Icons";
import React, { useState, useReducer } from "react";
import { ExpandIcon } from "../../Icons";
import { useRouter } from "next/router";
import style from "../../HomeSearchForm/SearchForm.module.scss";
import { useHotelsContext } from "../HotelsContext";
import PlaceSearchField from "./PlaceSearchField";
import HotelDateField from "./HotelDateField";
import SearchModal from "../../Modal/SearchModal";
// import TravellersOptions from "./TravellersOptions";
const HotelSearchFields = () => {
  const history = useRouter();
  const { place, checkIn, checkOut, adults, children, rooms } = useHotelsContext();
  function searchHandler(e: React.SyntheticEvent) {
    e.preventDefault();
    history.push(`/searchResults/hotels?place=${place}&checkIn=${checkIn}&checkOut=${checkOut}`);
  }

  const [activeField, setActiveField] = useState<
    "placeSearch" | "checkInDate" | "checkOutDate" | "travellersOptions" | ""
  >("");

  return (
    <>
      <SearchModal />
      <form onSubmit={searchHandler} className={style.hotelSearchFields}>
        <div className={style.options}>
          <div className={style.searchFilterWrapper}>
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
          </div>
          {/* {activeField === "travellersOptions" && (
          <TravellersOptions dispatch={dispatch} searchTerms={searchTerms} />
        )} */}
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
    </>
  );
};
export default HotelSearchFields;
