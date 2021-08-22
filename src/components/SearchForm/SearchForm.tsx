import React, { useState } from "react";
import "./searchForm.scss";
import Button from "../Button/Button";
import FlightSearchFields from "./FlightSearchFields";
import HotelSearchFields from "./HotelSearchFields";
import searchIcon from "../../icons/search_white.svg";
import DateInput from "./DateInput";

const SearchForm = () => {
    const [formState, setFormState] = useState("hotel");
    function searchHandler() {}

    function activateTab(e: React.MouseEvent<HTMLButtonElement>) {
        document.querySelector("#active")!.id = "";
        //@ts-ignore
        e.target.id = "active";
    }

    return (
        <div id="searchForm">
            <div className="searchTabs">
                <Button
                    handleClick={(e) => {
                        activateTab(e);
                        setFormState("flight");
                    }}
                    id="active"
                    className="searchTab"
                >
                    Flights
                </Button>
                <Button
                    handleClick={(e) => {
                        activateTab(e);
                        setFormState("hotel");
                    }}
                    className="searchTab"
                >
                    Hotels
                </Button>
                <Button
                    handleClick={(e) => {
                        activateTab(e);
                        setFormState("car");
                    }}
                    className="searchTab"
                >
                    Cars
                </Button>
                <Button
                    handleClick={(e) => {
                        activateTab(e);
                        setFormState("package");
                    }}
                    className="searchTab"
                >
                    Packages
                </Button>
            </div>
            <div className="form">
                <div className="formFields">
                    {formState === "flight" && <FlightSearchFields />}
                    {formState === "hotel" && <HotelSearchFields />}
                    <DateInput />
                </div>
                <Button
                    handleClick={searchHandler}
                    icon={searchIcon}
                    className="button searchButton"
                >
                    Search
                </Button>
            </div>
        </div>
    );
};

export default SearchForm;
