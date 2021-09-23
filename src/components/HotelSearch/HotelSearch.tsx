import React, { useState, useEffect } from "react";
import InputField from "../InputField/InputField";
import locationIcon from "../../icons/location.svg";
import Suggestions from "../../components/SearchForm/Suggestions";
import { hotelAutoComplete as fetchSuggestions } from "../../utils/fetchSuggestions";
type props = {
    inputClass: string;
};
const HotelSearch = (props: props) => {
    function isSuggestionClicked(e: React.FocusEvent<HTMLDivElement>) {
        return (
            e.relatedTarget !== null &&
            (e.relatedTarget as HTMLElement).classList.contains("suggestions")
        );
    }
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [suggestions, setSuggestions] = useState<Array<string[]>>([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        (async () => {
            setSuggestions(await fetchSuggestions(searchTerm));
        })();
    }, [searchTerm]);
    return (
        <div
            onBlur={(e) => {
                if (!isSuggestionClicked(e)) setShowSuggestions(false);
            }}
            onFocus={() => setShowSuggestions(true)}
        >
            <InputField
                placeholder="Hotel location"
                label="Going to"
                className={props.inputClass}
                icon={locationIcon}
                name="hotelLocation"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {showSuggestions && (
                <Suggestions
                    onSuggestionClick={(searchTerm) => {
                        setShowSuggestions(false);
                        setSearchTerm(searchTerm);
                    }}
                    className="suggestions"
                    suggestions={suggestions}
                />
            )}
        </div>
    );
};
export default HotelSearch;
