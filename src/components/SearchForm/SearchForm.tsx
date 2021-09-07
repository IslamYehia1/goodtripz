import React, { useState } from "react";
import "./searchForm.scss";
import Button from "../Button/Button";
import FlightSearchFields from "./FlightSearchFields";
import HotelSearchFields from "./HotelSearchFields";

const SearchForm = () => {
    const [formState, setFormState] = useState("hotel");

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
                <div className="searchFields">
                    {formState === "flight" && <FlightSearchFields />}
                    {formState === "hotel" && <HotelSearchFields />}
                </div>
            </div>
        </div>
    );
};

export default SearchForm;
