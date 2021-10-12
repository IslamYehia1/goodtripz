import React, { useState, useEffect, useReducer } from "react";
import {SearchIcon,ExpandIcon,FlyToIcon,FlyFromIcon,DateIcon} from "../Icons"; //prettier-ignore
import DateInput from "../SearchFields/RangeDatePicker";
import Button from "../Button/Button";
import { SearchModal } from "../Modal";
import AirportSearch from "../SearchFields/FlightAirportSearch/AirportSearch";
import { useRouter } from "next/router";
import style from "./SearchForm.module.scss";
import { PlusIcon, MinusIcon } from "../Icons";
import { searchTermsT, actionT } from "./types";
import SearchExtraModal from "../Modal/SearchExtraModal";

const FlightSearchFields = () => {
  let history = useRouter();

  const initial = {
    from: "",
    to: "",
    date: "",
    returnDate: "",
    adults: "1",
    children: "0",
  };
  const [optionWindow, setOptionWindow] = useState("");
  const [searchTerms, dispatch] = useReducer(reducer, initial);

  function reducer(prevState: searchTermsT, action: actionT): searchTermsT {
    switch (action.type) {
      case "from":
        return { ...prevState, from: action.val };
      case "to":
        return { ...prevState, to: action.val };
      case "date":
        return { ...prevState, date: action.val };
      case "returnDate":
        return { ...prevState, returnDate: action.val };
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
      case "addChild":
        return {
          ...prevState,
          children: (parseInt(prevState.children) + 1).toString(),
        };
      case "removeChild":
        return {
          ...prevState,
          children: (parseInt(prevState.children) - 1).toString(),
        };
      default:
        return prevState;
    }
  }

  function handleSearch(e: React.SyntheticEvent) {
    e.preventDefault();
    history.push(
      `/searchResults/flights?from=${searchTerms.from}&to=${searchTerms.to}&date=${searchTerms.date}&returnDate=${searchTerms.returnDate}&adults=${searchTerms.adults}&children=${searchTerms.children}`
    );
  }

  return (
    <form onSubmit={handleSearch} className={style.flightSearchFields}>
      <div className={style.options}>
        <SearchExtraModal
          isOpen={optionWindow === "fareType"}
          className={style.modal}
          closeModal={() => {
            setOptionWindow("");
          }}
        >
          <span className={style.fareType}>
            <Button
              icon={ExpandIcon}
              className={style.button}
              handleClick={(e) => {
                if (optionWindow === "fareType") setOptionWindow("");
                else setOptionWindow("fareType");
              }}
              type="button"
            >
              Round trip
            </Button>
            {optionWindow === "fareType" && (
              <div className={style.optionsWindow}>
                <ul>
                  <li onClick={() => {}}>One Way</li>
                  <li>Round Trip</li>
                </ul>
              </div>
            )}
          </span>
        </SearchExtraModal>
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
              type="button"
            >
              Adults
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
              </div>
            )}
          </span>
        </SearchExtraModal>
      </div>
      <div className={style.fields}>
        {/* -------- Departure airport search field -------- */}
        {/* <SearchModal
          altClassName={`${style.aSearchField} ${style.flightSearchField}`}
          className={style.modal}
        > */}
        <AirportSearch
          label="Flying from"
          inputClass={style.textField}
          wrapperClass={style.textFieldWrapper}
          suggestionsClass={style.suggestions}
          icon={FlyFromIcon}
          placeholder="Departure airport"
          onSuggestionSelect={(suggestion) =>
            dispatch({ type: "from", val: suggestion })
          }
        />
        {/* </SearchModal> */}
        {/* -------- Destination airport search field -------- */}
        {/* 
        <SearchModal
          altClassName={`${style.aSearchField} ${style.flightSearchField}`}
          className={style.modal}
        > */}
        <AirportSearch
          label="Flying to"
          icon={FlyToIcon}
          inputClass={style.textField}
          wrapperClass={style.textFieldWrapper}
          suggestionsClass={style.suggestions}
          placeholder="Destination airport"
          onSuggestionSelect={(suggestion) => {
            dispatch({ type: "to", val: suggestion });
          }}
        />
        {/* </SearchModal> */}
        {/* -------- Date picker search field -------- */}

        <SearchModal
          altClassName={`${style.aSearchField} ${style.flightSearchField} ${style.dateSearchField}`}
          className={style.modal}
        >
          <DateInput
            fromLabel="Date"
            toLabel="Return date"
            range={false}
            icon={DateIcon}
            className={style.textField}
            wrapperClass={style.textFieldWrapper}
            onFromDateSelected={(day: Date) => {
              dispatch({
                type: "date",
                val: day.toISOString().substring(0, 10),
              });
            }}
            onToDateSelected={(day: Date) => {
              dispatch({
                type: "returnDate",
                val: day.toISOString().substring(0, 10),
              });
            }}
          />
        </SearchModal>
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
