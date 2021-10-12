import React, { useState, useEffect } from "react";
import InputField from "../../InputField/InputField";
import Suggestions from "../../Suggestions/Suggestions";
import { hotelAutoComplete as fetchSuggestions } from "../../../utils/fetchAutocomplete";
import { propsType, autocompleteT } from "./types";
const HotelSearch = (props: propsType) => {
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [suggestions, setSuggestions] = useState<autocompleteT>([]);
    const [searchTerm, setSearchTerm] = useState(props.value || "");
    function isSuggestionClicked(e: React.FocusEvent<HTMLDivElement>) {
        return (
            e.relatedTarget !== null &&
            (e.relatedTarget as HTMLElement).classList.contains(
                props.suggestionsClass
            )
        );
    }

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
                label={props.label}
                className={props.inputClass}
                wrapperClass={props.inputWrapperClass}
                icon={props.icon}
                name="hotelLocation"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {showSuggestions && (
                <Suggestions
                    onSuggestionClick={({ suggestion }) => {
                        setShowSuggestions(false);
                        setSearchTerm(suggestion);
                        if (props.onSuggestionSelected)
                            props.onSuggestionSelected(suggestion);
                    }}
                    className={props.suggestionsClass}
                    suggestions={suggestions}
                />
            )}
        </div>
    );
};
export default HotelSearch;
