import Button from "../Button/Button";
import DateInput from "../SearchFields/RangeDatePicker";
import { SearchIcon } from "../Icons";
import HotelSearch from "../SearchFields/HotelPlaceSearch/HotelPlaceSearch";
import React, { useState, useReducer } from "react";
import { LocationIcon, DateIcon, ExpandIcon } from "../Icons";
import { useRouter } from "next/router";
import style from "./SearchForm.module.scss";
import { PlusIcon, MinusIcon } from "../Icons";
import reducer from "../SearchResults/hotelsReducer";
import SearchFilter from "./SearchFilter";
const HotelSearchFields = () => {
  const history = useRouter();
  function searchHandler(e: React.SyntheticEvent) {
    e.preventDefault();
    history.push(
      `/searchResults/hotels?place=${searchTerms.place}&checkIn=${searchTerms.checkIn}&checkOut=${searchTerms.checkOut}`
    );
  }

  const initial = {
    place: "",
    checkIn: "",
    checkOut: "",
    adults: "1",
    children: "0",
    rooms: "1",
  };
  const [activeField, setActiveField] = useState<"placeSearch" | "checkInDate" | "checkOutDate" | "travellers" | "">(
    ""
  );

  const [searchTerms, dispatch] = useReducer(reducer, initial);
  return (
    <form onSubmit={searchHandler} className={style.hotelSearchFields}>
      <div className={style.options}>
        <SearchFilter
          label={`${parseInt(searchTerms.adults) + parseInt(searchTerms.children)} Travellers`}
          expand={() => setActiveField("travellers")}
          shrink={() => setActiveField("")}
          isExpanded={activeField === "travellers"}
        >
          <div className={style.travellers}>
            <Button
              icon={ExpandIcon}
              className={style.button}
              handleClick={() => {
                if (activeField === "travellers") setActiveField("");
                else setActiveField("travellers");
              }}
            >
              1 Traveller
            </Button>
            {activeField === "travellers" && (
              <div className={style.optionsWindow}>
                <ul>
                  <li>
                    <Button
                      handleClick={(e) => {
                        dispatch({ type: "addAdult", val: "" });
                      }}
                      type="button"
                      icon={PlusIcon}
                    />
                    <span>{`${searchTerms.adults} Adults`}</span>
                    <Button
                      handleClick={(e) => {
                        dispatch({ type: "removeAdult", val: "" });
                      }}
                      type="button"
                      icon={MinusIcon}
                    />
                  </li>
                  <li>
                    <Button
                      handleClick={(e) => {
                        dispatch({ type: "addChild", val: "" });
                      }}
                      icon={PlusIcon}
                      type="button"
                    />
                    {`${searchTerms.rooms} Children`}
                    <Button
                      handleClick={(e) => {
                        dispatch({ type: "removeChild", val: "" });
                      }}
                      type="button"
                      icon={MinusIcon}
                    />
                  </li>
                </ul>
              </div>
            )}
          </div>
        </SearchFilter>
      </div>
      <div className={style.fields}>
        <HotelSearch
          isActive={activeField === "placeSearch"}
          activate={() => setActiveField("placeSearch")}
          deactivate={() => setActiveField("")}
          label="Going to"
          icon={LocationIcon}
          className={`${style.aSearchField} ${style.hotelSearchField}`}
          inputClass={style.textField}
          inputWrapperClass={style.textFieldWrapper}
          suggestionsClass={style.suggestions}
          searchTerm={searchTerms.place}
          dispatch={dispatch}
          onSuggestionSelected={(suggestion) => {
            dispatch({ type: "place", val: suggestion });
          }}
        />

        <DateInput
          isActive={activeField}
          setActiveField={setActiveField}
          fromLabel="Check in"
          toLabel="Check out"
          icon={DateIcon}
          range={true}
          // className={style.textField}
          textFieldClass={style.textField}
          className={` ${style.aSearchField} ${style.flightSearchField} ${style.dateSearchField}`}
          wrapperClass={style.textFieldWrapper}
          dispatch={({ from, to }) => {
            if (from) dispatch({ type: "checkIn", val: from });
            if (to) dispatch({ type: "checkOut", val: to });
          }}
        />
        <Button className={`${style.button} ${style.searchButton}`} handleClick={searchHandler} icon={SearchIcon}>
          <SearchIcon />
        </Button>
      </div>
    </form>
  );
};
export default HotelSearchFields;
