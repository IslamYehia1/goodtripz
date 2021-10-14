import Button from "../Button/Button";
import DateInput from "../SearchFields/RangeDatePicker";
import { SearchIcon } from "../Icons";
import { SearchModal } from "../Modal";
import Image from "next/image";
import HotelSearch from "../SearchFields/HotelPlaceSearch/HotelPlaceSearch";
import { useState, useReducer } from "react";
import { LocationIcon, DateIcon, ExpandIcon } from "../Icons";
import { useRouter } from "next/router";
import style from "./SearchForm.module.scss";
import SearchExtraModal from "../Modal/SearchExtraModal";
import { PlusIcon, MinusIcon } from "../Icons";

const HotelSearchFields = () => {
  const history = useRouter();
  function searchHandler() {
    history.push(
      `/searchResults/hotels?place=${searchTerms.place}&checkIn=${searchTerms.checkIn}&checkOut=${searchTerms.checkOut}`
    );
  }
  const [optionWindow, setOptionWindow] = useState("");

  const initial = {
    place: "",
    checkIn: "",
    checkOut: "",
    adults: "1",
    rooms: "1",
  };
  function reducer(prevState: typeof initial, action: any) {
    switch (action.type) {
      case "place":
        return { ...prevState, place: action.val };
      case "checkIn":
        return { ...prevState, checkIn: action.val };
      case "checkOut":
        return { ...prevState, checkOut: action.val };
      case "addAdult":
        return {
          ...prevState,
          adults: (parseInt(prevState.adults) + 1).toString(),
        };
      case "removeAdult":
        return {
          ...prevState,
          adults: (parseInt(prevState.adults) - 1).toString(),
        };
      case "addRoom":
        return {
          ...prevState,
          adults: (parseInt(prevState.adults) + 1).toString(),
        };
      case "removeRoom":
        return {
          ...prevState,
          adults: (parseInt(prevState.adults) - 1).toString(),
        };
      default:
        return prevState;
    }
  }
  const [searchTerms, dispatch] = useReducer(reducer, initial);
  return (
    <form onSubmit={searchHandler} className={style.hotelSearchFields}>
      <div className={style.options}>
        <SearchExtraModal
          isOpen={optionWindow === "travellers"}
          className={style.modal}
          closeModal={() => {
            setOptionWindow("");
          }}
        >
          <span className={style.travellers}>
            <Button
              icon={ExpandIcon}
              className={style.button}
              handleClick={() => {
                if (optionWindow === "travellers") setOptionWindow("");
                else setOptionWindow("travellers");
              }}
            >
              1 Traveller
            </Button>
            {optionWindow === "travellers" && (
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
          </span>
        </SearchExtraModal>
      </div>
      <div className={style.fields}>
        <HotelSearch
          label="Going to"
          icon={LocationIcon}
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
          fromLabel="Check in"
          toLabel="Check out"
          icon={DateIcon}
          range={true}
          // className={style.textField}
          singleDateClass={style.textField}
          className={` ${style.aSearchField} ${style.flightSearchField} ${style.dateSearchField}`}
          wrapperClass={style.textFieldWrapper}
          dispatch={({ from, to }) => {
            dispatch({ type: "date", val: from });
            dispatch({ type: "returnDate", val: to });
          }}
        />
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
