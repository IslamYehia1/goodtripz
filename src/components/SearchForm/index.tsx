import React, { useState, useEffect } from "react";
import "./searchForm.scss";
import Button from "../Button/Button";
import FlightSearchFields from "./FlightSearchFields";
import HotelSearchFields from "./HotelSearchFields";

const SearchForm = () => {
    const [formState, setFormState] = useState("hotel");
    return (
        <div id="searchForm">
            <div className="form">
                <div className="searchTabs">
                    <span className="searchTab">
                        <Button
                            handleClick={(e) => {
                                setFormState("flight");
                            }}
                            id={formState === "flight" ? "active" : ""}
                            className="button"
                        >
                            Flights
                        </Button>
                    </span>
                    <span className="searchTab">
                        <Button
                            handleClick={(e) => {
                                setFormState("hotel");
                            }}
                            className="button"
                            id={formState === "hotel" ? "active" : ""}
                        >
                            Hotels
                        </Button>
                    </span>
                    <span className="searchTab">
                        <Button
                            handleClick={(e) => {
                                setFormState("car");
                            }}
                            className="button"
                            id={formState === "car" ? "active" : ""}
                        >
                            Cars
                        </Button>
                    </span>
                    <span className="searchTab">
                        <Button
                            handleClick={(e) => {
                                setFormState("package");
                            }}
                            className="button"
                            id={formState === "package" ? "active" : ""}
                        >
                            Packages
                        </Button>
                    </span>
                </div>
                <div className="searchFields">
                    {formState === "flight" && <FlightSearchFields />}
                    {formState === "hotel" && <HotelSearchFields />}
                </div>
            </div>
        </div>
    );
};

export default SearchForm;
